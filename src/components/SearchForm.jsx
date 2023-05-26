import { useState, useContext } from "react"
import { ProfileContext } from "../context/profile"
import RecentSearches from "./RecentSearches"
import { isValidNameTag } from "../helpers"
import { useNavigate } from "react-router-dom"
import { Tooltip } from "react-tooltip"

export default function SearchForm({withExample = false, isOnSearchBar = false, onSearchCallback = () => {}}) {
  const [search, setSearch] = useState('')
  const [showRecentSearches, setShowRecentSearches] = useState(false)
  const [error, setError] = useState('')
  const {loading} = useContext(ProfileContext)
  const example = withExample ? import.meta.env.VITE_PLAYER_EXAMPLE : null
  const navigate = useNavigate()

  const handleSearch = (e = null, newSearch = null) => {
    e && e.preventDefault()
    const finalSearch = newSearch || search
    if(isValidNameTag(finalSearch)) {
      setError('')
      setSearch('')
      onSearchCallback()
      navigate(`/player/${encodeURIComponent(finalSearch)}`)
    } else {
      setError('Invalid name#tag')
    }
  }

  const handleBlur = e => {
    if(!e.relatedTarget?.classList?.contains('delete-recent-search')) {
      setShowRecentSearches(false)
    }
  }
  
  return (
    <form className="w-full" onSubmit={handleSearch}>
        <div className="w-full flex flex-wrap relative">
            <div className="w-9/12 md:w-3/4">
                <input 
                  type="text" 
                  id="search" 
                  autoComplete="off"
                  placeholder="Search Player Name#Tagline" 
                  className={`rounded-l-lg drop-shadow-lg outline-none px-3 py-2 w-full max-h-10
                  ${isOnSearchBar ? 'bg-slate-200 text-slate-900 placeholder:text-slate-800' : 'bg-slate-900/75 text-white placeholder:text-gray-300'}
                  ${error && 'border-2 border-red-700'}
                  `}
                  value={search} 
                  onChange={e => setSearch(e.target.value)} 
                  onFocus={e => setShowRecentSearches(true)}
                  onBlur={handleBlur}
                />  
                {isOnSearchBar && (
                  <Tooltip 
                    anchorSelect="#search"
                    place='bottom'
                    isOpen={error}
                    className="bg-slate-900 border-2 border-red-700 text-lg font-bold"
                    classNameArrow="border-t-2 border-l-2 border-red-700 !top-[-5px]"
                  >
                    {error}
                  </Tooltip>            
                )}
            </div>
            <div className="w-3/12 md:w-1/4">
                <button 
                  type="submit" 
                  className={`w-full  drop-shadow-lg  rounded-r-lg transition-colors py-2 px-5  font-bold flex justify-center items-center gap-2 disabled:opacity-75 h-[40px]
                  ${isOnSearchBar ? 'bg-slate-800 hover:bg-[#ff4357] text-white md:text-lg' : 'bg-white hover:bg-[#ff4357] text-slate-900 hover:text-white md:text-xl'}
                  `}
                  disabled={loading}
                >
                  Search
                </button>
            </div>
            {showRecentSearches && (
              <div className="absolute w-full top-[40px] z-20">
                <RecentSearches 
                  search={search} 
                  setSearch={setSearch} 
                  handleSearch={handleSearch}
                  setShowRecentSearches={setShowRecentSearches}
                />
              </div>
            )}
            {example && 
              <div className="w-full text-left">
                  <small className="text-gray-300 cursor-pointer hover:text-gray-100 transition-colors" style={{textShadow:'#000 0px 0 10px'}} onClick={e => setSearch(example)}>Example: &quot;{example}&quot;</small>
              </div>
            }
            
        </div>
        {error && !isOnSearchBar && (
          <div className="border-2 border-red-700 bg-slate-900/90 text-white font-bold text-lg drop-shadow py-3 px-5 mt-5" data-testid="error">
            {error}
          </div>
        )}
    </form>
  )
}
