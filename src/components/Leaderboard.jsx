import useLeaderboard from '../hooks/useLeaderboard'
import LeaderboardPlayer from './LeaderboardPlayer'
import LeaderboardSkeleton from './LeaderboardSkeleton'
import regions from "../data/regions";

export default function Leaderboard() {
  const {leaderboard, region, setRegion, loading, error} = useLeaderboard()
  
  return (
    <div className="flex flex-col md:flex-row justify-center w-full mt-10 md:mt-16 gap-5">
      <main className="max-w-5xl w-full bg-slate-900/90 py-5 px-4 rounded">
        
        <div className='flex justify-start gap-5 mb-4'>
          <select 
            value={region} 
            onChange={e => setRegion(e.target.value)}
            className='bg-slate-800 border border-gray-700 text-white rounded px-4 py-2 outline-none'
          >
            {regions.map(region => (
              <option value={region.value}>{region.name}</option>
            ))}
          </select>
        </div>

        {loading ? (
          <LeaderboardSkeleton />
        ) : (
          Object.keys(leaderboard).length > 0 && (
            <div className="flex flex-col  text-left gap-0.5">
              <header className='flex flex-wrap justify-between gap-2 md:gap-5 py-3 px-3 items-center bg-gray-500/10 text-slate-400 rounded-t text-xs md:text-base'>
                <div className='basis-8 md:basis-10 text-center'>
                    Rank
                </div>
                <div className='basis-6/12 md:basis-4/12 lg:basis-6/12'>
                    Player
                </div>
                <div className='basis-10 text-center'>
                    Tier
                </div>
                <div className='basis-6 md:basis-10 text-center'>
                    RR
                </div>
                <div className='basis-7 md:basis-10 text-center'>
                    Wins
                </div>
              </header>
              {leaderboard.players.map(player => (
                  <LeaderboardPlayer 
                    key={`${player.puuid}${player.PlayerCardID}`} 
                    player={player}
                  />
              ))}
            </div>
          )
        )}
      </main>
    </div>
  )
}
