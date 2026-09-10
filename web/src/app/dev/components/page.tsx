import { Trophy, Users, Globe } from 'lucide-react'
import MockCrest from '@/components/MockCrest'
import Eyebrow from '@/components/Eyebrow'
import Button from '@/components/Button'
import NavBar from '@/components/NavBar'
import ClubTile from '@/components/ClubTile'
import IconStat from '@/components/IconStat'
import ExperienceCard from '@/components/ExperienceCard'
import TravelColumn from '@/components/TravelColumn'
import DayCard from '@/components/DayCard'
import InfoCard from '@/components/InfoCard'
import FAQRow from '@/components/FAQRow'
import QuoteBand from '@/components/QuoteBand'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import Footer from '@/components/Footer'

function Section({ title, children, bg = 'bg-white' }: { title: string; children: React.ReactNode; bg?: string }) {
  return (
    <div className={`flex flex-col gap-6 p-10 ${bg}`}>
      <h2 className="font-body text-[13px] font-bold text-slate uppercase" style={{ letterSpacing: '2px' }}>{title}</h2>
      {children}
    </div>
  )
}

export default function ComponentPreview() {
  return (
    <div className="flex flex-col">
      <Section title="MockCrest">
        <div className="flex gap-6 items-end">
          <MockCrest />
          <MockCrest initials="RS" size={56} />
          <MockCrest initials="GFC" size={48} />
        </div>
      </Section>
      <Section title="Eyebrow"><Eyebrow label="EYEBROW LABEL" /></Section>
      <Section title="Buttons">
        <div className="flex gap-6 items-center">
          <Button label="APPLY NOW" variant="primary" />
          <div className="bg-navy p-6 rounded-lg"><Button label="LEARN MORE" variant="secondary-light" /></div>
          <Button label="LEARN MORE" variant="secondary-dark" />
        </div>
      </Section>
      <Section title="NavBar — Light"><NavBar variant="light" /></Section>
      <Section title="NavBar — Dark"><NavBar variant="dark" /></Section>
      <Section title="ClubTile">
        <div className="flex gap-10">
          <ClubTile clubName="Real Sociedad" city="San Sebastián" initials="RS" />
          <ClubTile clubName="Girona FC" city="Girona" initials="GFC" />
        </div>
      </Section>
      <Section title="IconStat">
        <div className="flex gap-8">
          <IconStat icon={Trophy} label="Professional clubs" />
          <IconStat icon={Users} label="Ages 12–18" />
          <IconStat icon={Globe} label="7 Spanish cities" />
        </div>
      </Section>
      <Section title="IconStat Dark" bg="bg-navy">
        <div className="flex gap-8">
          <IconStat icon={Trophy} label="Professional clubs" variant="dark" />
          <IconStat icon={Users} label="Ages 12–18" variant="dark" />
        </div>
      </Section>
      <Section title="ExperienceCard">
        <ExperienceCard clubName="REAL SOCIEDAD" city="SAN SEBASTIÁN" description="Train in one of Spain's strongest development cultures." slug="real-sociedad" />
      </Section>
      <Section title="TravelColumn">
        <TravelColumn title="PLAYER ONLY" checklist={['Fly to designated airport', 'ESP airport pickup', 'Supervised program', 'Lodging, meals & transportation', 'Airport drop-off']} />
      </Section>
      <Section title="DayCard">
        <div className="flex gap-4">
          <DayCard title="SUN | ARRIVE" details="Airport pickup • check-in • orientation • team dinner" />
          <DayCard title="MON | TRAIN" details="Morning session • lunch • academy tour" />
        </div>
      </Section>
      <Section title="InfoCard">
        <InfoCard title="Supervision" description="Who is with the players and how the week is managed." />
      </Section>
      <Section title="FAQRow">
        <FAQRow question="Can my child travel without us?" answer="Yes — our Player-Only option is designed for exactly this." />
      </Section>
      <Section title="QuoteBand">
        <QuoteBand quote={'"Football opens doors.\nTravel makes them bigger."'} attribution="— ESP" />
      </Section>
      <Section title="ImagePlaceholder">
        <ImagePlaceholder />
      </Section>
      <Section title="Footer"><Footer /></Section>
    </div>
  )
}
