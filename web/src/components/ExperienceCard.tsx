import Link from 'next/link'

interface ExperienceCardProps {
  clubName: string
  city: string
  description: string
  slug?: string
  imageCaption?: string
}

export default function ExperienceCard({
  clubName,
  city,
  description,
  slug,
  imageCaption = 'Training + city photo',
}: ExperienceCardProps) {
  const inner = (
    <div className="w-full lg:w-[380px] bg-white rounded-card border border-mist overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
      <div className="w-full h-[200px] lg:h-[228px] bg-stone flex items-center justify-center">
        <span className="font-body text-[13px] text-navy/40">{imageCaption}</span>
      </div>
      <div className="flex flex-col gap-2 pt-5 px-5 lg:px-6 pb-6">
        <h3 className="font-display text-[24px] lg:text-[28px] font-bold text-navy leading-[1.15] m-0">{clubName}</h3>
        <span className="font-body text-[13px] font-semibold text-gold" style={{ letterSpacing: '1.56px' }}>
          {city}
        </span>
        <p className="font-body text-[15px] text-slate leading-[1.5] m-0">{description}</p>
        <span className="font-body text-[14px] font-bold text-navy" style={{ letterSpacing: '0.84px' }}>
          EXPLORE THE EXPERIENCE →
        </span>
      </div>
    </div>
  )

  if (slug) {
    return <Link href={`/experiences/${slug}`} className="no-underline">{inner}</Link>
  }
  return inner
}
