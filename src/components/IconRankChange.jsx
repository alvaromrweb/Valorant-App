
export default function IconRankChange({change, size}) {
    const sizePixels = size === 'small' ? 10 : 16
  return (
    <div className={`rounded-full border-2 ${change === 'ascend' ? 'border-green-500' : 'border-red-500'}`}>
        {change === 'ascend' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={sizePixels} height={sizePixels} viewBox="0 0 24 24" strokeWidth="3" stroke="#00b341" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="6 15 12 9 18 15" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={sizePixels} height={sizePixels} viewBox="0 0 24 24" strokeWidth="3" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="6 9 12 15 18 9" />
            </svg>
        )}

    </div>
  )
}
