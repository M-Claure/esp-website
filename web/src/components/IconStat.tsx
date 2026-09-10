import { type LucideIcon } from 'lucide-react'

interface IconStatProps {
  icon: LucideIcon
  label: string
  variant?: 'light' | 'dark'
}

export default function IconStat({ icon: Icon, label, variant = 'light' }: IconStatProps) {
  const isDark = variant === 'dark'

  return (
    <div className="flex flex-col items-center gap-3 w-[160px]">
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-full ${
          isDark ? 'bg-white/15' : 'bg-navy'
        }`}
      >
        <Icon size={28} className={isDark ? 'text-white' : 'text-white'} />
      </div>
      <span
        className={`font-body text-[16px] font-semibold text-center w-full ${
          isDark ? 'text-white' : 'text-navy'
        }`}
      >
        {label}
      </span>
    </div>
  )
}
