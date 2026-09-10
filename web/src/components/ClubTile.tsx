import MockCrest from './MockCrest'

interface ClubTileProps {
  clubName: string
  city: string
  initials?: string
}

export default function ClubTile({ clubName, city, initials = 'ESP' }: ClubTileProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <MockCrest initials={initials} />
      <span className="font-body text-[18px] font-bold text-navy text-center">{clubName}</span>
      <span className="font-body text-[15px] text-slate text-center">{city}</span>
    </div>
  )
}
