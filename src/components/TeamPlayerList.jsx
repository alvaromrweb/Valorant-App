import Player from "./Player"

export default function TeamPlayerList({match, team}) {
  return (
    <div className={`flex-1 flex flex-col gap-1 rounded ${match.teams[team].has_won ? 'bg-[#64C2A7]/25' : 'bg-[#ff4357]/25'}`}>
        <div className={`flex items-center text-center text-slate-300 bg-slate-800 text-sm px-3 py-2`}>
            <div className={`basis-1/12 font-bold ${match.isDraw ? 'text-slate-400' : match.teams[team].has_won ? 'text-[#64C2A7]' : 'text-[#ff4357]'}`}>
                {match.isDraw ? 'Draw' : (
                    match.teams[team].has_won ? 'Victory' : 'Defeat'
                )}
            </div>
            <div className="basis-3/12">
                Player
            </div>
            <div className="basis-2/12">
                KDA
            </div>
            <div className="basis-2/12">
                Position
            </div>
            <div className="basis-1/12">
                Rank
            </div>
            <div className="basis-1/12">
                Score
            </div>
            <div className="basis-1/12">
                Dmg
            </div>
            <div className="basis-1/12">
                HS
            </div>
        </div>

        {match.players.all_players.map(player => {
            {return player.team.toUpperCase() === team.toUpperCase() && (
                <Player
                    key={player.puuid}
                    player={player}
                />
            )}
        })}
    </div>
  )
}
