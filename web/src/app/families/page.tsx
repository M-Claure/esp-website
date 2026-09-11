import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import Eyebrow from '@/components/Eyebrow'
import InfoCard from '@/components/InfoCard'
import TravelColumn from '@/components/TravelColumn'
import TravelOptions from '@/components/TravelOptions'
import FAQRow from '@/components/FAQRow'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import { siteImages } from '@/data/images'
import { playerOnly } from '@/data/travel'

export const metadata: Metadata = {
  title: 'Families',
}

const parentCards = [
  { title: 'Supervision', desc: 'Who is with the players and how the week is managed.' },
  { title: 'Airport arrival', desc: 'Designated local airport pickup and departure transfer for player-only travelers (ages 13–18).' },
  { title: 'Language', desc: 'Bilingual ESP staff and/or translators; Spanish is not required.' },
  { title: 'Accommodation', desc: 'Player lodging model by club / destination.' },
  { title: 'Meals & transport', desc: 'What is included during the program.' },
  { title: 'Competitive fit', desc: 'How players are grouped and local competition is matched.' },
  { title: "Girls' participation", desc: 'Girls are fully included; programming/opposition matched appropriately.' },
  { title: 'Companions', desc: 'Required for players 8–12 and optional for 13–18; families can also travel independently.' },
  { title: 'Safety', desc: 'Safeguarding, medical, insurance and emergency protocols once finalized.' },
]

const faqs = [
  { q: 'Can my child travel without us?', a: 'Yes, for players ages 13–18 — we meet them at the designated local airport and supervise the program through departure. Players ages 8–12 travel with a parent or guardian.' },
  { q: 'Does my child need a team to join?', a: 'No. Individual players join ESP groups matched by age and level, with players from across the U.S. Clubs and teams can also book the experience together.' },
  { q: 'Does my child need to speak Spanish?', a: 'No. Bilingual ESP staff and/or translators help players communicate with coaches, teammates and local staff throughout the experience.' },
  { q: 'Is this only for elite players?', a: 'No. Players should love the game and be ready for the experience. Groups and competition are matched appropriately.' },
  { q: 'Is this for girls too?', a: 'Absolutely. ESP experiences are for boys and girls ages 8–18, with appropriate programming and competition.' },
  { q: 'Can we come too?', a: "Yes. For players 13–18 it's optional — companion packages let families experience the destination around the player's soccer schedule. Players 8–12 travel with a parent or guardian." },
]

export default function FamiliesPage() {
  return (
    <main className="flex flex-col">
      <NavBar variant="light" />

      {/* Hero */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] bg-stone overflow-hidden">
        <Image src={siteImages.familiesHero} alt="A family walking along a seaside promenade in Spain" fill placeholder="blur" loading="eager" fetchPriority="high" sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 flex flex-col justify-center items-center min-h-[400px] lg:min-h-[500px] px-5 lg:px-24 py-16 text-center">
          <h1 className="font-display text-[36px] lg:text-[64px] font-bold text-white leading-[1.1] m-0 whitespace-pre-line">
            {"THEIR SOCCER EXPERIENCE.\nYOUR EUROPEAN ADVENTURE."}
          </h1>
          <p className="font-body text-[16px] lg:text-[18px] text-white/80 mt-6 max-w-[700px] leading-[1.5]">
            While your child trains, you can explore incredible cities, enjoy local culture, and create unforgettable memories together. Companion packages include accommodation options, cultural activities and day trips.
          </p>
        </div>
      </section>

      {/* What Parents Need to Know */}
      <Section bg="bg-white">
        <div className="flex flex-col items-center gap-10">
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy text-center leading-[1.1] m-0">
            WHAT PARENTS NEED TO KNOW
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parentCards.map(c => (
              <InfoCard key={c.title} title={c.title} description={c.desc} />
            ))}
          </div>
        </div>
      </Section>

      {/* Player-Only Travel */}
      <Section>
        <div className="flex flex-col items-center gap-10">
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy text-center leading-[1.1] m-0">
            PLAYER-ONLY TRAVEL
          </h2>
          <p className="font-body text-[16px] text-slate text-center leading-[1.5] -mt-4 m-0">
            For players ages 13–18. Players 8–12 travel with a parent or guardian.
          </p>
          <div className="w-full max-w-[380px]">
            <TravelColumn {...playerOnly} />
          </div>
        </div>
      </Section>

      {/* Optional Companion */}
      <Section bg="bg-white">
        <div className="flex flex-col items-center gap-8 max-w-[800px] mx-auto">
          <Eyebrow label="COMPANION PACKAGE" />
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy text-center leading-[1.1] m-0">
            YOUR EUROPEAN ADVENTURE
          </h2>
          <ul className="font-body text-[16px] text-slate leading-[1.8] pl-5 w-full">
            <li>Hotel accommodation</li>
            <li>Selected local transportation</li>
            <li>Cultural / leisure programming</li>
            <li>Selected meals</li>
            <li>Opportunities to watch training / matches when available</li>
            <li>Free time to explore independently</li>
          </ul>
          <p className="font-body text-[14px] text-slate italic text-center">Companion travel is optional for ages 13–18 and required for ages 8–12.</p>
        </div>
      </Section>

      {/* Travel Your Way */}
      <Section>
        <div className="flex flex-col items-center gap-10">
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy text-center leading-[1.1] m-0 whitespace-pre-line">
            {"COME WITH YOUR TEAM.\nYOUR FAMILY. OR JUST YOUR BAG."}
          </h2>
          <TravelOptions />
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="bg-white">
        <div className="flex flex-col items-center gap-8">
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy text-center leading-[1.1] m-0">
            PARENTS, WE&apos;VE GOT THIS.
          </h2>
          <div className="w-full flex flex-col items-center">
            {faqs.map(f => <FAQRow key={f.q} question={f.q} answer={f.a} />)}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="w-full bg-navy">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-16 lg:py-24 flex flex-col items-center gap-8">
          <h2 className="font-display text-[36px] lg:text-[52px] font-bold text-white text-center leading-[1.1] m-0">
            YOUR FIRST STAMP STARTS HERE.
          </h2>
          <Link href="/apply"><Button label="GET MY PASSPORT" variant="primary" /></Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
