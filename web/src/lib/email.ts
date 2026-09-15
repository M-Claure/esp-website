// Thin wrapper over Resend's REST API (https://resend.com/docs/api-reference/emails/send-email).
// Kept dependency-free on purpose: one fetch, no SDK to keep in sync.

export type SendEmailInput = {
  to: string | string[]
  subject: string
  html: string
  text: string
  replyTo?: string
  /** Resend tags — values may only contain ASCII letters, numbers, underscores and dashes. */
  tags?: { name: string; value: string }[]
}

export function emailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM)
}

/** Internal inbox(es) that get the "someone just submitted" email. Comma-separated in env. */
export function teamInbox(): string[] {
  return (process.env.EMAIL_TEAM_INBOX ?? '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)
}

/** Where a reply to the applicant's confirmation email goes. Falls back to the team inbox. */
export function replyToAddress(): string | undefined {
  return process.env.EMAIL_REPLY_TO?.trim() || teamInbox()[0]
}

export async function sendEmail(input: SendEmailInput): Promise<{ id: string }> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.EMAIL_FROM
  if (!apiKey || !from) throw new Error('Email is not configured — set RESEND_API_KEY and EMAIL_FROM')

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: input.to,
      subject: input.subject,
      html: input.html,
      text: input.text,
      reply_to: input.replyTo,
      tags: input.tags,
    }),
    signal: AbortSignal.timeout(15_000),
  })

  const body = (await res.json().catch(() => ({}))) as { id?: string; message?: string; name?: string }
  if (!res.ok) throw new Error(`Resend responded ${res.status}${body.name ? ` (${body.name})` : ''}: ${body.message ?? 'no details'}`)
  if (!body.id) throw new Error('Resend returned no email id')
  return { id: body.id }
}
