// Reads an environment variable the way people actually paste them: trims whitespace and strips
// one pair of surrounding quotes. `EMAIL_FROM="Euro Soccer Passport <hello@…>"` is correct in a
// .env file (the parser removes the quotes) but the Vercel dashboard stores the quotes verbatim,
// which makes Resend reject the address. Returns undefined for unset or empty values.
export function env(name: string): string | undefined {
  const raw = process.env[name]
  if (raw == null) return undefined
  const value = raw.trim().replace(/^(["'])([\s\S]*)\1$/, '$2').trim()
  return value === '' ? undefined : value
}
