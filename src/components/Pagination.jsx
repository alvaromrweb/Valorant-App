
export default function Pagination({currentPage, paginationElements, paginateTo}) {
  return (
    <ul className='flex gap-2 font-bold text-xs lg:text-lg'>
      <li>
        <button
          className="disabled:opacity-50 px-3 py-2 lg:py-1 rounded-full  transition-colors enabled:hover:bg-white/10"
          disabled={currentPage === 1}
          onClick={() => paginateTo(parseInt(currentPage) - 1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left  w-4 h-4 lg:h-8" viewBox="0 0 24 24" strokeWidth="3" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </button>
      </li>
      {paginationElements.map((element, index) => (
        <li key={element + index}>
          <button 
            className={`${currentPage === element && 'bg-white/30'} disabled:opacity-50 px-3 py-2 lg:py-1 rounded-full transition-colors enabled:hover:bg-white/10`}
            disabled={element === '...'}
            onClick={() => paginateTo(element)}
          >{element}</button>
        </li>
      ))}
      <li>
        <button 
          className="disabled:opacity-50 px-3 py-2 lg:py-1 rounded-full transition-colors enabled:hover:bg-white/10"
          disabled={paginationElements.at(-1) === currentPage}
          onClick={() => paginateTo(parseInt(currentPage) + 1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right  w-4 h-4 lg:h-8" viewBox="0 0 24 24" strokeWidth="3" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </button>
      </li>
    </ul>
  )
}
