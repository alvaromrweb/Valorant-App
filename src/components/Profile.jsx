import PlayerCard from "./PlayerCard"
import BackButton from "./BackButton"

export default function Profile({profile, profileMMRHistory, resetApp}) {
    const mmr = {
        rank: profileMMRHistory[0].currenttierpatched, 
        image: profileMMRHistory[0].images.small,
        currentPoints: profileMMRHistory[0].ranking_in_tier,
        pointsChangeLastGame: profileMMRHistory[0].mmr_change_to_last_game,
    }
  return (
    <div className="flex justify-center">
        <BackButton resetApp={resetApp} />
        <aside className="my-5">
            <PlayerCard profile={profile} mmr={mmr} />
        </aside>
        <main>

        </main>
    </div>
  )
}
