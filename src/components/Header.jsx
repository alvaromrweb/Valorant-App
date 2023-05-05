import SearchForm from "./SearchForm";

export default function Header() {
    return (
        <header className='w-full bg-slate-900 flex justify-between px-5 py-2'>
            <a href="/">
                <h2 className='text-2xl font-bold'>GG.EZ</h2>
            </a>
            {/* <nav className="flex">
                <li>Home</li>
                <li>Leaderboards</li>
            </nav> */}
            <div>
                {/* <SearchForm /> */}
            </div>
        </header>
    )
}