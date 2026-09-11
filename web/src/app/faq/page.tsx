import type { Metadata } from 'next'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import FAQRow from '@/components/FAQRow'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'FAQ',
}

const faqs = [
  { q: 'Can my child travel without us?', a: 'Yes, for players ages 13–18 — we meet them at the designated local airport and supervise the program through departure. Players ages 8–12 travel with a parent or guardian.' },
  { q: 'Does my child need a team to join?', a: 'No. Individual players join ESP groups matched by age and level, with players from across the U.S. Clubs and teams can also book the experience together.' },
  { q: 'Does my child need to speak Spanish?', a: 'No. Bilingual ESP staff and/or translators help players communicate with coaches, teammates and local staff throughout the experience.' },
  { q: 'Is this only for elite players?', a: 'No. Players should love the game and be ready for the experience. Groups and competition are matched appropriately.' },
  { q: 'Is this for girls too?', a: 'Absolutely. ESP experiences are for boys and girls ages 8–18, with appropriate programming and competition.' },
  { q: 'Can we come too?', a: "Yes. For players 13–18 it's optional — companion packages let families experience the destination around the player's soccer schedule. Players 8–12 travel with a parent or guardian." },
  { q: 'What about safety and supervision?', a: null, finalize: true },
  { q: "What's included?", a: null, finalize: true },
  { q: "What if there's an emergency?", a: null, finalize: true },
]

export default function FAQPage() {
  return (
    <main className="flex flex-col">
      <NavBar variant="light" />

      {/* Header */}
      <Section bg="bg-cream">
        <div className="flex flex-col items-center gap-4 py-8 lg:py-16">
          <h1 className="font-display text-[36px] lg:text-[64px] font-bold text-navy leading-[1.1] m-0 text-center">
            PARENTS, WE&apos;VE GOT THIS.
          </h1>
          <p className="font-body text-[16px] text-slate text-center max-w-[600px]">
            Answer the major objections before the parent has to search for them.
          </p>
        </div>
      </Section>

      {/* FAQ List */}
      <Section bg="bg-white">
        <div className="flex flex-col items-center">
          {faqs.map(f => (
            <div key={f.q} className="w-full max-w-[800px]">
              {f.finalize ? (
                <div className="w-full">
                  <div className="flex items-center justify-between w-full py-5">
                    <span className="font-body text-[16px] lg:text-[18px] font-semibold text-navy pr-4">{f.q}</span>
                    <span className="shrink-0 bg-gold text-navy font-body text-[12px] font-bold px-3 py-1 rounded-full" style={{ letterSpacing: '0.5px' }}>
                      Answer being finalized
                    </span>
                  </div>
                  <div className="h-px w-full bg-mist" />
                </div>
              ) : (
                <FAQRow question={f.q} answer={f.a ?? undefined} />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="w-full bg-navy">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-16 lg:py-24 flex flex-col items-center gap-8">
          <h2 className="font-display text-[36px] lg:text-[52px] font-bold text-white text-center leading-[1.1] m-0">
            STILL HAVE QUESTIONS?
          </h2>
          <p className="font-body text-[16px] text-white/70 text-center">Get in touch — we&apos;re happy to help.</p>
          <Link href="/apply"><Button label="CONTACT US" variant="primary" /></Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
