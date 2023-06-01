import PlayerCard from "./PlayerCard"
import MatchList from "./MatchList"
import { useContext, useEffect } from "react"
import { ProfileContext } from "../context/profile"
import { useParams } from "react-router-dom"
import ProfileSkeleton from "./ProfileSkeleton"

export default function Profile() {

  const {nametag} = useParams()
  const {profile, profileMMRHistory, profileMatches, setNameTag, loading, error} = useContext(ProfileContext)

  useEffect(() => {
    setNameTag(nametag)
  }, [nametag])

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center w-full mt-16 gap-5">
          {loading ? 
          <ProfileSkeleton /> : (

            error ? (
              <div className="border-2 border-red-700 bg-slate-900/90 text-4xl font-bold text-white py-6 px-10 mt-5">
                {error}
              </div>
            ) : (Object.keys(profile).length > 0 && profileMatches.length > 0 && profileMMRHistory.length > 0) && 
              <>
                <aside className="md:my-5">
                    <PlayerCard />
                </aside>
                <main className="w-full grow md:my-5">
                  <MatchList />
                </main>
              </>
          )
          }
          
      </div>
    </>
  )
}
