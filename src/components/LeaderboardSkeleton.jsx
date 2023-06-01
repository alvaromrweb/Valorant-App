import React from 'react'
import LeaderboardPlayerSkeleton from './LeaderboardPlayerSkeleton';

export default function LeaderboardSkeleton() {
  const skeletonPlayers = Array(99).fill(0);
  return (
      <div className="flex flex-col bg-slate-900/90 py-5 px-4 rounded text-left gap-0.5 ">
        <header className='bg-gray-500/10'>
            <div className='flex flex-wrap justify-between gap-2 md:gap-5 py-3 px-3 items-center animate-pulse text-slate-400 rounded-t text-xs md:text-base'>
                <div className='basis-8 md:basis-10 text-center'>
                    <div className="w-8 md:w-10 h-5 rounded-full bg-slate-700"></div>
                </div>
                <div className='basis-6/12 md:basis-4/12 lg:basis-6/12'>
                    <div className="w-16 h-5 rounded-full bg-slate-700"></div>
                </div>
                <div className='basis-10 text-center'>
                    <div className="w-10 h-5 rounded-full bg-slate-700"></div>
                </div>
                <div className='basis-6 md:basis-10 text-center'>
                    <div className="w-6 md:w-10 h-5 rounded-full bg-slate-700"></div>
                </div>
                <div className='basis-7 md:basis-10 text-center'>
                    <div className="w-7 md:w-10 h-5 rounded-full bg-slate-700"></div>
                </div>

            </div>
          </header>
          {skeletonPlayers.map((_, index) => <LeaderboardPlayerSkeleton key={index} />)}
      </div>
  )
}
