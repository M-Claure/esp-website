import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import ApplyForm from './ApplyForm'

export const metadata: Metadata = {
  title: 'Apply',
}

export default function ApplyPage() {
  return (
    <main className="flex flex-col">
      <NavBar variant="light" />

      <Section bg="bg-cream">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 py-4 lg:py-8">
          {/* Left: Info */}
          <div className="flex flex-col gap-6 flex-1">
            <h1 className="font-display text-[36px] lg:text-[52px] font-bold text-navy leading-[1.1] m-0 whitespace-pre-line">
              {"YOUR FIRST STAMP\nSTARTS HERE."}
            </h1>
            <p className="font-body text-[16px] text-slate leading-[1.6]">
              Join the 2027 priority list. Complete the form and we&apos;ll be in touch with next steps, available dates and pricing.
            </p>
            <p className="font-script text-[24px] text-gold">More than a trip. A different future.</p>
          </div>

          {/* Right: Form */}
          <div className="flex-1">
            <ApplyForm />
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
