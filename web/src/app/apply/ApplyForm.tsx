'use client'

import { useActionState, useState } from 'react'
import { submitApply, type FormState } from '@/lib/actions'
import Button from '@/components/Button'

const travelOptions = ['Player-only', 'Family interested', 'Team'] as const
const ages = Array.from({ length: 11 }, (_, i) => String(i + 8))

const initial: FormState = { success: false, message: '' }

export default function ApplyForm() {
  const [interest, setInterest] = useState<string>('Player-only')
  const [age, setAge] = useState('')
  const [state, action, pending] = useActionState(submitApply, initial)
  // Players 8–12 travel with a parent or guardian, so player-only isn't offered to them.
  const young = age !== '' && Number(age) <= 12

  function changeAge(value: string) {
    setAge(value)
    if (Number(value) <= 12 && interest === 'Player-only') setInterest('Family interested')
  }

  if (state.success) {
    return (
      <div className="bg-white rounded-card p-6 lg:p-8 flex flex-col items-center gap-4 border border-mist shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
        <span className="font-display text-[28px] font-bold text-navy text-center">You&apos;re on the list!</span>
        <p className="font-body text-[16px] text-slate text-center">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={action} className="bg-white rounded-card p-6 lg:p-8 flex flex-col gap-5 border border-mist shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="interest" value={interest} />

      <Field label="Parent name" name="parentName" error={state.errors?.parentName} />
      <Field label="Email" name="email" type="email" error={state.errors?.email} />
      <Field label="Mobile" name="mobile" type="tel" error={state.errors?.mobile} />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="playerAge" className="font-body text-[13px] font-semibold text-navy">Player age</label>
          <select
            id="playerAge"
            name="playerAge"
            required
            value={age}
            onChange={e => changeAge(e.target.value)}
            className="font-body text-[15px] px-4 py-3 rounded-btn border border-mist bg-cream/50 text-navy outline-none focus:border-gold transition-colors"
          >
            <option value="" disabled>Select age</option>
            {ages.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
          {state.errors?.playerAge && <span className="font-body text-[12px] text-red-600">{state.errors.playerAge[0]}</span>}
        </div>
        <Field label="Gender" name="gender" error={state.errors?.gender} />
      </div>
      <Field label="Home city" name="homeCity" error={state.errors?.homeCity} />
      <Field label="Current club" name="currentClub" error={state.errors?.currentClub} />
      <Field label="Travel period" name="travelPeriod" error={state.errors?.travelPeriod} />

      <div className="flex flex-col gap-2">
        <label className="font-body text-[13px] font-semibold text-navy">Interested in</label>
        <div className="flex flex-col lg:flex-row gap-2">
          {travelOptions.map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => setInterest(opt)}
              disabled={opt === 'Player-only' && young}
              className={`font-body text-[14px] font-semibold px-4 py-2.5 rounded-btn border cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                interest === opt
                  ? 'bg-gold text-navy border-gold'
                  : 'bg-white text-slate border-mist'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {young && <span className="font-body text-[12px] text-slate">Players ages 8–12 travel with a parent or guardian.</span>}
        {state.errors?.interest && <span className="font-body text-[12px] text-red-600">{state.errors.interest[0]}</span>}
      </div>

      {state.message && !state.success && (
        <p className="font-body text-[14px] text-red-600">{state.message}</p>
      )}

      <div className="mt-2">
        <button
          type="submit"
          disabled={pending}
          className="bg-gold text-navy font-body text-[14px] font-bold px-7 py-3.5 rounded-btn border-none cursor-pointer transition-colors hover:bg-gold/90 disabled:opacity-60"
          style={{ letterSpacing: '1.2px' }}
        >
          {pending ? 'SUBMITTING...' : 'GET MY PASSPORT'}
        </button>
      </div>
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
