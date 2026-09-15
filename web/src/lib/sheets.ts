import type { Submission } from './submissions'

// Appends one row to the Google Sheet through the Apps Script web app in
// integrations/google-sheets/Code.gs. Resolves 'skipped' when the webhook isn't configured
// (local dev), 'sent' on success, and throws with a specific message on any failure so the
// caller can log it.
export async function appendToSheet(s: Submission): Promise<'sent' | 'skipped'> {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL
  if (!url) return 'skipped'

  const row: Record<string, string> = { Type: s.label }
  for (const f of s.fields) row[f.label] = f.value

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: process.env.GOOGLE_SHEET_WEBHOOK_SECRET ?? '',
      sheet: s.sheet,
      submittedAt: s.submittedAt,
      row,
    }),
    // Apps Script answers a POST with a 302 to script.googleusercontent.com; the JSON is there.
    redirect: 'follow',
    signal: AbortSignal.timeout(15_000),
  })

  const text = await res.text()
  if (!res.ok) throw new Error(`Google Sheet webhook responded ${res.status}: ${text.slice(0, 200)}`)

  let parsed: { ok?: boolean; error?: string }
  try {
    parsed = JSON.parse(text)
  } catch {
    // A sign-in page means the deployment isn't set to "Anyone", or this isn't the /exec URL.
    throw new Error(`Google Sheet webhook returned non-JSON (check "Who has access: Anyone" and that you're using the /exec URL). Got: ${text.slice(0, 120)}`)
  }
  if (!parsed.ok) throw new Error(`Google Sheet webhook rejected the row: ${parsed.error ?? 'unknown error'}`)
  return 'sent'
}
