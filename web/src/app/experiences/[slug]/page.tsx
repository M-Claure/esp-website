import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Trophy, Building2, Swords, Ticket, Compass } from 'lucide-react'
import { clubs, getClubBySlug } from '@/data/clubs'
import { siteImages, clubImages } from '@/data/images'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import Eyebrow from '@/components/Eyebrow'
import ClubCrest from '@/components/ClubCrest'
import IconStat from '@/components/IconStat'
import DayCard from '@/components/DayCard'
import TravelColumn from '@/components/TravelColumn'
import QuoteBand from '@/components/QuoteBand'
import FAQRow from '@/components/FAQRow'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import ClubSubNav from './ClubSubNav'

export function generateStaticParams() {
  return clubs.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const club = getClubBySlug(slug)
  if (!club) return { title: 'Club' }
  return {
    title: `${club.name} Experience — ${club.city}`,
  }
}

const days = [
  { title: 'SUN | ARRIVE', details: 'Airport pickup • check-in • orientation • team dinner' },
  { title: 'MON | TRAIN', details: 'Club session • city orientation' },
  { title: 'TUE | TRAIN + CULTURE', details: 'Technical/tactical session • cultural activity' },
  { title: 'WED | MATCH DAY', details: 'Training • local opposition' },
  { title: 'THU | LIVE THE CLUB', details: 'Club session • tactical/video • club experience' },
  { title: 'FRI | COMPETE', details: 'Match / tournament • closing experience' },
  { title: 'SAT | DISCOVER', details: 'Cultural / leisure day • optional family time' },
  { title: 'SUN | DEPART', details: 'Airport transfer • head home' },
]

const pillarIcons = [Trophy, Building2, Swords, Ticket, Compass]

