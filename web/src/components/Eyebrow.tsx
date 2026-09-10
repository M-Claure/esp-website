interface EyebrowProps {
  label: string
}

export default function Eyebrow({ label }: EyebrowProps) {
  return (
    <span className="text-gold font-body text-[13px] font-semibold" style={{ letterSpacing: '1.56px' }}>
      {label}
    </span>
  )
}
