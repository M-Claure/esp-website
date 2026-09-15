import { appendToSheet } from './sheets'
import { emailConfigured, replyToAddress, sendEmail, teamInbox } from './email'
import { renderConfirmation, renderTeamNotification } from './email-templates'
import type { Submission } from './submissions'

// Fans a validated submission out to every channel at once:
//   1. a row in the Google Sheet
//   2. a "someone just submitted" email to the team inbox
//   3. a confirmation email to the person who submitted
// Channels are independent — one failing never blocks the others. Every failure is logged with
// its reason (visible in `npm run dev` output locally and in Vercel → Logs in production).

type Channel = 'sheet' | 'team-email' | 'confirmation-email'
type Outcome = { channel: Channel; status: 'sent' | 'skipped' | 'failed'; detail?: string }

export type DeliveryReport = {
  /** The lead exists somewhere we can find it (sheet or team inbox) — or nothing is configured yet and it was logged. */
  captured: boolean
  confirmationSent: boolean
  outcomes: Outcome[]
}

export async function deliverSubmission(s: Submission): Promise<DeliveryReport> {
  const settled = await Promise.allSettled([appendToSheet(s), sendTeamNotification(s), sendConfirmation(s)])
  const outcomes: Outcome[] = [
    toOutcome('sheet', settled[0]),
    toOutcome('team-email', settled[1]),
    toOutcome('confirmation-email', settled[2]),
  ]

  for (const o of outcomes) {
    if (o.status === 'failed') console.error(`[ESP form] ${o.channel} failed (${s.kind}, ${s.contact.email}): ${o.detail}`)
  }

  const leadChannels = outcomes.filter(o => o.channel !== 'confirmation-email')
  let captured: boolean
  if (leadChannels.every(o => o.status === 'skipped')) {
    // Nothing that stores the lead is configured (local dev, or env vars missing in prod).
    // Log the whole submission so it isn't lost, and don't fail the user for our misconfiguration.
    console.warn(`[ESP form] No sheet or team inbox configured — logging ${s.label} instead:\n` + JSON.stringify(s, null, 2))
    captured = true
  } else {
    captured = leadChannels.some(o => o.status === 'sent')
  }

  return { captured, confirmationSent: outcomes[2].status === 'sent', outcomes }
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

function toOutcome(channel: Channel, r: PromiseSettledResult<'sent' | 'skipped'>): Outcome {
  if (r.status === 'fulfilled') return { channel, status: r.value }
  const err = r.reason
  return { channel, status: 'failed', detail: err instanceof Error ? err.message : String(err) }
}
