import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import RankProgressBar from './RankProgressBar'

export default function PlayerCard({profile, mmr}) {
  return (
    <div className="relative">
        <img src={profile.card.large} />
        <div className='absolute inset-x-0 top-[-0.8rem]'>
          <span className="text-lg py-1 px-3 rounded-lg bg-slate-900/75" style={{textShadow:'#000 0px 0 10px'}}>Lvl {profile.account_level}</span>
        </div>
        <h2 className="absolute inset-x-0 bottom-[35%] text-4xl font-bold ">{profile.name}</h2>
        <div className="absolute inset-x-0 bottom-[27%] flex justify-center items-center flex-col">
          <div className='w-10/12'>
            <RankProgressBar mmr={mmr}>
              {mmr.ranking_in_tier} pts
            </RankProgressBar>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[15%] flex flex-col justify-center items-center gap-2 text-xl">
          <img className='rank' src={mmr.images.small} />
          <Tooltip anchorSelect=".rank" place="bottom">
            {mmr.currenttierpatched}
          </Tooltip>
        </div>
    </div>
  )
}
