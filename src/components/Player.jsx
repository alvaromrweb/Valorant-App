import PlayerPosition from "./PlayerPosition"
import RankImage from "./RankImage"

export default function Player({player}) {
  return (
    <div className={`flex items-center text-sm px-3 py-2 gap-2 ${player.isCurrentProfile && 'bg-white/25'}`}>
        <div className="basis-1/12 md:basis-1/12">
            <img className={`w-8 max-w-fit`} src={player.assets.agent.small} alt={`Image of agent ${player.character}`} />
        </div>
        <div className="basis-5/12 md:basis-3/12 text-xs md:text-sm break-all">
            <p>{player.name}<span className="text-gray-400">#{player.tag}</span></p>
        </div>
        <div className="basis-3/12 md:basis-2/12 text-center">
            <div className="text-gray-500 whitespace-nowrap">
                <span className="text-white font-bold">{player.stats.kills}</span> / {' '}
                <span className="text-white font-bold">{player.stats.deaths}</span> / {' '}
                <span className="text-white font-bold">{player.stats.assists}</span> 
            </div>
        </div>
        <div className="basis-3/12 md:basis-2/12 text-center">
            <PlayerPosition playerPosition={player.matchPosition} />
        </div>
        <div className="basis-2/12 md:basis-1/12 flex justify-center">
            <RankImage 
                mmr={{currenttier: player.currenttier, currenttierpatched: player.currenttier_patched}}
                uniqueSelector={player.puuid}
                size="small"
            />
        </div>
        <div className="basis-1/12 hidden md:block text-center">
            {player.stats.score} 
        </div>
        <div className="basis-1/12 hidden md:block text-center">
            {player.damage_made} 
        </div>
        <div className="basis-1/12 hidden md:block text-center">
            {player.headshotPercent || 0}%
        </div>
    </div>
  )
}
