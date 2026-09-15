import type { Metadata } from 'next'
import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'
import { Award, Building, Swords, Ticket, ShieldCheck, Languages } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Eyebrow from '@/components/Eyebrow'
import ClubCrest from '@/components/ClubCrest'
import IconStat from '@/components/IconStat'
import Footer from '@/components/Footer'
import ConversionCTAs from '@/components/ConversionCTAs'
import Section from '@/components/Section'
import { clubs, type Club } from '@/data/clubs'

// Italic is only used for the club taglines, so load it here rather than in the root layout.
const playfairItalic = Playfair_Display({ subsets: ['latin'], style: 'italic', weight: '400' })

export const metadata: Metadata = {
  title: 'Clubs',
}

const regionCount = new Set(clubs.map(c => c.region)).size

const standard = [
  { icon: Award, label: 'Train with club\ncoaches' },
  { icon: Building, label: 'Professional club\nfacilities' },
  { icon: Swords, label: 'Compete against\nlocal teams' },
  { icon: Ticket, label: 'Experience\nmatchday culture' },
  { icon: ShieldCheck, label: 'Supervised by\nESP staff' },
  { icon: Languages, label: 'Bilingual staff —\nno Spanish needed' },
]

export default function ClubsPage() {
  return (
    <main className="flex flex-col">
      <NavBar variant="dark" />

      {/* Hero */}
      <section className="w-full bg-navy">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 pt-16 pb-14 lg:pt-20 lg:pb-[72px] flex flex-col items-center gap-5">
          <Eyebrow label="SPAIN 2027" />
          <h1 className="font-display text-[40px] lg:text-[56px] font-bold text-white leading-[1.1] m-0 text-center">
            THE CLUBS
          </h1>
          <p className="font-body text-[16px] lg:text-[18px] text-mist leading-[1.5] text-center max-w-[720px] m-0">
            Every ESP experience starts with the club. Meet the seven professional Spanish clubs — their training grounds, their methodology and the football identity your player trains inside.
          </p>
          <nav aria-label="Jump to a club" className="flex flex-wrap justify-center gap-x-4 gap-y-6 lg:gap-6 pt-7 pb-3">
            {clubs.map(c => (
              <a key={c.slug} href={`#${c.slug}`} className="w-[96px] flex flex-col items-center gap-2.5 no-underline">
                <ClubCrest slug={c.slug} initials={c.initials} size={72} />
                <span className="font-body text-[13px] font-semibold text-mist text-center">{c.shortName}</span>
              </a>
            ))}
          </nav>
          <p className="font-body text-[13px] lg:text-[14px] font-semibold text-gold text-center m-0" style={{ letterSpacing: '2.4px' }}>
            {clubs.length} CLUBS <span aria-hidden className="mx-2">·</span> {regionCount} REGIONS <span aria-hidden className="mx-2">·</span> ONE COUNTRY
          </p>
        </div>
      </section>

      {/* Club register */}
      <Section>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 lg:gap-16 pb-10 lg:pb-14">
          <div className="flex flex-col gap-4">
            <Eyebrow label="WHERE YOUR PLAYER TRAINS" />
            <h2 className="font-display text-[32px] lg:text-[48px] font-bold text-navy leading-[1.08] m-0 whitespace-pre-line">
              {"SEVEN CLUBS.\nSEVEN IDENTITIES."}
            </h2>
          </div>
          <p className="font-body text-[16px] lg:text-[18px] text-slate leading-[1.55] lg:max-w-[440px] m-0">
            Each club is its own week-long ESP experience — the club&apos;s coaches, facilities and methodology, paired with the city and culture around it.
          </p>
        </div>
        <div className="border-b border-mist">
          {clubs.map((club, i) => (
            <ClubRow key={club.slug} club={club} index={i + 1} />
          ))}
        </div>
      </Section>

      {/* Same standard at every club */}
      <Section bg="bg-white">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4">
            <Eyebrow label="AT EVERY CLUB" />
            <h2 className="font-display text-[28px] lg:text-[40px] font-bold text-navy text-center leading-[1.1] m-0">
              THE SAME ESP STANDARD.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-y-8 w-full justify-items-center">
            {standard.map(s => (
              <IconStat key={s.label} icon={s.icon} label={s.label} />
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="w-full bg-navy">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-16 lg:py-20 flex flex-col items-center gap-6">
          <h2 className="font-display text-[36px] lg:text-[48px] font-bold text-white text-center leading-[1.15] m-0 whitespace-pre-line">
            {"NOT SURE WHICH\nCLUB FITS?"}
          </h2>
          <p className="font-body text-[16px] lg:text-[18px] text-mist text-center leading-[1.5] max-w-[620px] m-0">
            Tell us about your player — age, level and travel plans — and we&apos;ll help you choose the right club experience.
          </p>
          <ConversionCTAs />
          <p className="font-script text-[24px] lg:text-[28px] text-gold text-center m-0">
            Different clubs. One unforgettable country.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ClubRow({ club, index }: { club: Club; index: number }) {
  const facts = [
    { label: 'TRAINING BASE', value: club.trainingBase },
    { label: 'FOOTBALL IDENTITY', value: club.identity },
    { label: 'COACHES', value: club.coaches },
  ]

  return (
    <article id={club.slug} className="flex flex-col lg:flex-row gap-6 lg:gap-12 py-10 lg:py-12 border-t border-mist scroll-mt-6">
      <div className="flex lg:flex-col items-center gap-3 shrink-0">
        <ClubCrest slug={club.slug} initials={club.initials} size={72} />
        <span className="font-display text-[20px] font-bold text-gold">{String(index).padStart(2, '0')}</span>
      </div>

      <div className="flex flex-col gap-3 flex-1 min-w-0">
        <span className="font-body text-[13px] font-semibold text-gold" style={{ letterSpacing: '1.56px' }}>
          {club.city.toUpperCase()} <span aria-hidden className="mx-1.5">·</span> {club.region.toUpperCase()}
        </span>
        <h3 className="font-display text-[28px] lg:text-[36px] font-bold text-navy leading-[1.1] m-0">
          {club.name.toUpperCase()}
        </h3>
        <p className={`${playfairItalic.className} text-[18px] lg:text-[20px] text-navy leading-[1.35] m-0`}>
          {club.tagline}
        </p>
        <p className="font-body text-[16px] text-slate leading-[1.6] m-0">{club.clubDescription[0]}</p>
        <Link
          href={`/experiences/${club.slug}`}
          aria-label={`View the 2027 ${club.name} experience`}
          className="self-start mt-2 inline-flex items-center gap-2 pb-1 border-b-2 border-gold font-body text-[14px] font-bold text-navy no-underline"
          style={{ letterSpacing: '0.84px' }}
        >
          VIEW 2027 EXPERIENCE
          <span aria-hidden>→</span>
        </Link>
      </div>

      <dl className="w-full lg:w-[360px] shrink-0 self-start bg-white rounded-2xl border border-mist px-6 py-2 m-0">
        {facts.map(f => (
          <div key={f.label} className="flex flex-col gap-1 py-4 border-b border-mist last:border-b-0">
            <dt className="font-body text-[12px] font-semibold text-gold" style={{ letterSpacing: '1.44px' }}>{f.label}</dt>
            <dd className="font-body text-[16px] font-semibold text-navy leading-[1.35] m-0">{f.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}
