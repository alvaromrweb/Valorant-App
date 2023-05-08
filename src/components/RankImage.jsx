import { Tooltip } from "react-tooltip"
import { hasRankDivisionChanged } from "../helpers"
import IconRankChange from "./IconRankChange"

export default function RankImage({mmr, uniqueSelector = mmr.match_id, placeTooltip = 'top', size = 'full'}) {
    const rankImage = `https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/${mmr.currenttier}/smallicon.png`
    let rankDivisionChange
    const rankDivisionChanged = hasRankDivisionChanged(mmr)
    if(rankDivisionChanged) {
        rankDivisionChange = mmr.mmr_change_to_last_game > 0 ? 'ascend' : 'descend'
    }

  return (
    <div className="relative">
        <img className={`rank${uniqueSelector} ${size === 'small' && 'w-10'} drop-shadow-lg`} src={rankImage} alt={`Image of rank ${mmr.currenttierpatched}`} />
        {rankDivisionChanged && 
            <div className="absolute bottom-0 right-0">
                <IconRankChange change={rankDivisionChange} size={size} />
            </div>
        }
        <Tooltip anchorSelect={`.rank${uniqueSelector}`} place={placeTooltip}>
            {mmr.currenttierpatched}
        </Tooltip>
    </div>
  )
}
