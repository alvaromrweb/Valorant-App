import RankImage from './RankImage'
import { getNumberWithOrdinal, getPlayerCardImgById } from '../helpers'
import { Link } from 'react-router-dom'

export default function LeaderboardPlayer({player}) {
    
  return (
    <article className='bg-white/10 hover:bg-white/20 flex '>
        <Link 
            to={player.IsAnonymized ? '' : `/player/${encodeURIComponent(`${player.gameName}#${player.tagLine}`)}`}
            className='flex flex-wrap justify-between gap-2 md:gap-5 py-3 px-3 items-center w-full text-xs md:text-base'
        >
            <div className='basis-8 md:basis-10 text-center font-bold'>
                {getNumberWithOrdinal(player.leaderboardRank)}
            </div>
            <div className='basis-6/12 md:basis-4/12 lg:basis-6/12 flex items-center gap-2 md:gap-5 font-bold break-all'>
                <img 
                    src={getPlayerCardImgById(player.PlayerCardID)} 
                    alt={`Card image of player ${player.gameName}`} 
                    className='w-8 md:w-14'
                />
                <div>
                    {player.IsAnonymized ? (
                        <>
                            Secret Agent
                        </>
                    ) : (
                        <>
                            {player.gameName}<span className="text-gray-400">#{player.tagLine}</span>
                        </>
                    )}
                </div>
            </div>
            <div className='basis-10 text-center'>
                <RankImage 
                    mmr={{currenttier: player.competitiveTier}}
                    uniqueSelector={player.puuid}
                    size="small"
                />
            </div>
            <div className='basis-6 md:basis-10 text-center'>
                {player.rankedRating}
            </div>
            <div className='basis-7 md:basis-10 text-center'>
                {player.numberOfWins}
            </div>

        </Link>
    </article>
  )
}
