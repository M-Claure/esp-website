'use client'

import { useActionState } from 'react'
import { submitPartnerInquiry, type FormState } from '@/lib/actions'

const initial: FormState = { success: false, message: '' }

export default function PartnerForm() {
  const [state, action, pending] = useActionState(submitPartnerInquiry, initial)

  if (state.success) {
    return (
      <div className="bg-white rounded-card p-8 flex flex-col items-center gap-4 max-w-[600px] w-full">
        <span className="font-display text-[28px] font-bold text-navy text-center">Thanks for reaching out!</span>
        <p className="font-body text-[16px] text-slate text-center">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={action} className="bg-white rounded-card p-6 lg:p-8 flex flex-col gap-5 max-w-[600px] w-full">
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <Field label="Club name" name="clubName" error={state.errors?.clubName} />
      <Field label="Contact name" name="contactName" error={state.errors?.contactName} />
      <Field label="Email" name="email" type="email" error={state.errors?.email} />
      <Field label="Your role" name="role" error={state.errors?.role} />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="font-body text-[13px] font-semibold text-navy">Message (optional)</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="font-body text-[15px] px-4 py-3 rounded-btn border border-mist bg-cream/50 text-navy outline-none focus:border-gold transition-colors resize-y"
          placeholder="Tell us about your club and what you're looking for"
        />
      </div>

      {state.message && !state.success && (
        <p className="font-body text-[14px] text-red-600">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="bg-gold text-navy font-body text-[14px] font-bold px-7 py-3.5 rounded-btn border-none cursor-pointer transition-colors hover:bg-gold/90 disabled:opacity-60"
        style={{ letterSpacing: '1.2px' }}
      >
        {pending ? 'SUBMITTING...' : 'BECOME AN ESP PARTNER CLUB'}
      </button>
    </form>
  )
}

function Field({ label, name, type = 'text', error }: { label: string; name: string; type?: string; error?: string[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-body text-[13px] font-semibold text-navy">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="font-body text-[15px] px-4 py-3 rounded-btn border border-mist bg-cream/50 text-navy outline-none focus:border-gold transition-colors"
        placeholder={label}
      />
      {error && <span className="font-body text-[12px] text-red-600">{error[0]}</span>}
    </div>
  )
}
