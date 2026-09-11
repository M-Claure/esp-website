import Image, { type StaticImageData } from 'next/image'

interface TravelColumnProps {
  title: string
  tag?: string
  image: StaticImageData
  imageAlt?: string
  checklist: string[]
}

export default function TravelColumn({ title, tag, image, imageAlt = '', checklist }: TravelColumnProps) {
  return (
    <div className="w-full lg:max-w-[380px] flex flex-col gap-5">
      <div className="relative w-full h-[200px] lg:h-[240px] bg-stone rounded-card overflow-hidden">
        <Image src={image} alt={imageAlt} fill placeholder="blur" sizes="(min-width: 1024px) 380px, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-display text-[24px] lg:text-[28px] font-bold text-navy leading-[1.15] m-0">{title}</h3>
        {tag && <span className="font-body text-[13px] text-slate">{tag}</span>}
      </div>
      <div className="flex flex-col gap-3 w-full">
        {checklist.map(item => (
          <div key={item} className="flex items-baseline gap-2.5 w-full">
            <span className="font-body text-[16px] text-gold shrink-0">✓</span>
            <span className="font-body text-[15px] text-slate">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
