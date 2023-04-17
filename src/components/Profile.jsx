import PlayerCard from "./PlayerCard"

export default function Profile({profile, profileMMRHistory}) {
    const mmr = {
        rank: profileMMRHistory[0].currenttierpatched, 
        image: profileMMRHistory[0].images.small
    }
  return (
    <div className="flex justify-center">
        <aside>
            <PlayerCard profile={profile} mmr={mmr} />
        </aside>
        <main>
            
        </main>
    </div>
  )
}
