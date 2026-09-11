import ClubCrest from './ClubCrest'

interface ClubTileProps {
  clubName: string
  city: string
  initials?: string
  slug?: string
}

export default function ClubTile({ clubName, city, initials = 'ESP', slug }: ClubTileProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <ClubCrest slug={slug} initials={initials} />
      <span className="font-body text-[18px] font-bold text-navy text-center">{clubName}</span>
      <span className="font-body text-[15px] text-slate text-center">{city}</span>
    </div>
  )
}
