import { useContext } from "react"
import { ProfileContext } from "../context/profile"
import { getRankImageByTier, getElapsedTime } from "../helpers"

export default function RecentSearches ({search, setSearch, handleSearch, setShowRecentSearches}) {
    const {recentSearches} = useContext(ProfileContext)
    const handleClick = async recentSearch => {
        setSearch(`${recentSearch.name}#${recentSearch.tag}`)
        setShowRecentSearches(false)
        handleSearch(null, `${recentSearch.name}#${recentSearch.tag}`)
    }
  return (
    <div id="recent-searches" className="flex flex-col bg-slate-800 text-white  absolute top-full w-full rounded-lg max-h-[25rem] overflow-y-auto">
        {recentSearches.map(recentSearch => {
            if(((`${recentSearch.name}#${recentSearch.tag}`).toUpperCase()).startsWith(search.toUpperCase())) {
                return (
                    <div 
                        key={recentSearch.puuid} 
                        className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-600 transition-colors"
                        onMouseDown={() => handleClick(recentSearch)}
                    >
                        <div>
                            <img className="w-10" src={getRankImageByTier(recentSearch.currenttier)} alt={`Image of rank ${recentSearch.currenttier}`} />
                        </div>
                        <div>
                            {recentSearch.name}<span className="text-slate-400">#{recentSearch.tag}</span>
                        </div>
                        <div className="text-slate-500 text-xs">
                            {getElapsedTime(recentSearch.dateSearch, Date.now())}
                        </div>
                    </div>
                )
            }
        })}
    </div>
  )
}
