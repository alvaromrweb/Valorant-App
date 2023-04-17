import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

export default function PlayerCard({profile, mmr}) {
  return (
    <div className="relative">
        <img src={profile.card.large} />
        <div className='absolute inset-x-0 top-[-1rem]'>
          <span className="text-lg py-1 px-3 rounded-lg bg-slate-900/75" style={{textShadow:'#000 0px 0 10px'}}>Lvl {profile.account_level}</span>
        </div>
        <h2 className="absolute inset-x-0 bottom-[35%] text-4xl font-bold ">{profile.name}</h2>
        <div className="absolute inset-x-0 bottom-[27%] flex justify-center items-center flex-col">
          <div className="w-10/12 bg-gray-200  h-2.5 dark:bg-gray-700 relative">
            <div className="bg-[#64C2A7] h-2.5 " style={{width: `${mmr.currentPoints}%`}}></div>
            <div 
              className="h-2.5 absolute top-0 opacity-50 pointsChange"
              style={{
                width: `${
                  mmr.pointsChangeLastGame > mmr.currentPoints ? 
                  mmr.currentPoints : 
                  Math.abs(mmr.pointsChangeLastGame)
                }%`, 
                backgroundColor: mmr.pointsChangeLastGame > 0 ? '#00684b' : '#ff4357',
                left: `${
                  mmr.pointsChangeLastGame > 0 ? 
                    mmr.pointsChangeLastGame > mmr.currentPoints ? 
                    0 :
                    mmr.currentPoints - Math.abs(mmr.pointsChangeLastGame)
                  : 
                  mmr.currentPoints
                }%`
              }}
            ></div>
            <Tooltip anchorSelect=".pointsChange" place="top">
              {mmr.pointsChangeLastGame > 0 ? `+${mmr.pointsChangeLastGame}` : mmr.pointsChangeLastGame}
            </Tooltip>
          </div>
          <span style={{textShadow:'#000 0px 0 10px'}}>{mmr.currentPoints} pts</span>
        </div>
        <div className="absolute inset-x-0 bottom-[15%] flex flex-col justify-center items-center gap-2 text-xl">
          <img className='rank' src={mmr.image} />
          <Tooltip anchorSelect=".rank" place="bottom">
            {mmr.rank}
          </Tooltip>
        </div>
    </div>
  )
}
