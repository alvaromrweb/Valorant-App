
export default function PlayerCard({playerData}) {
  return (
    <article className="p-5 relative">
        <img src={playerData.card.large} />
        <div className="absolute inset-x-0 top-0">
            <h1 className="text-3xl font-bold ">
            {playerData.name}
            </h1>
            <h3>Level {playerData.account_level}</h3>

        </div>
    </article>
  )
}
