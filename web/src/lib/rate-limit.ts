const hits = new Map<string, { count: number; resetAt: number }>()

const WINDOW_MS = 60_000
const MAX_HITS = 5

export function rateLimit(key: string): { ok: boolean } {
  const now = Date.now()
  const entry = hits.get(key)
  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return { ok: true }
  }
  entry.count++
  if (entry.count > MAX_HITS) return { ok: false }
  return { ok: true }
}
