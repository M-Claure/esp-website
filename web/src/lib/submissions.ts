// One normalized shape for a form submission. Every delivery channel — the Google Sheet, the
// team notification and the applicant confirmation — reads from this, so field labels and their
// order are defined exactly once (in actions.ts, where the forms are validated).

export type SubmissionKind = 'apply' | 'team-trip' | 'club-partnership'

export type SubmissionField = { label: string; value: string }

export type Submission = {
  kind: SubmissionKind
  /** Human label used in email subjects and the sheet's "Type" column, e.g. "Priority List Application". */
  label: string
  /** Tab in the Google Sheet this lands on. */
  sheet: string
  /** ISO 8601. */
  submittedAt: string
  /** Who submitted it — gets the confirmation email and becomes the team email's reply-to. */
  contact: { name: string; email: string }
  /** Ordered fields, exactly as they appear in the sheet and in both emails. */
  fields: SubmissionField[]
}

export const SHEET_TABS = {
  apply: 'Priority List',
  partner: 'Team & Club Inquiries',
} as const

export function firstName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] || 'there'
}
