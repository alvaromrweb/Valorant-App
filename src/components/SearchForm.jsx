import { useState } from "react"
import Spinner from "./Spinner"

export default function SearchForm({error, loading, setNameTag, example = null}) {
  const [search, setSearch] = useState('')

  const handleSearch = e => {
    e.preventDefault()
    const searchArr = search.split('#')
    setNameTag({name: searchArr[0], tag: searchArr[1]})
  }
  
  return (
    <form className="mb-[25%]  gap-5 w-11/12 md:w-1/2 text-left">
        <div className="w-full flex">
            <div className="w-3/5 md:w-3/4">
              <input type="text" id="search" placeholder="Buscar Nombre#Tag" className="rounded-l-lg drop-shadow-lg bg-slate-900/75 text-white placeholder:text-gray-300 outline-none px-3 py-2 w-full" value={search} onChange={e => setSearch(e.target.value)} />
              {example && 
                <small className="text-gray-300 text-left cursor-pointer" style={{textShadow:'#000 0px 0 10px'}} onClick={e => setSearch(example)}>Por ejemplo: &quot;{example}&quot;</small>
              }
              
            </div>
            <div className="w-2/5 md:w-1/4">
                <button 
                type="submit" 
                className="w-full text-xl bg-white hover:bg-[#ff4357] text-slate-900 hover:text-white drop-shadow-lg  rounded-r-lg transition-colors py-2 px-10  font-bold flex justify-center items-center gap-2 disabled:opacity-75 h-[40px]"
                onClick={handleSearch}>
                  {loading ? 
                    <Spinner /> 
                    : 'Buscar'
                  }
                </button>
            </div>
        </div>
        {error && (
          <div className="border border-red-700 bg-slate-900/75 text-white py-3 px-5 mt-5">{error}</div>
        )}
    </form>
  )
}
