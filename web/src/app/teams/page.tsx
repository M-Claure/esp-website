import type { Metadata } from 'next'
import { Shield, Users, GraduationCap, Globe, Heart, Building2 } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Eyebrow from '@/components/Eyebrow'
import IconStat from '@/components/IconStat'
import TravelColumn from '@/components/TravelColumn'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import PartnerForm from './PartnerForm'

export const metadata: Metadata = {
  title: 'For Teams — Euro Soccer Passport',
}

const whyPartner = [
  { icon: Shield, label: 'Differentiation' },
  { icon: Users, label: 'Player retention' },
  { icon: GraduationCap, label: 'Coach development' },
  { icon: Globe, label: 'International exposure' },
  { icon: Heart, label: 'Family engagement' },
  { icon: Building2, label: 'No European operations needed' },
]

const handles = [
  'Professional club access', 'Program design', 'Training & matches',
  'Lodging & local transport', 'Cultural experiences', 'Optional family travel',
  'Bilingual support', 'On-the-ground operations',
]

export default function TeamsPage() {
  return (
    <main className="flex flex-col">
      <NavBar variant="dark" />

      {/* Hero */}
      <section className="w-full bg-navy">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-20 lg:py-32 flex flex-col items-center gap-6 text-center">
          <h1 className="font-display text-[36px] lg:text-[64px] font-bold text-white leading-[1.1] m-0 whitespace-pre-line">
            {"GIVE YOUR PLAYERS\nA PASSPORT TO EUROPE."}
          </h1>
          <p className="font-body text-[18px] text-gold leading-[1.5]">
            You bring the players. We build the European experience.
          </p>
        </div>
      </section>

      {/* What ESP Handles */}
      <Section bg="bg-white">
        <div className="flex flex-col items-center gap-10">
          <Eyebrow label="WHAT ESP HANDLES" />
          <div className="flex flex-wrap justify-center gap-4">
            {handles.map(h => (
              <span key={h} className="font-body text-[14px] text-navy bg-cream px-4 py-2 rounded-full border border-mist">
                {h}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Clubs Partner */}
      <Section>
        <div className="flex flex-col items-center gap-10">
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy text-center leading-[1.1] m-0">
            WHY CLUBS PARTNER
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {whyPartner.map(item => (
              <IconStat key={item.label} icon={item.icon} label={item.label} />
            ))}
          </div>
        </div>
      </Section>

      {/* Full Team Travel */}
      <Section bg="bg-white">
        <div className="flex flex-col items-center gap-10">
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy text-center leading-[1.1] m-0">
            FULL TEAM TRAVEL
          </h2>
          <div className="max-w-[600px]">
            <TravelColumn title="FULL TEAM" imageCaption="Team traveling together" checklist={['We handle all logistics', 'Players and coaches travel together', 'Families can join (optional)', 'Custom itineraries for your club']} />
          </div>
        </div>
      </Section>

      {/* CTA + Partner Form */}
      <section className="w-full bg-navy">
        <div className="max-w-[800px] mx-auto px-5 lg:px-10 py-16 lg:py-24 flex flex-col items-center gap-8">
          <h2 className="font-display text-[36px] lg:text-[52px] font-bold text-white text-center leading-[1.1] m-0">
            BECOME AN ESP PARTNER CLUB
          </h2>
          <p className="font-body text-[16px] text-white/70 text-center">
            Get in touch to bring European football experiences to your players.
          </p>
          <PartnerForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
