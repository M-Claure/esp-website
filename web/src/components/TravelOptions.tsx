import TravelColumn from './TravelColumn'
import { travelOptions, AGE_RULE } from '@/data/travel'

export default function TravelOptions() {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {travelOptions.map(option => (
          <TravelColumn key={option.title} {...option} />
        ))}
      </div>
      <p className="font-body text-[14px] font-semibold text-navy text-center m-0">{AGE_RULE}</p>
    </div>
  )
}
