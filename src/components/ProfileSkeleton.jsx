import MatchSkeleton from "./MatchSkeleton";

export default function ProfileSkeleton() {
    const skeletonMatches = Array(10).fill(0);
  return (
    <>
        <aside className="md:my-5  rounded-md">
            <div className='relative w-full mx-auto drop-shadow-lg bg-slate-900/90'>
                <div className="animate-pulse">
                    <div className="relative w-full mx-auto drop-shadow-lg">
                        <div className='h-28  md:w-[226px] md:h-[538px] border border-white/25 rounded-md'></div>
                    </div>
                    <div className='absolute inset-x-0 md:inset-x-0 top-[-0.8rem] '>
                        <div class="w-20 h-8 rounded-lg bg-slate-700 mx-auto"></div>
                    </div>
                    <div className="absolute inset-x-0 bottom-3 md:inset-x-0 md:bottom-[35%]">
                        <div class="w-32 h-4 rounded-full bg-slate-700  mx-auto"></div>
                    </div>
                    <div className="absolute right-4 inset-y-0 md:inset-y-auto md:right-0 md:inset-x-0 md:bottom-[12%] flex justify-center items-center">
                        <div className='w-10/12 flex flex-col-reverse md:flex-col items-center md:items-stretch gap-1 md:gap-0'>
                            <div className='hidden md:block text-xs md:text-base w-20 md:w-auto'>
                                <div class="w-44 h-4 rounded-full bg-slate-700 mx-auto"></div>
                                <div class="w-12 h-4 rounded-full bg-slate-700 mx-auto mt-2"></div>
                            </div>
                            <div className='flex justify-center md:mt-2 '>
                                <div class="w-16 h-16 rounded-full bg-slate-700 mx-auto"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
        <main className="w-full grow md:my-5 bg-slate-900/90 rounded">
            <div className="flex flex-col gap-5 py-5 px-4  animate-pulse text-left" data-testid="matchList">
                {skeletonMatches.map((_, index) => <MatchSkeleton key={index} />)}
            </div>
        </main>
    </>
  )
}
