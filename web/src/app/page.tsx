import Link from 'next/link'
import Image from 'next/image'
import { Trophy, Users, User, UserPlus, Languages, Heart, GraduationCap, Plane } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import Eyebrow from '@/components/Eyebrow'
import ClubTile from '@/components/ClubTile'
import IconStat from '@/components/IconStat'
import ExperienceCard from '@/components/ExperienceCard'
import TravelOptions from '@/components/TravelOptions'
import DayCard from '@/components/DayCard'
import FAQRow from '@/components/FAQRow'
import QuoteBand from '@/components/QuoteBand'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import { siteImages, clubImages } from '@/data/images'
import { AGE_RANGE } from '@/data/travel'

const clubTiles = [
  { name: 'Real Sociedad', city: 'San Sebastián', initials: 'RS', slug: 'real-sociedad' },
  { name: 'Girona FC', city: 'Girona', initials: 'GFC', slug: 'girona-fc' },
  { name: 'Real Oviedo', city: 'Oviedo', initials: 'RO', slug: 'real-oviedo' },
  { name: 'Sporting de Gijón', city: 'Gijón', initials: 'SG', slug: 'sporting-de-gijon' },
  { name: 'Racing de Santander', city: 'Santander', initials: 'RdS', slug: 'racing-de-santander' },
  { name: 'Deportivo de La Coruña', city: 'A Coruña', initials: 'RC', slug: 'deportivo-de-la-coruna' },
  { name: 'Levante UD', city: 'Valencia', initials: 'LUD', slug: 'levante-ud' },
]

const howItWorks = [
  { step: '01', title: 'Choose your club and dates', desc: 'Explore our club experiences and find the right fit.' },
  { step: '02', title: 'Apply and secure your spot', desc: 'Complete a short application. Reserve your spot with a deposit.' },
  { step: '03', title: 'We handle the logistics', desc: 'We coordinate accommodation, training, local transportation and activities.' },
  { step: '04', title: 'Live the experience', desc: 'Train, compete, explore and immerse yourself in the club and the city.' },
  { step: '05', title: 'Return home with more', desc: 'New skills, new perspectives and memories that last a lifetime.' },
]

const audiences = [
  { icon: User, title: 'INDIVIDUAL PLAYERS', text: 'No team needed. Each player joins an ESP group matched by age and level, alongside players from across the U.S.', cta: 'EXPLORE EXPERIENCES', href: '/experiences' },
  { icon: Users, title: 'FULL TEAMS', text: 'U.S. clubs and teams travel together with their coaches. ESP builds the European side: club access, matches, lodging and logistics.', cta: 'BRING YOUR TEAM', href: '/teams' },
  { icon: Heart, title: 'PARENTS', text: 'Ages 8–12 travel with a parent or guardian. Ages 13–18 can come with family or travel on their own, supervised by ESP staff from airport pickup to drop-off.', cta: 'FOR FAMILIES', href: '/families' },
]

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

