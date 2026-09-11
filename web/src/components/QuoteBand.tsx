import Image, { type StaticImageData } from 'next/image'

interface QuoteBandProps {
  quote: string
  attribution?: string
  image: StaticImageData
}

export default function QuoteBand({ quote, attribution = '— ESP', image }: QuoteBandProps) {
  return (
    <div className="relative w-full h-[320px] lg:h-[420px] overflow-hidden">
      <Image src={image} alt="" fill placeholder="blur" sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-navy/65" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 lg:px-[120px]">
        <p className="font-display text-[24px] lg:text-[36px] font-bold text-white text-center leading-[1.35] max-w-[800px] whitespace-pre-line">
          {quote}
        </p>
        <span className="font-body text-[16px] font-semibold text-gold text-center">{attribution}</span>
      </div>
    </div>
  )
}
