import Image from 'next/image'
import MockCrest from './MockCrest'
import { clubCrest } from '@/data/crests'

interface ClubCrestProps {
  slug?: string
  initials?: string
  size?: number
}

export default function ClubCrest({ slug, initials, size = 72 }: ClubCrestProps) {
  const crest = slug ? clubCrest(slug) : undefined
  if (!crest) return <MockCrest initials={initials} size={size} />

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <Image src={crest} alt="" fill sizes={`${size}px`} className="object-contain" />
    </div>
  )
}
