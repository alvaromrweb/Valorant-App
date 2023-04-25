
export default function Spinner() {
  return (
    <>
        <div className='spinner'></div>

        <style jsx="true">{`
        .spinner {
        border: 4px solid rgba(0, 0, 0, .2);
        border-left-color: #0f172a;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        }
        @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
        }
        `}</style>
    </>
  )
}
