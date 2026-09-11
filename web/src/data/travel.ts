import type { StaticImageData } from 'next/image'
import { siteImages } from './images'

// Age rules (Sept 2026 deck review): players 8–12 travel with a parent or guardian;
// players 13–18 have every option, including travelling on their own.
export const AGE_RANGE = '8–18'
export const AGE_RULE = 'Ages 8–12 travel with a parent or guardian. Ages 13–18 can also travel on their own.'

export interface TravelOption {
  title: string
  tag: string
  image: StaticImageData
  imageAlt: string
  checklist: string[]
}

export const playerOnly: TravelOption = {
  title: 'PLAYER ONLY',
  tag: 'Ages 13–18',
  image: siteImages.travelPlayerOnly,
  imageAlt: 'Player with ESP staff at airport',
  checklist: ['No team needed — join an ESP group', 'Fly to designated airport', 'ESP airport pickup', 'Supervised program', 'Lodging, meals & transportation', 'Airport drop-off'],
}

export const playerFamily: TravelOption = {
  title: 'PLAYER + FAMILY',
  tag: 'All ages · required for 8–12',
  image: siteImages.travelPlayerFamily,
  imageAlt: 'Family exploring Spanish city',
  checklist: ['No team needed — join an ESP group', 'Player joins the full program', 'Family enjoys companion experience', 'Separate hotels & activities'],
}

export const fullTeam: TravelOption = {
  title: 'FULL TEAM',
  tag: 'All ages',
  image: siteImages.travelFullTeam,
  imageAlt: 'Team traveling together',
  checklist: ['We handle all logistics', 'Players and coaches travel together', 'Families can join (required for ages 8–12)', 'Custom itineraries for your club'],
}

export const travelOptions = [playerOnly, playerFamily, fullTeam]
