import TeamPlayerList from "./TeamPlayerList"

export default function MatchDetails({ match }) {
  return (
    <div id={`match-details-${match.metadata.matchid}`} className="w-full hidden">
        <div className="flex flex-col md:flex-row w-full gap-4">
            <TeamPlayerList match={match} team={"blue"} />
            <div className="flex items-center font-bold text-4xl justify-center ">
                VS
            </div>
            <TeamPlayerList match={match} team={"red"} />
        </div>
    </div>
  )
}
