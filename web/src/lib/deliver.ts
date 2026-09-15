import { appendToSheet } from './sheets'
import { emailConfigured, replyToAddress, sendEmail, teamInbox } from './email'
import { renderConfirmation, renderTeamNotification } from './email-templates'
import { env } from './env'
import type { Submission } from './submissions'

// Fans a validated submission out to every channel:
//   1. a "someone just submitted" email to the team inbox      (inline — about a second)
//   2. a confirmation email to the person who submitted        (inline — about a second)
//   3. a row in the Google Sheet                               (after the response, with a retry)
// The person never waits on Google. The team email is what makes a submission "captured"; if it
// can't be sent, the sheet write runs inline instead so we still know before answering. Every
// failure is logged with its reason (visible in `npm run dev` locally, Vercel → Logs in production).

type Channel = 'sheet' | 'team-email' | 'confirmation-email'
type Outcome = { channel: Channel; status: 'sent' | 'skipped' | 'failed' | 'scheduled'; detail?: string }

export type DeliveryReport = {
  /** The lead exists somewhere we can find it — or nothing is configured yet and it was logged. */
  captured: boolean
  confirmationSent: boolean
  outcomes: Outcome[]
}

/** Runs a task after the response is sent. In a Server Action this is `after` from 'next/server'. */
export type Defer = (task: () => Promise<void>) => void

export async function deliverSubmission(s: Submission, opts: { defer?: Defer } = {}): Promise<DeliveryReport> {
  const [teamSettled, confirmationSettled] = await Promise.allSettled([sendTeamNotification(s), sendConfirmation(s)])
  const team = toOutcome('team-email', teamSettled)
  const confirmation = toOutcome('confirmation-email', confirmationSettled)

  let sheet: Outcome
  const sheetConfigured = Boolean(env('GOOGLE_SHEET_WEBHOOK_URL'))
  if (!sheetConfigured) {
    sheet = { channel: 'sheet', status: 'skipped' }
  } else if (team.status === 'sent' && opts.defer) {
    // The lead is safely in the inbox; write the row without holding up the response.
    opts.defer(() => writeRowLater(s))
    sheet = { channel: 'sheet', status: 'scheduled' }
  } else {
    sheet = toOutcome('sheet', await settle(appendToSheet(s)))
  }

  const outcomes = [sheet, team, confirmation]
  for (const o of outcomes) {
    if (o.status === 'failed') console.error(`[ESP form] ${o.channel} failed (${s.kind}, ${s.contact.email}): ${o.detail}`)
  }

  let captured: boolean
  if (sheet.status === 'skipped' && team.status === 'skipped') {
    // Nothing that stores the lead is configured (local dev, or env vars missing in prod).
    // Log the whole submission so it isn't lost, and don't fail the user for our misconfiguration.
    console.warn(`[ESP form] No sheet or team inbox configured — logging ${s.label} instead:\n` + JSON.stringify(s, null, 2))
    captured = true
  } else {
    captured = team.status === 'sent' || sheet.status === 'sent'
  }

  return { captured, confirmationSent: confirmation.status === 'sent', outcomes }
}

async function writeRowLater(s: Submission): Promise<void> {
  try {
    await appendToSheet(s)
  } catch (err) {
    console.error(`[ESP form] sheet failed (${s.kind}, ${s.contact.email}): ${err instanceof Error ? err.message : String(err)}`)
  }
}

async function sendTeamNotification(s: Submission): Promise<'sent' | 'skipped'> {
  const to = teamInbox()
  if (!emailConfigured() || to.length === 0) return 'skipped'
  const email = renderTeamNotification(s)
  await sendEmail({ to, replyTo: s.contact.email, tags: [{ name: 'form', value: s.kind }, { name: 'audience', value: 'team' }], ...email })
  return 'sent'
}

async function sendConfirmation(s: Submission): Promise<'sent' | 'skipped'> {
  if (!emailConfigured()) return 'skipped'
  const email = renderConfirmation(s)
  await sendEmail({ to: s.contact.email, replyTo: replyToAddress(), tags: [{ name: 'form', value: s.kind }, { name: 'audience', value: 'applicant' }], ...email })
  return 'sent'
}

function settle<T>(p: Promise<T>): Promise<PromiseSettledResult<T>> {
  return p.then(value => ({ status: 'fulfilled', value }) as const, reason => ({ status: 'rejected', reason }) as const)
}

function toOutcome(channel: Channel, r: PromiseSettledResult<'sent' | 'skipped'>): Outcome {
  if (r.status === 'fulfilled') return { channel, status: r.value }
  const err = r.reason
  return { channel, status: 'failed', detail: err instanceof Error ? err.message : String(err) }
}
