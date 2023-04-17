import { useState } from "react"

export default function SearchForm({setNameTag, example = null}) {
  const [search, setSearch] = useState('')

  const handleSearch = e => {
    e.preventDefault()
    const searchArr = search.split('#')
    setNameTag({name: searchArr[0], tag: searchArr[1]})
  }
  
  return (
    <form className="mb-1/4  gap-5 w-11/12 md:w-1/2 text-left">
        <div className="w-full flex">
            <div className="w-3/5 md:w-3/4">
            <input type="text" id="search" placeholder="Buscar Nombre#Tag" className="rounded-l-lg shadow-lg bg-slate-900/75 text-white placeholder:text-gray-300 outline-none px-3 py-2 w-full" value={search} onChange={e => setSearch(e.target.value)} />
            {example && 
              <small className="text-gray-300 text-left cursor-pointer" onClick={e => setSearch(example)}>Por ejemplo: &quot;{example}&quot;</small>
            }
            
            </div>
            <div className="w-2/5 md:w-1/4">
                <button 
                type="submit" 
                className="w-full text-xl bg-white hover:bg-[#ff4357] text-slate-900 hover:text-white drop-shadow-lg transition-colors py-2 px-10  font-bold rounded flex justify-center gap-2 disabled:opacity-75"
                onClick={handleSearch}>
                  Buscar
                </button>
            </div>
        </div>
    </form>
  )
}
