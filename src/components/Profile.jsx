import PlayerCard from "./PlayerCard"
import MatchList from "./MatchList"
import BackButton from "./BackButton"
import { changeWebFavicon, changeWebTitle } from "../helpers"

export default function Profile({profile, profileMMRHistory, profileMatches, resetApp}) {

    changeWebTitle(`Valorant GG EZ - ${profile.name}`)
    const isWizen = profile.puuid === "451817ec-bb49-5552-9456-9d5ec3064fae"
    isWizen && changeWebFavicon('/wizencara.jpg')

  return (
    <div className="flex flex-col md:flex-row justify-center w-full mt-16 md:mt-20 gap-5">
        <BackButton resetApp={resetApp} />
        <aside className="md:my-5">
            <PlayerCard 
              profile={profile} 
              mmr={profileMMRHistory[0]} 
            />
        </aside>
        <main className="w-full grow md:my-5">
          <MatchList 
            profileMatches={profileMatches} 
            MMRHistory={profileMMRHistory} 
            profileId={profile.puuid} 
            isWizen={isWizen}
          />
        </main>
    </div>
  )
}
