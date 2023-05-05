import PlayerCard from "./PlayerCard"
import MatchList from "./MatchList"
import BackButton from "./BackButton"

export default function Profile() {

  return (
    <div className="flex flex-col md:flex-row justify-center w-full mt-16 md:mt-20 gap-5">
        <BackButton />
        <aside className="md:my-5">
            <PlayerCard />
        </aside>
        <main className="w-full grow md:my-5">
          <MatchList />
        </main>
    </div>
  )
}
