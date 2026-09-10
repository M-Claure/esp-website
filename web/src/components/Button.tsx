interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary-light' | 'secondary-dark'
  onClick?: () => void
  className?: string
}

export default function Button({ label, variant = 'primary', onClick, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-body text-[15px] font-bold cursor-pointer'
  const padding = 'px-7 py-3.5'
  const radius = 'rounded-btn'
  const tracking = { letterSpacing: '1.2px' }

  const variants = {
    primary: `${base} ${padding} ${radius} bg-gold text-navy`,
    'secondary-light': `${base} ${padding} ${radius} border-[1.5px] border-white text-white bg-transparent`,
    'secondary-dark': `${base} ${padding} ${radius} border-[1.5px] border-navy text-navy bg-transparent`,
  }

  return (
    <button onClick={onClick} className={`${variants[variant]} ${className}`} style={tracking}>
      {label}
      <span aria-hidden>→</span>
    </button>
  )
}
