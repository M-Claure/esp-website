interface SectionProps {
  children: React.ReactNode
  className?: string
  bg?: string
  id?: string
}

export default function Section({ children, className = '', bg = 'bg-cream', id }: SectionProps) {
  return (
    <section id={id} className={`w-full ${bg}`}>
      <div className={`max-w-[1200px] mx-auto px-5 lg:px-10 py-16 lg:py-24 ${className}`}>
        {children}
      </div>
    </section>
  )
}
