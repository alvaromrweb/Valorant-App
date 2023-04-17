
export default function PlayerCard({profile, mmr}) {
  return (
    <div className="relative mt-5">
        <img src={profile.card.large} />
        <p className="absolute inset-x-0 top-4 text-lg ">Lvl {profile.account_level}</p>
        <h2 className="absolute inset-x-0 bottom-[30%] text-4xl font-bold ">{profile.name}</h2>
        <div className="absolute inset-x-0 bottom-[15%] flex flex-col justify-center items-center gap-2 text-xl">
          <img src={mmr.image} />
        </div>
    </div>
  )
}
