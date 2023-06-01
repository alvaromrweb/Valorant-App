
export default function LeaderboardPlayerSkeleton() {
  return (
    <div className='bg-white/10'>
        <div className='flex flex-wrap animate-pulse justify-between gap-2 md:gap-5 py-3 px-3 items-center w-full'>
            <div className='basis-8 md:basis-10 text-center font-bold'>
                <div className="w-8 md:w-10 h-5 rounded-full bg-slate-700"></div>
            </div>
            <div className='basis-6/12 md:basis-4/12 lg:basis-6/12 flex items-center gap-2 md:gap-5 font-bold break-all'>
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-slate-700"></div>
                <div>
                    <div className="w-24 md:w-40 h-5 rounded-full bg-slate-700"></div>
                </div>
            </div>
            <div className='basis-10 text-center'>
                <div className="w-10 h-10 rounded-full bg-slate-700"></div>
            </div>
            <div className='basis-6 md:basis-10 text-center'>
                <div className="w-6 md:w-10 h-5 rounded-full bg-slate-700"></div>
            </div>
            <div className='basis-7 md:basis-10 text-center'>
                <div className="w-7 md:w-10 h-5 rounded-full bg-slate-700"></div>
            </div>
        </div>
    </div>
  )
}
