import Link from 'next/link'
import { CircleDot } from 'lucide-react'

const experienceLinks = [
  { label: 'Real Sociedad', href: '/experiences/real-sociedad' },
  { label: 'Girona FC', href: '/experiences/girona-fc' },
  { label: 'Real Oviedo', href: '/experiences/real-oviedo' },
  { label: 'Sporting de Gijón', href: '/experiences/sporting-de-gijon' },
  { label: 'Racing de Santander', href: '/experiences/racing-de-santander' },
  { label: 'Deportivo de La Coruña', href: '/experiences/deportivo-de-la-coruna' },
  { label: 'Levante UD', href: '/experiences/levante-ud' },
]
const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Families', href: '/families' },
  { label: 'For Teams', href: '/teams' },
  { label: 'FAQ', href: '/faq' },
]
const connectLinks = [
  { label: 'Contact', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-navy flex flex-col gap-8 lg:gap-10 px-5 lg:px-20 pt-12 lg:pt-16 pb-8 lg:pb-10">
      <div className="flex flex-col lg:flex-row lg:justify-between w-full gap-10 lg:gap-0">
        <div className="lg:w-[360px] flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <CircleDot className="text-white" size={24} />
            <div className="flex flex-col gap-px">
              <span className="font-display text-[20px] font-bold text-white">ESP</span>
              <span className="font-body text-[8px] font-semibold text-gold" style={{ letterSpacing: '2.4px' }}>
                EURO SOCCER PASSPORT
              </span>
            </div>
          </div>
          <p className="font-body text-[12px] font-semibold text-gold leading-[1.6] whitespace-pre-line m-0" style={{ letterSpacing: '1.44px' }}>
            {"TRAIN WITH THE CLUBS. LIVE THE CULTURE.\nEXPERIENCE EUROPEAN FOOTBALL."}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:flex gap-8 lg:gap-16">
          <LinkColumn heading="EXPERIENCES" links={experienceLinks} />
          <LinkColumn heading="COMPANY" links={companyLinks} />
          <LinkColumn heading="CONNECT" links={connectLinks} />
        </div>
      </div>
      <div className="h-px w-full bg-white/15" />
      <p className="font-body text-[11px] text-white/30 leading-[1.5] m-0">
        Club names and crests are trademarks of their respective clubs, used to describe training environments and destinations; ESP is not an official partner of any club unless stated.
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full gap-4">
        <span className="font-body text-[13px] text-white/50">Spain 2027 · Boys & Girls · Ages 12–18</span>
        <span className="font-body text-[12px] text-white/40 lg:text-right lg:w-[500px]">
          © 2027 Euro Soccer Passport. All rights reserved. This is a prototype — no formal partnerships are implied.
        </span>
      </div>
    </footer>
  )
}

function LinkColumn({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-body text-[13px] font-bold text-gold" style={{ letterSpacing: '1.56px' }}>
        {heading}
      </span>
      {links.map(link => (
        <Link key={link.label} href={link.href} className="font-body text-[14px] text-white/70 no-underline">
          {link.label}
        </Link>
      ))}
    </div>
  )
}
