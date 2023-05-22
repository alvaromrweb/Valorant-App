import { useContext } from "react"
import { ProfileContext } from "../context/profile"
import { getRankImageByTier, getElapsedTime } from "../helpers"

export default function RecentSearches ({search, setSearch, handleSearch, setShowRecentSearches}) {
    const {recentSearches, deleteRecentSearch} = useContext(ProfileContext)
    const handleClick = async recentSearch => {
        setSearch(`${recentSearch.name}#${recentSearch.tag}`)
        setShowRecentSearches(false)
        handleSearch(null, `${recentSearch.name}#${recentSearch.tag}`)
    }

    const handleDelete = async recentSearch => {
        // Settimeout so that the blur event has time to get the clicked element here before it is deleted
        setTimeout(() => {
            deleteRecentSearch(recentSearch)
        }, 1); 
    }
  return (
    <div id="recent-searches"  className="flex flex-col bg-slate-800 text-white  absolute top-full w-full rounded-lg max-h-[25rem] overflow-y-auto">
        {recentSearches.map(recentSearch => {
            // Filter recent searches from current typed search
            if(((`${recentSearch.name}#${recentSearch.tag}`).toUpperCase()).startsWith(search.toUpperCase())) { 
                return (
                    <div 
                        key={recentSearch.puuid} 
                        className="flex items-center gap-2 px-3 py-2 rounded-lg  hover:bg-slate-600 transition-colors"
                    >
                        <div 
                            className="flex items-center cursor-pointer gap-2 flex-1"
                            onMouseDown={() => handleClick(recentSearch)}
                            tabIndex="0"
                        >
                            <div>
                                <img className="w-10" src={getRankImageByTier(recentSearch.currenttier)} alt={`Image of rank ${recentSearch.currenttier}`} />
                            </div>
                            <div>
                                {recentSearch.name}<span className="text-slate-400">#{recentSearch.tag}</span>
                            </div>
                            <div className="hidden md:block text-slate-500 text-xs">
                                {getElapsedTime(recentSearch.dateSearch, Date.now())}
                            </div>

                        </div>
                        <div 
                            className="text-slate-400 text-lg ml-auto hover:bg-slate-300/50 hover:text-white px-3 py-1 rounded-lg flex items-center cursor-pointer delete-recent-search"
                            tabIndex="0"
                            onMouseDown={() => handleDelete(recentSearch)}
                        >
                            ✕
                        </div>
                    </div>
                )
            }
        })}
    </div>
  )
}
