import type { StaticImageData } from 'next/image'

// Every photo on the site. These are AI-generated placeholders for the prototype —
// before launch, replace each file in src/assets/images/ with licensed photography,
// keeping the same file name (and .jpg format). No code changes are needed.

import homeHero from '@/assets/images/home/hero.jpg'
import homeQuote from '@/assets/images/home/quote.jpg'
import bilingualStaff from '@/assets/images/home/bilingual-staff.jpg'
import companionPlayer from '@/assets/images/home/companion-player.jpg'
import companionParents from '@/assets/images/home/companion-parents.jpg'
import familiesHero from '@/assets/images/families/hero.jpg'
import travelPlayerOnly from '@/assets/images/travel/player-only.jpg'
import travelPlayerFamily from '@/assets/images/travel/player-family.jpg'
import travelFullTeam from '@/assets/images/travel/full-team.jpg'

import realSociedadHero from '@/assets/images/clubs/real-sociedad/hero.jpg'
import realSociedadTrain from '@/assets/images/clubs/real-sociedad/train.jpg'
import realSociedadFacilities from '@/assets/images/clubs/real-sociedad/facilities.jpg'
import realSociedadCity from '@/assets/images/clubs/real-sociedad/city.jpg'
import realSociedadPlace from '@/assets/images/clubs/real-sociedad/place.jpg'
import gironaHero from '@/assets/images/clubs/girona-fc/hero.jpg'
import gironaTrain from '@/assets/images/clubs/girona-fc/train.jpg'
import gironaFacilities from '@/assets/images/clubs/girona-fc/facilities.jpg'
import gironaCity from '@/assets/images/clubs/girona-fc/city.jpg'
import gironaPlace from '@/assets/images/clubs/girona-fc/place.jpg'
import oviedoHero from '@/assets/images/clubs/real-oviedo/hero.jpg'
import oviedoTrain from '@/assets/images/clubs/real-oviedo/train.jpg'
import oviedoFacilities from '@/assets/images/clubs/real-oviedo/facilities.jpg'
import oviedoCity from '@/assets/images/clubs/real-oviedo/city.jpg'
import oviedoPlace from '@/assets/images/clubs/real-oviedo/place.jpg'
import sportingHero from '@/assets/images/clubs/sporting-de-gijon/hero.jpg'
import sportingTrain from '@/assets/images/clubs/sporting-de-gijon/train.jpg'
import sportingFacilities from '@/assets/images/clubs/sporting-de-gijon/facilities.jpg'
import sportingCity from '@/assets/images/clubs/sporting-de-gijon/city.jpg'
import sportingPlace from '@/assets/images/clubs/sporting-de-gijon/place.jpg'
import racingHero from '@/assets/images/clubs/racing-de-santander/hero.jpg'
import racingTrain from '@/assets/images/clubs/racing-de-santander/train.jpg'
import racingFacilities from '@/assets/images/clubs/racing-de-santander/facilities.jpg'
import racingCity from '@/assets/images/clubs/racing-de-santander/city.jpg'
import racingPlace from '@/assets/images/clubs/racing-de-santander/place.jpg'
import deportivoHero from '@/assets/images/clubs/deportivo-de-la-coruna/hero.jpg'
import deportivoTrain from '@/assets/images/clubs/deportivo-de-la-coruna/train.jpg'
import deportivoFacilities from '@/assets/images/clubs/deportivo-de-la-coruna/facilities.jpg'
import deportivoCity from '@/assets/images/clubs/deportivo-de-la-coruna/city.jpg'
import deportivoPlace from '@/assets/images/clubs/deportivo-de-la-coruna/place.jpg'
import levanteHero from '@/assets/images/clubs/levante-ud/hero.jpg'
import levanteTrain from '@/assets/images/clubs/levante-ud/train.jpg'
import levanteFacilities from '@/assets/images/clubs/levante-ud/facilities.jpg'
import levanteCity from '@/assets/images/clubs/levante-ud/city.jpg'
import levantePlace from '@/assets/images/clubs/levante-ud/place.jpg'

export const siteImages = {
  homeHero,
  homeQuote,
  bilingualStaff,
  companionPlayer,
  companionParents,
  familiesHero,
  travelPlayerOnly,
  travelPlayerFamily,
  travelFullTeam,
}

export interface ClubImages {
  hero: StaticImageData
  train: StaticImageData
  facilities: StaticImageData
  city: StaticImageData
  place: StaticImageData
}

export const clubImages: Record<string, ClubImages> = {
  'real-sociedad': { hero: realSociedadHero, train: realSociedadTrain, facilities: realSociedadFacilities, city: realSociedadCity, place: realSociedadPlace },
  'girona-fc': { hero: gironaHero, train: gironaTrain, facilities: gironaFacilities, city: gironaCity, place: gironaPlace },
  'real-oviedo': { hero: oviedoHero, train: oviedoTrain, facilities: oviedoFacilities, city: oviedoCity, place: oviedoPlace },
  'sporting-de-gijon': { hero: sportingHero, train: sportingTrain, facilities: sportingFacilities, city: sportingCity, place: sportingPlace },
  'racing-de-santander': { hero: racingHero, train: racingTrain, facilities: racingFacilities, city: racingCity, place: racingPlace },
  'deportivo-de-la-coruna': { hero: deportivoHero, train: deportivoTrain, facilities: deportivoFacilities, city: deportivoCity, place: deportivoPlace },
  'levante-ud': { hero: levanteHero, train: levanteTrain, facilities: levanteFacilities, city: levanteCity, place: levantePlace },
}
