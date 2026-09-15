import { firstName, type Submission, type SubmissionField } from './submissions'

// Branded HTML + plain-text emails. Table layout and inline styles on purpose — that's what
// survives Gmail, Outlook and Apple Mail. Colors mirror globals.css.

const NAVY = '#08243A'
const GOLD = '#DCB846'
const SLATE = '#525E68'
const CREAM = '#F7F5EF'
const MIST = '#E2E7EA'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eurosoccerpassport.com'
const TAGLINE = 'More than a trip. A different future.'
const STRAP = 'Spain 2027 · Boys & Girls · Ages 8–18'

export type RenderedEmail = { subject: string; html: string; text: string }

// ---------- Applicant / partner confirmation ----------

export function renderConfirmation(s: Submission): RenderedEmail {
  const name = firstName(s.contact.name)
  const club = s.fields.find(f => f.label === 'Club or team name')?.value

  const copy = {
    apply: {
      subject: "You're on the ESP priority list",
      title: "You're on the list.",
      intro: `Hi ${name}, thanks for joining the Euro Soccer Passport priority list for Spain 2027. We've received your application, and a member of our team will be in touch with next steps, available dates and pricing.`,
      outro: "If anything changes — travel dates, who's coming, a different club you'd love to see — just reply to this email.",
    },
    'team-trip': {
      subject: 'We received your team trip inquiry',
      title: 'Thanks for reaching out.',
      intro: `Hi ${name}, we've received your team trip inquiry${club ? ` for ${club}` : ''}. We'll be in touch shortly to start planning your team's week in Spain.`,
      outro: 'Have dates, age groups or player numbers to add? Reply to this email and it goes straight to the team.',
    },
    'club-partnership': {
      subject: 'We received your partnership inquiry',
      title: 'Thanks for reaching out.',
      intro: `Hi ${name}, we've received your club partnership inquiry${club ? ` for ${club}` : ''}. We'll be in touch shortly to talk through what an ESP partnership could look like for your club.`,
      outro: 'Anything else we should know before we talk? Reply to this email and it goes straight to the team.',
    },
  }[s.kind]

  return {
    subject: copy.subject,
    html: layout({
      preheader: copy.intro,
      title: copy.title,
      intro: copy.intro,
      fieldsHeading: 'What you told us',
      fields: s.fields,
      outro: copy.outro,
      footer: `${TAGLINE}<br>${STRAP}`,
    }),
    text: [
      copy.title,
      '',
      copy.intro,
      '',
      'What you told us:',
      ...s.fields.map(f => `  ${f.label}: ${f.value}`),
      '',
      copy.outro,
      '',
      `— Euro Soccer Passport`,
      TAGLINE,
      STRAP,
      SITE_URL,
    ].join('\n'),
  }
}

// ---------- Internal "someone just submitted" notification ----------

export function renderTeamNotification(s: Submission): RenderedEmail {
  const where = s.fields.find(f => f.label === 'Home city' || f.label === 'Club or team name')?.value
  const subject = `[ESP] ${s.label}: ${s.contact.name}${where ? ` — ${where}` : ''}`
  const intro = `${s.contact.name} just submitted the ${formName(s.kind)} on the website. Reply to this email to respond to them directly — replies go to ${s.contact.email}.`
  const sheetUrl = process.env.GOOGLE_SHEET_URL
  const when = new Date(s.submittedAt).toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })

  return {
    subject,
    html: layout({
      preheader: intro,
      title: `New ${s.label}`,
      intro,
      fieldsHeading: 'Submission',
      fields: [...s.fields, { label: 'Submitted', value: `${when} ET` }],
      outro: sheetUrl
        ? `<a href="${escapeHtml(sheetUrl)}" style="color:${NAVY};font-weight:700;">Open the submissions sheet →</a>`
        : undefined,
      outroIsHtml: true,
      footer: 'Internal notification from the ESP website',
    }),
    text: [
      `New ${s.label}`,
      '',
      intro,
      '',
      ...s.fields.map(f => `  ${f.label}: ${f.value}`),
      `  Submitted: ${when} ET`,
      '',
      sheetUrl ? `Sheet: ${sheetUrl}` : '',
    ].join('\n').trim(),
  }
}

function formName(kind: Submission['kind']): string {
  return kind === 'apply' ? 'priority list form' : 'team & club form'
}

// ---------- Layout ----------

type LayoutInput = {
  preheader: string
  title: string
  intro: string
  fieldsHeading: string
  fields: SubmissionField[]
  outro?: string
  outroIsHtml?: boolean
  footer: string
}

function layout(i: LayoutInput): string {
  const rows = i.fields
    .map(
      f => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid ${MIST};font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${SLATE};vertical-align:top;width:42%;">${escapeHtml(f.label)}</td>
          <td style="padding:10px 0 10px 12px;border-bottom:1px solid ${MIST};font-family:Arial,Helvetica,sans-serif;font-size:15px;color:${NAVY};font-weight:600;vertical-align:top;">${escapeHtml(f.value) || '&mdash;'}</td>
        </tr>`,
    )
    .join('')

  const outro = i.outro
    ? `<p style="margin:24px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:${SLATE};">${i.outroIsHtml ? i.outro : escapeHtml(i.outro)}</p>`
    : ''

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>${escapeHtml(i.title)}</title>
</head>
<body style="margin:0;padding:0;background:${CREAM};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(i.preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CREAM};padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background:${NAVY};border-radius:20px 20px 0 0;padding:26px 32px;text-align:center;">
              <a href="${SITE_URL}" style="text-decoration:none;">
                <span style="font-family:Georgia,'Times New Roman',serif;font-size:14px;letter-spacing:4px;color:${GOLD};font-weight:700;">EURO SOCCER PASSPORT</span>
              </a>
            </td>
          </tr>
          <tr>
            <td style="background:${GOLD};height:4px;line-height:4px;font-size:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="background:#ffffff;padding:36px 32px 32px;border-radius:0 0 20px 20px;border:1px solid ${MIST};border-top:0;">
              <h1 style="margin:0 0 16px;font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.15;color:${NAVY};">${escapeHtml(i.title)}</h1>
              <p style="margin:0 0 24px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:${SLATE};">${escapeHtml(i.intro)}</p>
              <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:${GOLD};font-weight:700;">${escapeHtml(i.fieldsHeading)}</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:2px solid ${NAVY};">${rows}
              </table>
              ${outro}
            </td>
          </tr>
          <tr>
            <td style="padding:22px 24px;text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.7;color:${SLATE};">
              ${i.footer}<br>
              <a href="${SITE_URL}" style="color:${SLATE};">${SITE_URL.replace(/^https?:\/\//, '')}</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
