interface InfoCardProps {
  title: string
  description: string
}

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="w-full lg:w-[360px] bg-white rounded-card border border-mist shadow-[0_4px_16px_rgba(0,0,0,0.05)] p-6 lg:p-7 flex flex-col gap-3">
      <h3 className="font-body text-[20px] font-bold text-navy m-0">{title}</h3>
      <p className="font-body text-[15px] text-slate leading-[1.5] m-0">{description}</p>
    </div>
  )
}
