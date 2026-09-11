import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Eyebrow from '@/components/Eyebrow'
import ExperienceCard from '@/components/ExperienceCard'
import TravelOptions from '@/components/TravelOptions'
import QuoteBand from '@/components/QuoteBand'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Link from 'next/link'
import { clubs } from '@/data/clubs'
import { clubImages } from '@/data/images'

export const metadata: Metadata = {
  title: 'Experiences',
}

export default function ExperiencesPage() {
  return (
    <main className="flex flex-col">
      <NavBar variant="light" />

      {/* Hero */}
      <section className="w-full bg-navy">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-16 lg:py-24 flex flex-col items-center gap-4">
          <Eyebrow label="2027 SEASON" />
          <h1 className="font-display text-[40px] lg:text-[64px] font-bold text-white leading-[1.1] m-0 text-center">
            2027 EXPERIENCES
          </h1>
          <p className="font-body text-[16px] lg:text-[18px] text-white/70 text-center max-w-[600px]">
            Seven clubs. Seven cities. One unforgettable country. Choose the experience that fits your player.
          </p>
        </div>
      </section>

      {/* Experience Cards Grid */}
      <Section bg="bg-white">
        <div className="flex flex-col items-center gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.slice(0, 4).map(c => (
              <ExperienceCard
                key={c.slug}
                clubName={c.name.toUpperCase()}
                city={c.city.toUpperCase()}
                description={c.clubDescription[0].slice(0, 120) + '...'}
                slug={c.slug}
                image={clubImages[c.slug].hero}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.slice(4).map(c => (
              <ExperienceCard
                key={c.slug}
                clubName={c.name.toUpperCase()}
                city={c.city.toUpperCase()}
                description={c.clubDescription[0].slice(0, 120) + '...'}
                slug={c.slug}
                image={clubImages[c.slug].hero}
              />
            ))}
          </div>
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
