# Form submissions: Google Sheet + confirmation & notification emails

When someone submits the **/apply** (priority list) or **/teams** (team trip / club partnership) form, the site now does three things at once:

```
                     ┌──► Google Sheet        one row per submission, one tab per form
form ──► validate ──┼──► email to the team   "New Priority List Application: Maria Perez — Miami"
                     └──► email to the person "You're on the ESP priority list"
```

The code is done and type-checks. What's left is the account setup only you can do: a Google Sheet with a small script attached, a Resend account with your domain verified, and six environment variables on Vercel. Budget about 45 minutes, plus however long your DNS takes to propagate (usually under 15 minutes, occasionally longer).

**You'll need:** a Google account for the sheet (ideally a shared ESP one, not a personal login), access to the DNS records for `eurosoccerpassport.com`, and access to the Vercel project.

---

## Part 1 — The Google Sheet (≈10 min)

The site posts each submission to a tiny web endpoint that lives *inside* the spreadsheet (a Google Apps Script). No Google Cloud project, no API keys, nothing to pay for.

### 1.1 Create the sheet

1. Go to [sheets.new](https://sheets.new) while signed in to the account that should own the data.
2. Name it something like **ESP Website Submissions**. Leave it empty — the script creates the tabs and headers on the first submission.
3. Keep this tab open; you'll want its URL later for `GOOGLE_SHEET_URL`.

### 1.2 Attach the script

1. In the sheet: **Extensions → Apps Script**. A new tab opens with an empty `Code.gs`.
2. Delete the placeholder `function myFunction() {}` and paste the entire contents of **`web/integrations/google-sheets/Code.gs`** from the repo.
3. Click *Untitled project* (top left) and rename it **ESP form webhook**. Press ⌘S to save.

### 1.3 Set the shared secret

This stops anyone who discovers the URL from writing junk into your sheet.

1. Generate a secret in your terminal: `openssl rand -hex 24` (copy the output).
2. In Apps Script, click the gear icon **Project Settings** (left sidebar) → scroll to **Script Properties** → **Add script property**.
3. Property: `WEBHOOK_SECRET` · Value: the string you just generated → **Save script properties**.
4. Keep the secret — it goes into `GOOGLE_SHEET_WEBHOOK_SECRET` in Part 3.

### 1.4 Deploy it as a web app

1. Top right: **Deploy → New deployment**.
2. Click the gear next to *Select type* → **Web app**.
3. Fill in: Description `ESP form webhook` · **Execute as: Me** · **Who has access: Anyone**. ("Anyone" is required — the site calls this from a server, not from a signed-in Google user. The secret is what protects it.)
4. **Deploy** → **Authorize access** → pick the account → you'll see *Google hasn't verified this app* → **Advanced → Go to ESP form webhook (unsafe)** → **Allow**. That warning is normal for a script you wrote yourself.
5. Copy the **Web app URL**. It ends in `/exec`. That's `GOOGLE_SHEET_WEBHOOK_URL`.

### 1.5 Check it works

Open the `/exec` URL in a browser — you should see `{"ok":true,"message":"ESP form webhook is live…"}`.

Then send a real test row from your terminal — one line, with your URL and secret pasted in:

```bash
curl -sL "PASTE_EXEC_URL" -H 'Content-Type: application/json' -d '{"secret":"PASTE_SECRET","sheet":"Priority List","submittedAt":"2026-09-15T17:00:00Z","row":{"Type":"Test","Parent name":"Test Parent","Email":"test@example.com"}}'
```

Expected: `{"ok":true,"sheet":"Priority List","row":2}` and a new **Priority List** tab in the sheet with a bold header row and one row of data. Delete the test row (keep the headers).

> Don't add `-X POST` to that command. Apps Script answers a POST with a redirect to `script.googleusercontent.com`, which only accepts GET; `-d` already makes the first request a POST, and `-L` then correctly switches to GET for the redirect — exactly what the site's own code does. With `-X POST`, curl forces POST on the redirect too and Google replies with a "Sorry, unable to open the file at this time" page.

> **Editing the script later?** Saving the file is not enough — the live URL keeps running the old version until you go **Deploy → Manage deployments → ✎ (edit) → Version: New version → Deploy**. The URL stays the same.

---

## Part 2 — Email with Resend (≈15 min + DNS wait)

[Resend](https://resend.com) is the transactional email service; the free plan (3,000 emails/month, 100/day) covers the site for now. Each submission sends two emails, so that's up to 50 submissions a day before you'd need a paid plan.

### 2.1 Create the account and verify the domain

1. Sign up at resend.com — again, preferably with a shared ESP login.
2. **Domains → Add Domain**. Enter `eurosoccerpassport.com`, pick the region closest to your recipients (US East for U.S. families), and add it.
3. Resend shows you DNS records to create. Add them at wherever the domain's DNS is managed (GoDaddy, Namecheap, Cloudflare, Google Domains/Squarespace…). Typically:
   - a **TXT** record at `resend._domainkey` (DKIM — proves the email really came from you)
   - an **MX** and a **TXT** record at the `send` subdomain (SPF / return-path for bounces)
   - after verifying, a **TXT** at `_dmarc` with `v=DMARC1; p=none;` (Resend prompts you for this — do it, it noticeably helps inbox placement)

   These live on a subdomain and a DKIM selector, so they don't interfere with any existing email you receive at the domain. **If you use Cloudflare:** set each of these records to *DNS only* (grey cloud), not proxied, or verification never completes.
4. Back in Resend, click **Verify**. It usually flips to *Verified* within 15 minutes; DNS can occasionally take longer.

> Until the domain is verified, Resend only lets you send to the email address you signed up with, from `onboarding@resend.dev`. You can wire everything up in the meantime; real sending starts once the domain is green.

### 2.2 Create an API key

**API Keys → Create API Key** → Name `esp-website-production` · Permission **Sending access** · Domain `eurosoccerpassport.com` → **Create**. Copy it immediately — it's shown once. That's `RESEND_API_KEY`.

### 2.3 Decide the addresses

- **`EMAIL_FROM`** — what applicants see as the sender. Must be on the verified domain, e.g. `Euro Soccer Passport <hello@eurosoccerpassport.com>`. It does not need to be a real mailbox.
- **`EMAIL_TEAM_INBOX`** — where the "someone just submitted" email goes. Any address works (a Gmail is fine). Comma-separate for more than one person: `matias@…, partner@…`.
- **`EMAIL_REPLY_TO`** — where replies to the applicant's confirmation land. **This one must be a mailbox someone actually reads.** If `hello@eurosoccerpassport.com` isn't a real inbox yet, put the address you check here (or leave it blank and it falls back to the first team inbox address).

Team notifications already have their reply-to set to the applicant's email, so hitting *Reply* on one starts a conversation with the person directly.

---

## Part 3 — Environment variables

Six variables (plus two optional ones). Values come from Parts 1 and 2:

| Variable | Value | Required |
|---|---|---|
| `GOOGLE_SHEET_WEBHOOK_URL` | the `/exec` URL from 1.4 | yes |
| `GOOGLE_SHEET_WEBHOOK_SECRET` | the secret from 1.3 | yes |
| `GOOGLE_SHEET_URL` | the sheet's normal browser URL (linked from the team email) | optional |
| `RESEND_API_KEY` | from 2.2 | yes |
| `EMAIL_FROM` | `Euro Soccer Passport <hello@eurosoccerpassport.com>` | yes |
| `EMAIL_TEAM_INBOX` | the team address(es) | yes |
| `EMAIL_REPLY_TO` | a real mailbox for applicant replies | optional |
| `NEXT_PUBLIC_SITE_URL` | defaults to `https://eurosoccerpassport.com`; set only if the site lives elsewhere | optional |

### 3.1 Locally

```bash
cd web
cp .env.example .env.local     # if you don't have one yet
```

Fill in `.env.local`. It's git-ignored, so keys never end up in the repo. With everything blank the forms still work — submissions just print to the terminal instead.

### 3.2 On Vercel

1. Vercel dashboard → the ESP project → **Settings → Environment Variables**.
2. Add each variable. Tick **Production** and **Preview** so preview deployments also work. (If you'd rather previews not email real people, give Preview a different `EMAIL_TEAM_INBOX` and leave `RESEND_API_KEY` off for Preview.)
3. **Save**. Vercel does not apply new variables to the deployment that's already live — go to **Deployments → ⋯ on the latest → Redeploy**.

Tip: after saving on Vercel you can pull the same values down with `npx vercel env pull .env.local` instead of typing them twice.

---

## Part 4 — Test the whole thing

### Locally first

1. `npm run dev` from `web/`, open [localhost:3000/apply](http://localhost:3000/apply).
2. Submit the form with **your own email**.
3. Check, in this order:
   - the terminal — any channel that failed prints `[ESP form] <channel> failed (...): <reason>`. Silence means all three succeeded.
   - the Google Sheet — a new row in **Priority List**.
   - the team inbox — subject `[ESP] Priority List Application: <name> — <city>`. Hit Reply and confirm the To: is the applicant's address.
   - your inbox — subject *You're on the ESP priority list*, with the details you typed.
4. Repeat on [localhost:3000/teams](http://localhost:3000/teams) — once as *A team trip*, once as *A club partnership*. Both land in the **Team & Club Inquiries** tab.

The success message on screen changes depending on what happened: it says *We've sent a confirmation to you@…* only when the confirmation email actually went out.

### Then production

After the redeploy in 3.2, do the same on the live site. If anything misbehaves, **Vercel → the project → Logs** (or Observability) and search for `ESP form` — every failure is logged there with the exact error from Google or Resend.

---

## How it works in the code

| File | Role |
|---|---|
| `web/src/lib/actions.ts` | Server actions for both forms. Validates with zod, then builds one normalized `Submission` — the list of `{ label, value }` fields here **is** the column order in the sheet and the row order in both emails. |
| `web/src/lib/deliver.ts` | Fans the submission out to the three channels with `Promise.allSettled`, so a Resend hiccup never blocks the sheet write (or vice-versa). Logs every failure. Decides what the user sees. |
| `web/src/lib/sheets.ts` | POSTs the row to the Apps Script webhook; turns Google's replies into readable errors. |
| `web/src/lib/email.ts` | One `fetch` to Resend's API. No SDK to keep updated. |
| `web/src/lib/email-templates.ts` | The confirmation and team-notification emails — subject, HTML (table-based, inline styles, ESP navy/gold) and a plain-text version. Copy lives at the top of each function. |
| `web/src/lib/submissions.ts` | The shared `Submission` type and the sheet tab names. |
| `web/integrations/google-sheets/Code.gs` | The Apps Script. Checks the secret, picks/creates the tab, writes headers on first use, matches values to columns **by header name** (so you can reorder columns in the sheet safely), and stores everything as plain text so a value like `=SUM(...)` can never run as a formula. |

**What the user sees when something breaks:** if the sheet *or* the team email succeeds, the lead is somewhere you'll find it, so they get the normal success screen and the failure is only logged. If both fail, they see *We couldn't save your submission just now…* and are asked to retry.

**Rate limiting:** unchanged — 5 submissions per minute per IP, per form, in memory. Enough to stop a runaway bot, not a real security boundary.

---

## Troubleshooting

| Symptom | Likely cause → fix |
|---|---|
| Log says *webhook returned non-JSON … check "Who has access: Anyone"* | The deployment isn't set to **Anyone**, or you copied the `/dev` URL instead of `/exec`. Redo 1.4. |
| curl test returns a Google page saying *Sorry, unable to open the file at this time* | You ran it with `-X POST`. Drop that flag (see the note in 1.5). If it still fails, open the `/exec` URL in a browser — no JSON there means the deployment itself is wrong. |
| Log says *rejected the row: Bad secret* | `GOOGLE_SHEET_WEBHOOK_SECRET` on Vercel doesn't match the `WEBHOOK_SECRET` script property. Check for trailing spaces. |
| Log says *Script property WEBHOOK_SECRET is not set* | Step 1.3 was skipped or saved under a different name. |
| You edited `Code.gs` but behaviour didn't change | You need a **new version** of the deployment (see the note at the end of Part 1). |
| Resend `403` … *domain is not verified* | Wait for the DNS check to go green, or `EMAIL_FROM` uses a domain other than the one you verified. |
| Resend `422` … *You can only send testing emails to your own email address* | Same thing — domain not verified yet. |
| Resend `401` | Wrong or revoked `RESEND_API_KEY`, or the key was created with *Full access* restricted to a different domain. |
| Resend `429` | Free-plan daily cap (100 emails = 50 submissions) hit. Upgrade or wait until the next day; the sheet row and log still happen. |
| Confirmation lands in spam / junk | First read the message headers (Outlook: ⋯ → View → *View message source*; Gmail: ⋮ → *Show original*) and find `Authentication-Results`. If `dkim` or `dmarc` isn't `pass`, fix the DNS records in Resend → Domains (the domain's DMARC is `p=quarantine`, so any auth failure goes to junk). If all pass, it's sender reputation: don't send from `no-reply@` (use a real mailbox like `hello@`), mark it *Not junk* / add to safe senders in your own inbox, keep the from-address stable, and score a test at mail-tester.com. New domains build reputation over the first few weeks. |
| Sheet gets a row but no emails, or vice-versa | Channels are independent — check the log line for the channel that's missing. |
| A column shows up twice in the sheet | Someone renamed a header. The script matches by exact header text; rename it back (or accept the new column and delete the old one once it's empty). |
| *Too many submissions* on screen while testing | You hit the 5/minute rate limit. Wait a minute. |

---

## Changing things later

- **Add or rename a form field:** edit the zod schema and the `fields` array in `actions.ts`. The sheet grows a new column automatically; emails pick it up with no other change.
- **Change email copy:** `email-templates.ts` → the `copy` object in `renderConfirmation` (per form) or `renderTeamNotification`.
- **Rename the sheet tabs:** `SHEET_TABS` in `submissions.ts`. New tabs are created automatically; old ones aren't deleted.
- **Notify more people:** comma-separate `EMAIL_TEAM_INBOX`. Each recipient counts as one email against the Resend quota.
- **Move off Apps Script** (e.g. to the Sheets API with a service account, or to a real database) — only `sheets.ts` needs to change; nothing else knows how the sheet is written.
