# Euro Soccer Passport — website

Next.js 16 (App Router) + Tailwind 4, deployed on Vercel. Marketing site for ESP's Spain 2027 experiences.

## Develop

```bash
npm install
cp .env.example .env.local   # optional — forms log to the terminal until you fill it in
npm run dev                  # http://localhost:3000
```

`npm run build` runs the production build; `npm run lint` runs ESLint.

## Form submissions

Two forms post to server actions in `src/lib/actions.ts`:

- `/apply` — Priority List application (players & families)
- `/teams` — Team Trip / Club Partnership inquiry

Every valid submission is delivered to three places at once (`src/lib/deliver.ts`):

1. a row in a Google Sheet, via the Apps Script in `integrations/google-sheets/Code.gs` (`src/lib/sheets.ts`)
2. a notification email to the team inbox (`src/lib/email.ts`, Resend)
3. a confirmation email to the person who submitted (`src/lib/email-templates.ts`)

Setup, env vars, testing and troubleshooting: **[docs/FORM_SUBMISSIONS.md](../docs/FORM_SUBMISSIONS.md)**.

## Layout

```
src/app/            routes (home, experiences, clubs, families, teams, about, faq, apply)
src/components/     shared UI
src/data/           clubs, crests, images, travel options, CTA paths
src/lib/            server actions, validation, delivery channels, rate limiting
src/assets/         club photos and crests
integrations/       code that runs outside this app (Google Apps Script)
```
