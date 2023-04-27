import { formatMatches } from "../helpers"
import Match from "./Match"

export default function MatchList({profileMatches, MMRHistory, profileId, isWizen}) {
    const matches = formatMatches({matches: profileMatches, MMRHistory, profileId})

  return (
    <div className="flex flex-col gap-5 bg-slate-900/90 py-5 px-4 rounded text-left" data-testid="matchList">
        {matches.map(match => (
            <Match
                key={match.metadata.matchid}
                match={match}
                isWizen={isWizen}
            />
        ))}
    </div>
  )
}
