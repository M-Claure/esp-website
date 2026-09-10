'use client'

import Link from 'next/link'
import Button from '@/components/Button'

const sections = [
  { label: 'Overview', id: 'overview' },
  { label: 'Training', id: 'training' },
  { label: 'Facilities', id: 'facilities' },
  { label: 'Competition', id: 'competition' },
  { label: 'The City', id: 'city' },
  { label: 'Dates & Pricing', id: 'dates' },
]

export default function ClubSubNav({ clubName }: { clubName: string }) {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white border-b border-mist">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 flex items-center justify-between h-[52px] overflow-x-auto">
        <div className="flex items-center gap-6 lg:gap-8 shrink-0">
          {sections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-body text-[14px] font-semibold text-slate hover:text-navy no-underline whitespace-nowrap"
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:block shrink-0 ml-8">
          <Link href="/apply"><Button label={`Apply for ${clubName}`} variant="primary" className="!py-2 !px-5 !text-[13px]" /></Link>
        </div>
      </div>
    </nav>
  )
}
