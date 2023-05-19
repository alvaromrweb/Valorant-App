import React from 'react'

export default function MatchSkeleton() {
  return (
    <div className='w-full min-h-[7.2rem] border border-l-8 border-slate-700 rounded py-4 px-5 flex flex-wrap justify-between items-center gap-3 md:gap-5 relative'>
        <div className="z-10 basis-full md:basis-auto 2xl:basis-40 flex flex-row md:flex-col gap-4 md:gap-0 items-center md:items-start justify-between md:justify-normal">
            <div className="w-20 h-7 rounded-full bg-slate-700 mt-2"></div>
            <div className="w-24 h-3.5 rounded-full bg-slate-700 mt-2"></div>
            <div className="w-24 md:w-36 h-3.5 rounded-full bg-slate-700 mt-2"></div>
        </div>
        <div className="z-10 basis-1/4 md:basis-auto 2xl:basis-20">
            <div className="w-16 h-16 rounded-full bg-slate-700 mx-auto"></div>
        </div>
        <div className="flex flex-col basis-1/4 md:basis-auto 2xl:basis-28 text-center z-10">
            <div className="text-gray-500 text-xl whitespace-nowrap">
                <div className="w-28 h-7 rounded-full bg-slate-700 mx-auto mt-2"></div>
            </div>
        </div>
        <div className="text-center z-10 basis-1/4 md:basis-auto 2xl:basis-20">
            <div className="w-16 h-7 rounded-full bg-slate-700 mx-auto mt-2"></div>
        </div>
        <div className="flex flex-col 2xl:px-5 text-center z-10 basis-1/4 md:basis-auto 2xl:basis-32">
            <div className="w-20 h-3.5 rounded-full bg-slate-700 mx-auto mt-2"></div>
            <div className="w-20 md:w-24 h-3.5 md:h-6 rounded-full bg-slate-700 mx-auto mt-2"></div>
        </div>
        <div className="w-32 hidden md:flex flex-col 2xl:basis-32 gap-2 z-10">
            <div className="flex justify-center">
                <div className="w-10 h-10 rounded-full bg-slate-700 mx-auto"></div>
            </div>
            <div className="w-32 h-2.5 rounded-full bg-slate-700 mx-auto"></div>
            <div className="w-12 h-3 rounded-full bg-slate-700 mx-auto"></div>
        </div>
        <div className="flex flex-col 2xl:basis-14 text-center z-10">
            <div className="w-14 h-3.5 rounded-full bg-slate-700 mx-auto mt-2"></div>
            <div className="w-14 h-3.5 rounded-full bg-slate-700 mx-auto mt-2"></div>
        </div>
        <div className="flex flex-col 2xl:basis-14 text-center z-10">
            <div className="w-14 h-3.5 rounded-full bg-slate-700 mx-auto mt-2"></div>
            <div className="w-14 h-3.5 rounded-full bg-slate-700 mx-auto mt-2"></div>
        </div>
        <div className="flex flex-col 2xl:basis-14 text-center z-10">
            <div className="w-14 h-3.5 rounded-full bg-slate-700 mx-auto mt-2"></div>
            <div className="w-14 h-3.5 rounded-full bg-slate-700 mx-auto mt-2"></div>
        </div>
    </div>
  )
}
