'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CircleDot, Menu, X } from 'lucide-react'
import Button from './Button'

interface NavBarProps {
  variant?: 'light' | 'dark'
}

const links = [
  { label: 'Experiences', href: '/experiences' },
  { label: 'Clubs', href: '/experiences' },
  { label: 'Families', href: '/families' },
  { label: 'For Teams', href: '/teams' },
  { label: 'About', href: '/about' },
]

export default function NavBar({ variant = 'light' }: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const isDark = variant === 'dark'
  const bg = isDark ? 'bg-navy' : 'bg-white'
  const text = isDark ? 'text-white' : 'text-navy'

  return (
    <nav className={`relative flex items-center justify-between w-full h-[72px] px-5 lg:px-12 ${bg}`}>
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <CircleDot className={text} size={28} />
        <div className="flex flex-col gap-px">
          <span className={`font-display text-[22px] font-bold ${text}`}>ESP</span>
          <span
            className={`font-body text-[8px] font-semibold ${isDark ? 'text-gold' : 'text-navy'}`}
            style={{ letterSpacing: '2.4px' }}
          >
            EURO SOCCER PASSPORT
          </span>
        </div>
      </Link>
      <div className="hidden lg:flex items-center gap-8">
        {links.map(link => (
          <Link key={link.label} href={link.href} className={`font-body text-[15px] font-semibold ${text} no-underline`}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="hidden lg:block">
        <Link href="/apply"><Button label="Apply Now" variant="primary" /></Link>
      </div>
      <div className="flex lg:hidden items-center gap-3">
        <Link href="/apply"><Button label="Apply" variant="primary" className="!px-4 !py-2 !text-[13px]" /></Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} className={`${text} bg-transparent border-0 cursor-pointer p-1`}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className={`absolute top-[72px] left-0 right-0 ${bg} flex flex-col p-5 gap-4 z-50 lg:hidden border-t border-mist`}>
          {links.map(link => (
            <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className={`font-body text-[16px] font-semibold ${text} no-underline`}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
