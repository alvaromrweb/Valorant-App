import { Tooltip } from "react-tooltip"

export default function RankProgressBar({children, mmr}) {

    const {ranking_in_tier, mmr_change_to_last_game, match_id} = mmr

  return (
    <div className="text-center">
        {ranking_in_tier <= 100 &&
            <div className="w-full bg-gray-200  h-2.5 dark:bg-gray-700 relative ">
                <div className="bg-greenV h-2.5 " style={{width: `${ranking_in_tier}%`}}></div>
                <div 
                    className={`h-2.5 absolute top-0 opacity-50 pointsChange${match_id}`}
                    style={{
                    width: `${
                        mmr_change_to_last_game > ranking_in_tier ? 
                        ranking_in_tier : 
                        Math.abs(mmr_change_to_last_game)
                    }%`, 
                    backgroundColor: mmr_change_to_last_game > 0 ? 'white' : 'var(--color-red-valorant)',
                    left: `${
                        mmr_change_to_last_game > 0 ? 
                        mmr_change_to_last_game > ranking_in_tier ? 
                        0 :
                        ranking_in_tier - Math.abs(mmr_change_to_last_game)
                        : 
                        ranking_in_tier
                    }%`
                    }}
                ></div>
                <Tooltip anchorSelect={`.pointsChange${match_id}`} place="top">
                    {mmr_change_to_last_game > 0 ? `+${mmr_change_to_last_game}` : mmr_change_to_last_game}
                </Tooltip>
            </div>
        }
        <span style={{textShadow:'#000 0px 0 10px'}}>
            {children}
        </span>
    </div>
  )
}
