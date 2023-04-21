import { getNumberWithOrdinal } from "../helpers"

export default function PlayerPosition({playerPosition}) {
    let bgColor = ''
    switch (playerPosition) {
        case 1:
            bgColor = 'bg-amber-500'
            break;
        case 2:
            bgColor = 'bg-slate-400'
            break;
        case 3:
            bgColor = 'bg-yellow-800'
            break;
        default:
            bgColor = 'bg-gray-500'
            break;
    }
      
  return (
    <span className={`rounded-full py-0.5 px-3 md:py-1 md:px-5 ${bgColor}`}>
        {playerPosition === 1 ? 'MVP' : getNumberWithOrdinal(playerPosition)}
    </span>
  )
}
