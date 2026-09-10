interface TravelColumnProps {
  title: string
  imageCaption?: string
  checklist: string[]
}

export default function TravelColumn({ title, imageCaption = 'Travel photo', checklist }: TravelColumnProps) {
  return (
    <div className="w-full lg:w-[380px] flex flex-col gap-5">
      <div className="w-full h-[200px] lg:h-[240px] bg-stone rounded-card flex items-center justify-center">
        <span className="font-body text-[13px] text-navy/40">{imageCaption}</span>
      </div>
      <h3 className="font-display text-[24px] lg:text-[28px] font-bold text-navy leading-[1.15] m-0">{title}</h3>
      <div className="flex flex-col gap-3 w-full">
        {checklist.map(item => (
          <div key={item} className="flex items-center gap-2.5 w-full">
            <span className="font-body text-[16px] text-gold shrink-0">✓</span>
            <span className="font-body text-[15px] text-slate">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
