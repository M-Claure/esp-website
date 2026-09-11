import Link from 'next/link'
import Image, { type StaticImageData } from 'next/image'

interface ExperienceCardProps {
  clubName: string
  city: string
  description: string
  slug?: string
  image: StaticImageData
  imageAlt?: string
}

export default function ExperienceCard({
  clubName,
  city,
  description,
  slug,
  image,
  imageAlt = '',
}: ExperienceCardProps) {
  const inner = (
    <div className="w-full lg:max-w-[380px] bg-white rounded-card border border-mist overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
      <div className="relative w-full h-[200px] lg:h-[228px] bg-stone">
        <Image src={image} alt={imageAlt} fill placeholder="blur" sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
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
