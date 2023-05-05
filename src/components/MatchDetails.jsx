import Player from "./Player"

export default function MatchDetails({ match }) {
  return (
    <div id={`match-details-${match.metadata.matchid}`} className="w-full hidden">
        <div className="flex flex-col md:flex-row w-full gap-4">
            <div className={`flex-1 flex flex-col gap-1 rounded ${match.teams.blue.has_won ? 'bg-[#64C2A7]/25' : 'bg-[#ff4357]/25'}`}>
                {match.players.all_players.map((player, index) => {
                    {return player.team === 'Blue' && (
                        <Player
                            key={player.puuid}
                            player={player}
                            orientation={'left'}
                        />
                    )}
                })}
            </div>
            <div className="flex items-center font-bold text-4xl justify-center ">
                VS
            </div>
            <div className={`flex-1 flex flex-col gap-1 rounded ${match.teams.red.has_won ? 'bg-[#64C2A7]/25' : 'bg-[#ff4357]/25'}`}>
                {match.players.all_players.map((player, index) => {
                    {return player.team === 'Red' && (
                        <Player
                            key={player.puuid}
                            player={player}
                            orientation={'right'}
                        />
                    )}
                })}
            </div>
        </div>
    </div>
  )
}
