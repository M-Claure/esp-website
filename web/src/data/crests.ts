import type { StaticImageData } from 'next/image'

import realSociedad from '@/assets/crests/real-sociedad.png'
import gironaFc from '@/assets/crests/girona-fc.png'
import realOviedo from '@/assets/crests/real-oviedo.png'
import sportingDeGijon from '@/assets/crests/sporting-de-gijon.png'
import racingDeSantander from '@/assets/crests/racing-de-santander.png'
import deportivoDeLaCoruna from '@/assets/crests/deportivo-de-la-coruna.png'
import levanteUd from '@/assets/crests/levante-ud.png'

// Official club crests are copyrighted trademarks of each club, shown here for a private demo only.
// Before the site is public, set this to false (every crest falls back to the ESP mock crest)
// or license the marks from each club.
export const SHOW_OFFICIAL_CRESTS = true

const crests: Record<string, StaticImageData> = {
  'real-sociedad': realSociedad,
  'girona-fc': gironaFc,
  'real-oviedo': realOviedo,
  'sporting-de-gijon': sportingDeGijon,
  'racing-de-santander': racingDeSantander,
  'deportivo-de-la-coruna': deportivoDeLaCoruna,
  'levante-ud': levanteUd,
}

export function clubCrest(slug: string): StaticImageData | undefined {
  return SHOW_OFFICIAL_CRESTS ? crests[slug] : undefined
}
