import { env } from './env'
import type { Submission } from './submissions'

// Appends one row to the Google Sheet through the Apps Script web app in
// integrations/google-sheets/Code.gs.
//
// Resolves 'skipped' when the webhook isn't configured (local dev) and 'sent' on success. Throws
// with a specific message otherwise. A timed-out or dropped connection is retried once; the row
// carries the submission id, and the script ignores an id it has already stored, so a retry after
// a request that *did* land server-side never produces a duplicate row.
export async function appendToSheet(s: Submission, opts: { attempts?: number; timeoutMs?: number } = {}): Promise<'sent' | 'skipped'> {
  const url = env('GOOGLE_SHEET_WEBHOOK_URL')
  if (!url) return 'skipped'
  const attempts = opts.attempts ?? 2
  const timeoutMs = opts.timeoutMs ?? 20_000

  const row: Record<string, string> = { Type: s.label }
  for (const f of s.fields) row[f.label] = f.value
  row['Submission ID'] = s.id

  const body = JSON.stringify({
    secret: env('GOOGLE_SHEET_WEBHOOK_SECRET') ?? '',
    id: s.id,
    sheet: s.sheet,
    submittedAt: s.submittedAt,
    row,
  })

  let lastError: unknown
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      await postOnce(url, body, timeoutMs)
      if (attempt > 1) console.warn(`[ESP form] sheet ok on attempt ${attempt} (${s.kind}, ${s.contact.email})`)
      return 'sent'
    } catch (err) {
      lastError = err
      if (!isTransient(err) || attempt === attempts) break
      console.warn(`[ESP form] sheet attempt ${attempt} failed, retrying (${s.kind}, ${s.contact.email}): ${message(err)}`)
    }
  }
  throw lastError
}

async function postOnce(url: string, body: string, timeoutMs: number): Promise<void> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    // Apps Script answers a POST with a 302 to script.googleusercontent.com; the JSON is there.
    redirect: 'follow',
    signal: AbortSignal.timeout(timeoutMs),
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
}

// Only network-level failures are worth retrying; the webhook saying "bad secret" won't change.
function isTransient(err: unknown): boolean {
  if (!(err instanceof Error)) return false
  if (err.name === 'TimeoutError' || err.name === 'AbortError') return true
  return err.message === 'fetch failed' || /ECONNRESET|ETIMEDOUT|EAI_AGAIN|UND_ERR/.test(String((err as { cause?: unknown }).cause ?? ''))
}

function message(err: unknown): string {
  return err instanceof Error ? err.message : String(err)
}