const faqs = [
  { q: 'Can my child travel without us?', a: 'Yes, for players ages 13–18 — we meet them at the designated local airport and supervise the program through departure. Players ages 8–12 travel with a parent or guardian.' },
  { q: 'Does my child need a team to join?', a: 'No. Individual players join ESP groups matched by age and level, with players from across the U.S. Clubs and teams can also book the experience together.' },
  { q: 'Does my child need to speak Spanish?', a: 'No. Bilingual ESP staff and/or translators help players communicate with coaches, teammates and local staff throughout the experience.' },
  { q: 'Is this only for elite players?', a: 'No. Players should love the game and be ready for the experience. Groups and competition are matched appropriately.' },
  { q: 'Is this for girls too?', a: `Absolutely. ESP experiences are for boys and girls ages ${AGE_RANGE}, with appropriate programming and competition.` },
  { q: 'Can we come too?', a: "Yes. For players 13–18 it's optional — companion packages let families experience the destination around the player's soccer schedule. Players 8–12 travel with a parent or guardian." },
  { q: 'What about safety and supervision?', a: 'Answer being finalized — safeguarding, medical, insurance and emergency protocols.' },
  { q: "What's included?", a: 'Answer being finalized per club — lodging, meals, local transport, training, matches, cultural program.' },
  { q: "What if there's an emergency?", a: 'Answer being finalized — emergency protocols.' },
]

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar variant="light" />

      {/* 5.1 Hero */}
      <section className="relative w-full min-h-[600px] lg:min-h-[720px] bg-stone overflow-hidden">
        <Image src={siteImages.homeHero} alt="Two youth players training on a pitch above a Spanish coastal town" fill placeholder="blur" loading="eager" fetchPriority="high" sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 flex flex-col justify-center min-h-[600px] lg:min-h-[720px] px-5 lg:px-24 py-16 lg:py-24 max-w-[1440px] mx-auto">
          <h1 className="font-display text-[40px] lg:text-[72px] font-bold text-white leading-[1.1] m-0 max-w-[800px] whitespace-pre-line">
            {"TRAIN WITH THE CLUBS.\nLIVE THE CULTURE.\nEXPERIENCE EUROPEAN FOOTBALL."}
          </h1>
          <p className="font-body text-[16px] lg:text-[18px] text-white/80 mt-6 max-w-[600px] leading-[1.5]">
            Week-long soccer experiences for boys and girls ages {AGE_RANGE} with professional clubs in Spain — on your own or with your team.
          </p>
          <p className="font-body text-[14px] lg:text-[16px] text-white/60 mt-3 max-w-[600px] leading-[1.5]">
            Train with club coaches. Experience their methodology and facilities. Compete against local players. Discover the city and culture surrounding the club.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 mt-8">
            <Link href="/experiences"><Button label="EXPLORE 2027 EXPERIENCES" variant="primary" /></Link>
            <Link href="/teams"><Button label="BRING YOUR TEAM" variant="secondary-light" /></Link>
          </div>
        </div>
      </section>

      {/* 5.2 Trust Strip */}
      <section className="w-full bg-navy py-10 lg:py-12">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 grid grid-cols-2 lg:flex lg:justify-center gap-8 lg:gap-16">
          <IconStat icon={Trophy} label="Professional clubs" variant="dark" />
          <IconStat icon={Users} label={`Boys & girls ages ${AGE_RANGE}`} variant="dark" />
          <IconStat icon={UserPlus} label="Individual players or full teams" variant="dark" />
          <IconStat icon={Plane} label="Player-only travel from age 13" variant="dark" />
          <IconStat icon={Languages} label="Bilingual staff" variant="dark" />
        </div>
      </section>

      {/* 5.3 Partner Clubs */}
      <Section>
        <div className="flex flex-col items-center gap-8 lg:gap-12">
          <div className="text-center flex flex-col items-center gap-4">
            <Eyebrow label="PARTNER CLUBS" />
            <h2 className="font-display text-[32px] lg:text-[48px] font-bold text-navy leading-[1.1] m-0 whitespace-pre-line">
              {"TRAIN WITH SPAIN'S\nPROFESSIONAL CLUBS"}
            </h2>
            <p className="font-body text-[16px] text-slate max-w-[700px] leading-[1.5]">
              Every experience combines the identity of the club with the city and culture around it.
            </p>
          </div>
          <p className="font-body text-[13px] font-semibold text-gold text-center" style={{ letterSpacing: '1.56px' }}>
            Club → methodology → facilities → coaches → competition → city → culture
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {clubTiles.slice(0, 4).map(c => (
              <ClubTile key={c.name} clubName={c.name} city={c.city} initials={c.initials} slug={c.slug} />
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {clubTiles.slice(4).map(c => (
              <ClubTile key={c.name} clubName={c.name} city={c.city} initials={c.initials} slug={c.slug} />
            ))}
          </div>
          <Link href="/experiences"><Button label="EXPLORE ALL CLUB EXPERIENCES" variant="secondary-dark" /></Link>
          <p className="font-script text-[24px] lg:text-[28px] text-gold text-center">
            Different clubs. One unforgettable country.
          </p>
        </div>
      </Section>

      {/* 5.4 Experience Cards */}
      <Section bg="bg-white">
        <div className="flex flex-col items-center gap-10">
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy text-center leading-[1.1] m-0">
            CLUB × CITY EXPERIENCES
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ExperienceCard clubName="REAL SOCIEDAD" city="SAN SEBASTIÁN" description="Train in one of Spain's strongest development cultures. Then experience La Concha, the Old Town, pintxos and the Basque Country." slug="real-sociedad" image={clubImages['real-sociedad'].hero} />
            <ExperienceCard clubName="GIRONA FC" city="GIRONA + BARCELONA" description="Modern professional football in Catalonia. Medieval Girona, Mediterranean life and optional Barcelona experiences." slug="girona-fc" image={clubImages['girona-fc'].hero} />
            <ExperienceCard clubName="RACING SANTANDER" city="SANTANDER" description="Historic football on Spain's north coast. Beaches, mountains and Cantabrian culture around the soccer program." slug="racing-de-santander" image={clubImages['racing-de-santander'].hero} />
          </div>
        </div>
      </Section>

      {/* 5.5 How It Works */}
      <Section>
        <div className="flex flex-col items-center gap-12">
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy text-center leading-[1.1] m-0 whitespace-pre-line">
            {"A SIMPLE PROCESS.\nAN EXTRAORDINARY EXPERIENCE."}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 w-full">
            {howItWorks.map(item => (
              <div key={item.step} className="flex flex-col gap-3 items-center text-center">
                <span className="font-display text-[40px] font-bold text-gold">{item.step}</span>
                <h3 className="font-body text-[18px] font-bold text-navy m-0">{item.title}</h3>
                <p className="font-body text-[15px] text-slate leading-[1.5] m-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Who It's For */}
      <Section bg="bg-white">
        <div className="flex flex-col items-center gap-10">
          <div className="text-center flex flex-col items-center gap-4">
            <Eyebrow label="WHO IT'S FOR" />
            <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy leading-[1.1] m-0 whitespace-pre-line">
              {"ON YOUR OWN.\nOR WITH YOUR TEAM."}
            </h2>
            <p className="font-body text-[16px] text-slate max-w-[640px] leading-[1.5] m-0">
              ESP is open to individual players and full teams — boys and girls ages {AGE_RANGE}.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            {audiences.map(a => (
              <div key={a.title} className="flex flex-col gap-4 bg-cream rounded-card border border-mist p-6 lg:p-8">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                  <a.icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-[24px] font-bold text-navy leading-[1.15] m-0">{a.title}</h3>
                <p className="font-body text-[15px] text-slate leading-[1.6] m-0 flex-1">{a.text}</p>
                <Link
                  href={a.href}
                  className="self-start inline-flex items-center gap-2 pb-1 border-b-2 border-gold font-body text-[14px] font-bold text-navy no-underline"
                  style={{ letterSpacing: '0.84px' }}
                >
                  {a.cta}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5.6 Quote Band */}
      <QuoteBand quote={'"Football opens doors.\nTravel makes them bigger."'} attribution="— ESP" image={siteImages.homeQuote} />

      {/* 5.7 Travel Your Way */}
      <Section bg="bg-white">
        <div className="flex flex-col items-center gap-10">
          <div className="text-center flex flex-col items-center gap-4">
            <h2 className="font-display text-[28px] lg:text-[44px] font-bold text-navy leading-[1.1] m-0 whitespace-pre-line">
              {"COME WITH YOUR TEAM.\nYOUR FAMILY. OR JUST YOUR BAG."}
            </h2>
            <p className="font-body text-[16px] text-slate max-w-[600px] leading-[1.5]">
              Join on your own or bring your whole team. The soccer experience is the core product.
            </p>
          </div>
          <TravelOptions />
        </div>
      </Section>

      {/* 5.8 Language */}
      <section className="w-full bg-navy">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-16 lg:py-24 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 flex-1">
            <h2 className="font-display text-[32px] lg:text-[48px] font-bold text-white leading-[1.1] m-0 whitespace-pre-line">
              {"NO SPANISH?\nNO PROBLEM."}
            </h2>
            <p className="font-body text-[16px] text-gold leading-[1.5]">
              Our programs are designed for players coming from the United States.
            </p>
            <p className="font-body text-[15px] text-white/70 leading-[1.5]">
              Bilingual ESP staff and/or translators are available throughout the experience to help players communicate with coaches, teammates and local staff.
            </p>
            <p className="font-body text-[15px] text-white font-bold leading-[1.5]">
              And being immersed in a different language and culture is part of what makes the week special.
            </p>
            <div className="flex flex-col lg:flex-row gap-6 mt-4">
              <IconStat icon={Languages} label="Bilingual staff" variant="dark" />
              <IconStat icon={GraduationCap} label="Translation support" variant="dark" />
              <IconStat icon={Heart} label="Help with daily life" variant="dark" />
            </div>
          </div>
          <div className="relative w-full lg:w-[400px] h-[300px] bg-stone/20 rounded-card overflow-hidden shrink-0">
            <Image src={siteImages.bilingualStaff} alt="An ESP staff member translating a Spanish coach's instructions for two players" fill placeholder="blur" sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* 5.9 Companion */}
      <Section>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full lg:w-[500px] h-[300px] rounded-card overflow-hidden shrink-0 grid grid-cols-2 gap-1">
            <div className="relative bg-stone">
              <Image src={siteImages.companionPlayer} alt="A player training" fill placeholder="blur" sizes="(min-width: 1024px) 250px, 50vw" className="object-cover" />
            </div>
            <div className="relative bg-stone">
              <Image src={siteImages.companionParents} alt="Parents exploring a Spanish old town" fill placeholder="blur" sizes="(min-width: 1024px) 250px, 50vw" className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy leading-[1.1] m-0 whitespace-pre-line">
              {"THEIR SOCCER EXPERIENCE.\nYOUR EUROPEAN ADVENTURE."}
            </h2>
            <p className="font-body text-[16px] text-slate leading-[1.5]">
              Families who want to join can turn the week into a shared trip — without changing the player&apos;s core program.
            </p>
            <Eyebrow label="COMPANION PACKAGE" />
            <ul className="font-body text-[15px] text-slate leading-[1.8] pl-5 m-0">
              <li>Hotel accommodation</li>
              <li>Selected local transportation</li>
              <li>Cultural / leisure programming</li>
              <li>Selected meals</li>
              <li>Opportunities to watch training / matches when available</li>
              <li>Free time to explore independently</li>
            </ul>
            <p className="font-body text-[14px] text-slate italic">Companion travel is optional for ages 13–18 and required for ages 8–12.</p>
            <Link href="/families"><Button label="LEARN MORE ABOUT FAMILY TRAVEL" variant="secondary-dark" /></Link>
          </div>
        </div>
      </Section>

      {/* 5.10 The Week */}
      <Section bg="bg-white">
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

      {/* 5.11 FAQ */}
      <Section>
        <div className="flex flex-col items-center gap-8">
          <h2 className="font-display text-[32px] lg:text-[44px] font-bold text-navy text-center leading-[1.1] m-0">
            PARENTS, WE&apos;VE GOT THIS.
          </h2>
          <div className="w-full flex flex-col items-center">
            {faqs.map(f => <FAQRow key={f.q} question={f.q} answer={f.a} />)}
          </div>
        </div>
      </Section>

      {/* 5.12 Final CTA */}
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
