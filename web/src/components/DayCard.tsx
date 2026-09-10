interface DayCardProps {
  title: string
  details: string
}

export default function DayCard({ title, details }: DayCardProps) {
  return (
    <div className="w-full lg:w-[160px] bg-white rounded-[12px] border border-mist shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-4 flex flex-col gap-2">
      <span className="font-body text-[14px] font-bold text-navy" style={{ letterSpacing: '0.84px' }}>
        {title}
      </span>
      <p className="font-body text-[13px] text-slate leading-[1.4] m-0">{details}</p>
    </div>
  )
}