export default async function ClubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const club = getClubBySlug(slug)
  if (!club) return <div>Club not found</div>
  const images = clubImages[club.slug]

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative w-full min-h-[500px] lg:min-h-[600px] bg-stone overflow-hidden">
        <Image src={images.hero} alt={`Youth players training near ${club.city}`} fill placeholder="blur" loading="eager" fetchPriority="high" sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 flex flex-col justify-center min-h-[500px] lg:min-h-[600px] px-5 lg:px-24 py-16 lg:py-24 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <ClubCrest slug={club.slug} initials={club.initials} size={56} />
          </div>
          <h1 className="font-display text-[36px] lg:text-[64px] font-bold text-white leading-[1.1] m-0">
            {club.name.toUpperCase()} EXPERIENCE
          </h1>
          <p className="font-body text-[18px] lg:text-[22px] text-gold mt-4 leading-[1.3]">
            {club.tagline}
          </p>
          <div className="flex items-center gap-2 mt-4">
            <MapPin size={16} className="text-white/60" />
            <span className="font-body text-[15px] text-white/70">{club.city} | {club.region}</span>
          </div>
        </div>
      </section>

      {/* Sticky Sub-Nav */}
      <ClubSubNav clubName={club.name} />

      {/* 5 Pillars */}
      <Section bg="bg-white" id="overview">
        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12">
          {['Train with club coaches', 'World-class facilities', 'Compete against local teams', 'Experience matchday culture', `Discover ${club.city}`].map((label, i) => (
            <IconStat key={label} icon={pillarIcons[i]} label={label} />
          ))}
        </div>
      </Section>

      {/* The Club */}
      <Section id="training">
        <div className="flex flex-col gap-8 max-w-[800px] mx-auto">
          <Eyebrow label="THE CLUB" />
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy leading-[1.1] m-0">
            WHY {club.name.toUpperCase()}
          </h2>
          {club.clubDescription.map((p, i) => (
            <p key={i} className="font-body text-[16px] text-slate leading-[1.6]">{p}</p>
          ))}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
            <div className="flex flex-col gap-2">
              <span className="font-body text-[13px] font-semibold text-gold" style={{ letterSpacing: '1.56px' }}>TRAINING BASE</span>
              <span className="font-body text-[15px] text-navy font-bold">{club.trainingBase}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-body text-[13px] font-semibold text-gold" style={{ letterSpacing: '1.56px' }}>IDENTITY</span>
              <span className="font-body text-[15px] text-navy font-bold">{club.identity}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-body text-[13px] font-semibold text-gold" style={{ letterSpacing: '1.56px' }}>COACHES</span>
              <span className="font-body text-[15px] text-navy font-bold">{club.coaches}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* 3-Image Row */}
      <Section bg="bg-white" id="facilities">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { label: 'TRAIN', caption: club.trainCaption, image: images.train, alt: 'A coach leading a training drill' },
            { label: 'FACILITIES', caption: club.facilitiesCaption, image: images.facilities, alt: 'Academy training pitches' },
            { label: 'THE CITY', caption: club.cityCaption, image: images.city, alt: club.city },
          ].map(img => (
            <div key={img.label} className="flex flex-col gap-3">
              <div className="relative w-full h-[220px] lg:h-[240px] bg-stone rounded-2xl overflow-hidden">
                <Image src={img.image} alt={img.alt} fill placeholder="blur" sizes="(min-width: 1024px) 380px, 100vw" className="object-cover" />
              </div>
              <h3 className="font-display text-[22px] font-bold text-navy m-0">{img.label}</h3>
              <p className="font-body text-[15px] text-slate leading-[1.5] m-0">{img.caption}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The Week */}
      <Section id="competition">
        <div className="flex flex-col items-center gap-10">
          <div className="text-center flex flex-col items-center gap-3">
            <Eyebrow label="THE WEEK" />
            <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy leading-[1.1] m-0">
              SOCCER FIRST, CULTURE WOVEN IN
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {days.slice(0, 4).map(d => <DayCard key={d.title} title={d.title} details={d.details} />)}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {days.slice(4).map(d => <DayCard key={d.title} title={d.title} details={d.details} />)}
          </div>
        </div>
      </Section>

      {/* The Place */}
      <Section bg="bg-white" id="city">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="relative w-full lg:w-[500px] h-[320px] bg-stone rounded-card overflow-hidden shrink-0">
            <Image src={images.place} alt={`Local culture in ${club.city}`} fill placeholder="blur" sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <Eyebrow label="THE PLACE" />
            <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy leading-[1.1] m-0">
              {club.city.toUpperCase()}
            </h2>
            {club.placeDescription.map((p, i) => (
              <p key={i} className="font-body text-[16px] text-slate leading-[1.6]">{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Quote Band */}
      <QuoteBand quote={club.quote} attribution={club.quoteAttribution} image={images.hero} />

      {/* Travel Options */}
      <Section id="dates">
        <div className="flex flex-col items-center gap-10">
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy text-center leading-[1.1] m-0 whitespace-pre-line">
            {"COME WITH YOUR TEAM.\nYOUR FAMILY. OR JUST YOUR BAG."}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            <TravelColumn title="PLAYER ONLY" image={siteImages.travelPlayerOnly} checklist={['Fly to designated airport', 'ESP airport pickup', 'Supervised program', 'Lodging, meals & transportation', 'Airport drop-off']} />
            <TravelColumn title="PLAYER + FAMILY" image={siteImages.travelPlayerFamily} checklist={['Player joins the program', 'Family enjoys companion experience', 'Separate hotels & activities']} />
            <TravelColumn title="FULL TEAM" image={siteImages.travelFullTeam} checklist={['We handle all logistics', 'Players and coaches travel together', 'Families can join (optional)', 'Custom itineraries for your club']} />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="w-full bg-navy">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-16 lg:py-24 flex flex-col items-center gap-6">
          <h2 className="font-display text-[36px] lg:text-[52px] font-bold text-white text-center leading-[1.1] m-0">
            YOUR FIRST STAMP STARTS HERE.
          </h2>
          <p className="font-body text-[16px] text-white/70 text-center">Join the 2027 priority list.</p>
          <Link href="/apply"><Button label={`APPLY FOR ${club.name.toUpperCase()}`} variant="primary" /></Link>
          <p className="font-script text-[28px] text-gold text-center">More than a trip. A different future.</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
