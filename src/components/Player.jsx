import PlayerPosition from "./PlayerPosition"

export default function Player({player, orientation}) {
  return (
    <div className={`flex justify-between px-3 py-2 ${orientation === 'right' && 'flex-row-reverse'} ${player.isCurrentProfile && 'bg-white/25'}`}>
        <div>
            <img className="w-6 max-w-fit" src={player.assets.agent.small} alt={`Image of agent ${player.character}`} />
        </div>
        <div>
            {player.name}<span className="text-gray-400">#{player.tag}</span>
        </div>
        <div>
            <div className="text-gray-500 whitespace-nowrap">
                <span className="text-white font-bold">{player.stats.kills}</span> / {' '}
                <span className="text-white font-bold">{player.stats.deaths}</span> / {' '}
                <span className="text-white font-bold">{player.stats.assists}</span> 
            </div>
        </div>
        <div>
            <PlayerPosition playerPosition={player.matchPosition} />
        </div>
        <div>
            {player.stats.score} 
        </div>
        <div>
            {player.damage_made} 
        </div>
    </div>
  )
}
