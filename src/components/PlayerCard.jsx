import 'react-tooltip/dist/react-tooltip.css'
import RankProgressBar from './RankProgressBar'
import RankImage from './RankImage'

export default function PlayerCard({profile, mmr}) {
  return (
    <div className="relative w-full mx-auto">
        <picture>
          <source media="(max-width: 768px)" srcset={profile.card.wide} />
          <source media="(min-width: 768px)" srcset={profile.card.large} />
          <img className='w-full' src={profile.card.large} alt={`Card background of ${profile.name}`} />
        </picture>
        
        <div className='absolute left-4 top-4 md:inset-x-0 md:top-[-0.8rem] '>
          <span className="text-sm md:text-lg py-1 px-3 rounded-lg bg-slate-900/75">Lvl {profile.account_level}</span>
        </div>
        <h2 className="absolute left-4 bottom-3 md:inset-x-0 md:bottom-[35%] text-2xl md:text-4xl font-bold " style={{textShadow:'#000 0px 0 10px'}}>
          {profile.name}
        </h2>
        <div className="absolute right-4 inset-y-0 md:inset-y-auto md:right-0 md:inset-x-0 md:bottom-[12%] flex justify-center items-center">
          <div className='w-10/12 flex flex-col-reverse md:flex-col items-center md:items-stretch'>
            <div className='hidden md:block'>
              <RankProgressBar mmr={mmr}>
                {mmr.ranking_in_tier} pts
              </RankProgressBar>
            </div>
            <div className='flex justify-center md:mt-2   md:w-auto'>
              <RankImage 
                mmr={mmr} 
                uniqueSelector={'rankCard'}
                placeTooltip={'bottom'} 
              />
            </div>
          </div>
        </div>
    </div>
  )
}
