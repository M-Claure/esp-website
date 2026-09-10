import type { Metadata } from 'next'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import Eyebrow from '@/components/Eyebrow'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'About — Euro Soccer Passport',
}

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <NavBar variant="light" />

      {/* Hero */}
      <Section bg="bg-cream">
        <div className="flex flex-col items-center gap-6 text-center py-8 lg:py-16">
          <Eyebrow label="ABOUT ESP" />
          <h1 className="font-display text-[36px] lg:text-[64px] font-bold text-navy leading-[1.1] m-0 whitespace-pre-line">
            {"MORE THAN A TRIP.\nA DIFFERENT FUTURE."}
          </h1>
        </div>
      </Section>

      {/* Mission */}
      <Section bg="bg-white">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-[1000px] mx-auto">
          <div className="flex flex-col gap-4 flex-1">
            <Eyebrow label="MISSION" />
            <p className="font-body text-[18px] lg:text-[20px] text-navy font-bold leading-[1.5]">
              Give young American players access to the training, culture and environments of professional European football.
            </p>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <Eyebrow label="VISION" />
            <p className="font-body text-[18px] lg:text-[20px] text-navy font-bold leading-[1.5]">
              Become the trusted gateway between American youth soccer and Europe&apos;s professional clubs.
            </p>
          </div>
        </div>
      </Section>

      {/* How We Work */}
      <Section>
        <div className="flex flex-col items-center gap-8 max-w-[800px] mx-auto text-center">
          <Eyebrow label="HOW WE WORK" />
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy leading-[1.1] m-0">
            THE ESP APPROACH
          </h2>
          <p className="font-body text-[16px] text-slate leading-[1.6]">
            We partner with professional clubs across Spain to create week-long soccer experiences that combine elite training, cultural immersion and personal growth. Every program is supervised by ESP staff, designed around the club&apos;s methodology, and built so families feel confident — whether they join the trip or not.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <section className="w-full bg-navy">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-16 lg:py-24 flex flex-col items-center gap-8">
          <h2 className="font-display text-[36px] lg:text-[52px] font-bold text-white text-center leading-[1.1] m-0 whitespace-pre-line">
            {"YOUR FIRST STAMP\nSTARTS HERE."}
          </h2>
          <p className="font-body text-[18px] text-white/70 text-center">Join the 2027 priority list.</p>
          <Link href="/apply"><Button label="GET MY PASSPORT" variant="primary" /></Link>
          <p className="font-script text-[28px] text-gold text-center">More than a trip. A different future.</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
