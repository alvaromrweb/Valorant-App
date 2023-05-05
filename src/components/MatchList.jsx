import { formatMatches } from "../helpers"
import Match from "./Match"
import { useContext } from "react"
import { ProfileContext } from "../context/profile"

export default function MatchList() {
  const {profile, profileMatches, profileMMRHistory, isWizen} = useContext(ProfileContext)
    const matches = formatMatches({matches: profileMatches, MMRHistory: profileMMRHistory, profileId: profile.puuid})

  return (
    <div className="flex flex-col gap-5 bg-slate-900/90 py-5 px-4 rounded text-left" data-testid="matchList">
        {matches.map(match => (
            <Match
                key={match.metadata.matchid}
                match={match}
            />
        ))}
    </div>
  )
}
