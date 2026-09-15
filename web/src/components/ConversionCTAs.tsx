import Link from 'next/link'
import Button from './Button'
import { paths } from '@/data/conversion'

interface ConversionCTAsProps {
  playerLabel?: string
}

// Closing CTA pair for navy sections: the player / family path first, the team path second.
export default function ConversionCTAs({ playerLabel = paths.player.label }: ConversionCTAsProps) {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
      <Link href={paths.player.href} className="w-full sm:w-auto"><Button label={playerLabel} variant="primary" className="w-full sm:w-auto justify-center" /></Link>
      <Link href={paths.team.href} className="w-full sm:w-auto"><Button label={paths.team.label} variant="secondary-light" className="w-full sm:w-auto justify-center" /></Link>
    </div>
  )
}
