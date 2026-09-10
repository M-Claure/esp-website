interface MockCrestProps {
  initials?: string
  size?: number
}

export default function MockCrest({ initials = 'ESP', size = 72 }: MockCrestProps) {
  const inner = size - 6
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-full bg-gold" />
      <div
        className="absolute rounded-full bg-navy"
        style={{ top: 3, left: 3, width: inner, height: inner }}
      />
      <span
        className="absolute inset-0 flex items-center justify-center font-display text-white font-bold"
        style={{ fontSize: size * 20 / 72 }}
      >
        {initials}
      </span>
    </div>
  )
}
