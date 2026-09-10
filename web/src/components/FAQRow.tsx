'use client'

import { useState } from 'react'

interface FAQRowProps {
  question: string
  answer?: string
}

export default function FAQRow({ question, answer }: FAQRowProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full max-w-[800px]">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex items-center justify-between w-full py-5 cursor-pointer bg-transparent border-0 text-left"
      >
        <span className="font-body text-[16px] lg:text-[18px] font-semibold text-navy pr-4">{question}</span>
        <span className="font-body text-[22px] font-light text-slate shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && answer && (
        <div className="pb-5">
          <p className="font-body text-[15px] text-slate leading-[1.5]">{answer}</p>
        </div>
      )}
      <div className="h-px w-full bg-mist" />
    </div>
  )
}
