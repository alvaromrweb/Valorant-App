import 'react-tooltip/dist/react-tooltip.css'
import RankProgressBar from './RankProgressBar'
import RankImage from './RankImage'

export default function PlayerCard({profile, mmr}) {
  return (
    <div className="relative w-10/12 md:w-full mx-auto">
        <img className='w-full' src={profile.card.large} alt={`Card background of ${profile.name}`} />
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
          <RankImage 
            mmr={mmr} 
            uniqueSelector={'rankCard'}
            placeTooltip={'bottom'} 
          />
        </div>
    </div>
  )
}
