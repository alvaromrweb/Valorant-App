import { useState, useContext } from "react"
import Spinner from "./Spinner"
import { ProfileContext } from "../context/profile"
import RecentSearches from "./RecentSearches"
import { isValidNameTag } from "../helpers"
import { useNavigate } from "react-router-dom"

export default function SearchForm() {
  const [search, setSearch] = useState('')
  const [showRecentSearches, setShowRecentSearches] = useState(false)
  const {setNameTag, loading, error, setError} = useContext(ProfileContext)
  const example = import.meta.env.VITE_PLAYER_EXAMPLE
  const navigate = useNavigate()

  const handleSearch = (e = null, newSearch = null) => {
    e && e.preventDefault()
    const finalSearch = newSearch || search
    // const searchArr = newSearch ? newSearch.split('#') : search.split('#')
    if(isValidNameTag(finalSearch)) {
      // setNameTag(finalSearch)
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
    <form className="mt-[15%] md:mt-0 md:mb-[25%]  gap-5 w-11/12 md:w-1/2 text-left">
        <div className="w-full flex">
            <div className="w-9/12 md:w-3/4">
              <div className="relative" >
                <input 
                  type="text" 
                  id="search" 
                  autoComplete="off"
                  placeholder="Search Player Name#Tagline" 
                  className="rounded-l-lg drop-shadow-lg bg-slate-900/75 text-white placeholder:text-gray-300 outline-none px-3 py-2 w-full" 
                  value={search} 
                  onChange={e => setSearch(e.target.value)} 
                  onFocus={e => setShowRecentSearches(true)}
                  onBlur={handleBlur}
                />
                {showRecentSearches && (
                  <RecentSearches 
                    search={search} 
                    setSearch={setSearch} 
                    handleSearch={handleSearch}
                    setShowRecentSearches={setShowRecentSearches}
                  />
                )}
              </div>
              {example && 
                <small className="text-gray-300 text-left cursor-pointer hover:text-gray-100 transition-colors" style={{textShadow:'#000 0px 0 10px'}} onClick={e => setSearch(example)}>Example: &quot;{example}&quot;</small>
              }
              
            </div>
            <div className="w-3/12 md:w-1/4">
                <button 
                  type="submit" 
                  className="w-full md:text-xl bg-white hover:bg-[#ff4357] text-slate-900 hover:text-white drop-shadow-lg  rounded-r-lg transition-colors py-2 px-5  font-bold flex justify-center items-center gap-2 disabled:opacity-75 h-[40px]"
                  onClick={handleSearch}
                  disabled={loading}
                >
                  {loading ? 
                    <>
                      <span className="hidden 2xl:block">Searching...</span>
                      <Spinner /> 
                    </>
                    : 'Search'
                  }
                </button>
            </div>
        </div>
        {error && (
          <div className="border border-red-700 bg-slate-900/75 text-white py-3 px-5 mt-5" data-testid="error">{error}</div>
        )}
    </form>
  )
}
