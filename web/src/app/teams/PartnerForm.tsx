'use client'

import { useActionState, useEffect, useState } from 'react'
import { submitPartnerInquiry, type FormState } from '@/lib/actions'

const inquiryTypes = ['Team trip', 'Club partnership'] as const
type InquiryType = (typeof inquiryTypes)[number]

const initial: FormState = { success: false, message: '' }

// Links elsewhere on the site point at #team-trip or #club-partnership to preselect the inquiry type.
function inquiryFromHash(): InquiryType | null {
  if (window.location.hash === '#club-partnership') return 'Club partnership'
  if (window.location.hash === '#team-trip') return 'Team trip'
  return null
}

export default function PartnerForm() {
  const [inquiry, setInquiry] = useState<InquiryType>('Team trip')
  const [state, action, pending] = useActionState(submitPartnerInquiry, initial)

  useEffect(() => {
    const sync = () => {
      const fromHash = inquiryFromHash()
      if (fromHash) setInquiry(fromHash)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  if (state.success) {
    return (
      <div className="bg-white rounded-card p-8 flex flex-col items-center gap-4 max-w-[600px] w-full">
        <span className="font-display text-[28px] font-bold text-navy text-center">Thanks for reaching out!</span>
        <p className="font-body text-[16px] text-slate text-center">{state.message}</p>
      </div>
    )
  }

  const isTeam = inquiry === 'Team trip'

  return (
    <form action={action} className="bg-white rounded-card p-6 lg:p-8 flex flex-col gap-5 max-w-[600px] w-full">
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="inquiryType" value={inquiry} />

      <div className="flex flex-col gap-2">
        <span className="font-body text-[13px] font-semibold text-navy">I&apos;m interested in</span>
        <div className="grid grid-cols-2 gap-2">
          {inquiryTypes.map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => setInquiry(opt)}
              aria-pressed={inquiry === opt}
              className={`font-body text-[14px] font-semibold px-4 py-2.5 rounded-btn border cursor-pointer transition-colors ${
                inquiry === opt ? 'bg-gold text-navy border-gold' : 'bg-white text-slate border-mist'
              }`}
            >
              {opt === 'Team trip' ? 'A team trip' : 'A club partnership'}
            </button>
          ))}
        </div>
        <span className="font-body text-[12px] text-slate">
          {isTeam
            ? 'Your players and coaches travel together — we build the European side.'
            : 'An ongoing relationship: ESP experiences offered to players across your club.'}
        </span>
        {state.errors?.inquiryType && <span className="font-body text-[12px] text-red-600">{state.errors.inquiryType[0]}</span>}
      </div>

      <Field label="Club or team name" name="clubName" error={state.errors?.clubName} />
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
          placeholder={isTeam ? 'Age group, number of players and when you’d like to travel' : "Tell us about your club and what you're looking for"}
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
        {pending ? 'SUBMITTING...' : isTeam ? 'SEND TEAM TRIP INQUIRY' : 'BECOME AN ESP PARTNER CLUB'}
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
