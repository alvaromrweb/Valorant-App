import Player from "./Player"

export default function TeamPlayerList({match, team = null}) {
  return (
    <div 
        className={`flex-1 flex flex-col rounded 
        ${match.isDeathmatch ? 'bg-slate-300/25' : match.teams[team].has_won ? 'bg-greenV/25' : 'bg-redV/25'}
        `}
    >
        <div className={`flex gap-2 items-center text-center text-slate-300 bg-slate-800 text-sm px-3 py-2`}>
            <div className={`basis-2/12 md:basis-1/12 font-bold ${match.isDraw ? 'text-slate-400' : match.teams[team].has_won ? 'text-greenV' : 'text-redV'}`}>
                {!match.isDeathmatch && (
                    match.isDraw ? 'Draw' : (
                        match.teams[team].has_won ? 'Victory' : 'Defeat'
                    )
                )}
            </div>
            <div className="basis-4/12 md:basis-3/12">
                Player
            </div>
            <div className="basis-3/12 md:basis-2/12">
                KDA
            </div>
            <div className="basis-3/12 md:basis-2/12">
                Position
            </div>
            <div className="basis-2/12 md:basis-1/12">
                Rank
            </div>
            <div className="basis-1/12 hidden md:block">
                Score
            </div>
            <div className="basis-1/12 hidden md:block">
                Dmg
            </div>
            <div className="basis-1/12 hidden md:block">
                HS
            </div>
        </div>

        {match.players.all_players.map(player => {
            if(match.isDeathmatch) {
                return (
                <Player
                    key={player.puuid}
                    player={player}
                />
                )
            } else if(player.team.toUpperCase() === team.toUpperCase()) {
                return (
                    <Player
                        key={player.puuid}
                        player={player}
                    />
                )
            }
        })}
    </div>
  )
}
