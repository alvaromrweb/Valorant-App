
export default function SearchForm() {
  return (
    <form className="mt-10  gap-5 w-11/12 md:w-1/2 text-left">
        <div className="w-full flex">
            <div className="w-3/5 md:w-3/4">
            <input type="text" id="search" placeholder="Buscar Nombre#Tag" className="rounded-l-lg  bg-white/10 text-white placeholder:text-gray-300 outline-none px-3 py-2 w-full" />
            <small className="text-gray-300 text-left cursor-pointer" onClick={e => setSearch('Mando Xbox Series X')}>Por ejemplo: &quot;Wizen#0000&quot;</small>
            </div>
            <div className="w-2/5 md:w-1/4">
                <button type="submit" className="w-full text-xl bg-[#ff4357] hover:bg-red-600 transition-colors py-2 px-10 text-white font-bold rounded flex justify-center gap-2 disabled:opacity-75">Buscar</button>
            </div>
        </div>
    </form>
  )
}
