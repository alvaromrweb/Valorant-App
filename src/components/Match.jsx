import PlayerPosition from "./PlayerPosition"
import RankProgressBar from "./RankProgressBar"
import RankImage from "./RankImage"
import { getStylesForMatch } from "../helpers"
import { useContext } from "react"
import { ProfileContext } from "../context/profile"
import MatchDetails from "./MatchDetails"

export default function Match({match}) {
    const {isWizen} = useContext(ProfileContext)

    const toggleDetails = () => {
        const matchDetails = document.getElementById(`match-details-${match.metadata.matchid}`)
        matchDetails.classList.toggle("hidden");
    }

    return  (
        <>
        <article 
                className={`w-full min-h-[7.2rem] border-l-8 rounded py-4 px-5 flex flex-wrap justify-between items-center gap-3 md:gap-5 relative cursor-pointer ${getStylesForMatch(match, isWizen)}`} 
                onClick={() => toggleDetails()}
            >
                <div className="z-10 basis-full md:basis-auto flex flex-row md:flex-col gap-4 md:gap-0 items-center md:items-start justify-between md:justify-normal">
                    {!match.isDeathmatch && (
                        <p className={`font-bold md:text-xl ${match.isDraw ? 'text-slate-400' : match.playerWon ? 'text-green-400' : 'text-red-400'}`}>
                            {match.isDraw ? 'Draw' : (
                                match.playerWon ? 'Victory' : 'Defeat'
                            )}
                        </p>
                    )}
                    <p className="text-gray-300 text-xs md:text-base">{match.metadata.mode}</p>
                    <p className="text-gray-300 text-xs md:text-base">{match.matchHour} - {match.matchDate}</p>
                </div>
                
                <div className="z-10 basis-1/4 md:basis-auto">
                    <img className="w-12 md:w-[4.5rem] max-w-fit" src={match.playerSelected.assets.agent.small} alt={`Image of agent ${match.playerSelected.character}`} />
                </div>
                <div className="flex flex-col basis-1/4 md:basis-auto text-center z-10">
                    <div className="text-gray-500 text-xl whitespace-nowrap">
                        <span className="text-white font-bold">{match.playerSelected.stats.kills}</span> / {' '}
                        <span className="text-white font-bold">{match.playerSelected.stats.deaths}</span> / {' '}
                        <span className="text-white font-bold">{match.playerSelected.stats.assists}</span> 
                    </div>
                </div>
                <div className="text-center z-10 basis-1/4 md:basis-auto">
                    <PlayerPosition playerPosition={match.playerSelected.matchPosition} />
                </div>
                <div className="flex flex-col 2xl:px-5 text-center z-10 basis-1/4 md:basis-auto">
                    <p className="text-gray-400">{match.metadata.map}</p>
                    {!match.isDeathmatch && (
                        <p className="md:text-2xl font-bold">{match.teams.red.rounds_won} : {match.teams.blue.rounds_won}</p>
                    )}
                </div>
                <div className="w-32 hidden md:flex flex-col gap-2 z-10">
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
                <div className="flex flex-col text-center z-10">
                    <p className="text-gray-400">Score</p>
                    <span className="font-bold md:text-xl">{match.playerSelected.stats.score}</span>
                </div>
                <div className="flex flex-col text-center z-10">
                    <p className="text-gray-400">Damage</p>
                    <span className="font-bold md:text-xl">{match.playerSelected.damage_made.toLocaleString()}</span>
                </div>
                <div className="flex flex-col text-center z-10">
                    <p className="text-gray-400">Economy</p>
                    <span className="font-bold md:text-xl">{match.playerSelected.damagePerCredits > 0 ? match.playerSelected.damagePerCredits : '0'} </span>
                </div>
            </article>
            
            <MatchDetails match={match} />
        </>
    )
}