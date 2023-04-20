import PlayerPosition from "./PlayerPosition"
import RankProgressBar from "./RankProgressBar"
import RankImage from "./RankImage"

export default function MatchList({profileMatches, MMRHistory, profileId, isWizen}) {
    let matches = profileMatches

    // Add variables to matches array that facilitate accesing the info
    matches = matches.map(match => {
        match.playerSelected = match.players.all_players.find(player => player.puuid === profileId) // Who is the player of the current profile
        match.players.all_players.sort((a, b) => b.stats.score - a.stats.score)
        match.winnerTeam = match.teams.red.has_won ? 'Red' : 'Blue' // Which team won
        match.playerWon = match.playerSelected.team === match.winnerTeam // If the player won
        let matchDate = new Date(match.metadata.game_start_patched)
        matchDate.setHours(matchDate.getHours() + 2); // Change timezone to Madrid
        match.matchHour = matchDate.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true }) // Format time
        match.matchDate = matchDate.toLocaleString('es-ES', {day: 'numeric', month: 'numeric', year: 'numeric' }) // Format date
        match.playerSelected.stats.kda = ((match.playerSelected.stats.kills * (match.playerSelected.stats.assists / 3)) / match.playerSelected.stats.deaths).toFixed(2) // Add KDA variable
        match.playerPosition = match.players.all_players.findIndex(player => player.puuid === profileId) + 1 // Player position in match
        match.mmr = MMRHistory.find(mmrItem => mmrItem.match_id === match.metadata.matchid) // Link mmrHistory match object with profileMatch
        match.playerSelected.damagePerCredits = Math.round(match.playerSelected.damage_made / (match.playerSelected.economy.spent.overall / 1000)) // Add damage per 1000 credits data calculation
        
        return match
    })

  return (
    <div className="flex flex-col gap-5 bg-slate-900/90 py-5 px-4 rounded text-left">
        {matches.map(match => (
            <article 
                className={`w-full border-l-8 rounded py-4 px-5 flex justify-between items-center gap-5 relative
                ${match.playerWon ? 'bg-[#64C2A7]/25 border-green-400' : 'bg-[#ff4357]/25 border-red-400'} 
                    ${isWizen && (match.playerWon ? "before:bg-[url('/wizencara.jpg')]" : "before:bg-[url('/wizencaragrito.jpg')]")} before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-30 before:bg-no-repeat
                `} 
                key={match.metadata.matchid}
            >
                <div className="z-10">
                    <p className={`font-bold text-xl ${match.playerWon ? 'text-green-400' : 'text-red-400'}`}>
                        {match.playerWon ? 'Victory' : 'Defeat'}
                    </p>
                    <p className="text-gray-300">{match.metadata.mode}</p>
                    <p className="text-gray-300">{match.matchHour} - {match.matchDate}</p>
                </div>
                
                <div>
                    <img className="w-[4.5rem]" src={match.playerSelected.assets.agent.small} />
                </div>
                <div className="flex flex-col  text-center">
                    <div className="text-gray-500 text-xl">
                        <span className="text-white font-bold">{match.playerSelected.stats.kills}</span> / {' '}
                        <span className="text-white font-bold">{match.playerSelected.stats.deaths}</span> / {' '}
                        <span className="text-white font-bold">{match.playerSelected.stats.assists}</span> 
                    </div>
                </div>
                <div className="text-center">
                    <PlayerPosition playerPosition={match.playerPosition} />
                </div>
                <div className="flex flex-col px-5 text-center">
                    <p className="text-gray-400">{match.metadata.map}</p>
                    <p className="text-2xl font-bold">{match.teams.red.rounds_won} : {match.teams.blue.rounds_won}</p>
                </div>
                <div className="w-32 flex flex-col gap-2 z-10">
                    {match.mmr ? (
                        <>
                            <div className="flex justify-center">
                                <RankImage mmr={match.mmr} size={'small'} />
                            </div>
                            <RankProgressBar mmr={match.mmr}>
                                {match.mmr.ranking_in_tier} pts
                            </RankProgressBar>
                        </>
                    ) : (
                        <div className=""></div>
                    )}
                </div>
                <div className="flex flex-col text-center">
                    <p className="text-gray-400">Score</p>
                    <span className="font-bold text-xl">{match.playerSelected.stats.score}</span>
                </div>
                <div className="flex flex-col text-center">
                    <p className="text-gray-400">Damage</p>
                    <span className="font-bold text-xl">{match.playerSelected.damage_made.toLocaleString()}</span>
                </div>
                <div className="flex flex-col text-center">
                    <p className="text-gray-400">Economy</p>
                    <span className="font-bold text-xl">{match.playerSelected.damagePerCredits > 0 ? match.playerSelected.damagePerCredits : '0'} </span>
                </div>
            </article>
        ))}
    </div>
  )
}
