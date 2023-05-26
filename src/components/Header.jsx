import SearchForm from "./SearchForm";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { ProfileContext } from "../context/profile";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const {resetProfile} = useContext(ProfileContext)
    const isHome = location.pathname === '/'
    const navLinks = [
        {
            name: 'Home',
            link: '/'
        },
        // {
        //     name: 'Leaderboard',
        //     link: '/leaderboard'
        // },
    ]

    return (
        <header className='w-full bg-slate-900 px-5 py-2 drop-shadow-md relative z-20'>
            <div className="container flex flex-wrap mx-auto gap-4 md:gap-0 justify-between md:justify-normal">
                <div className="basis-2/12 flex items-center">
                    <NavLink to="/">
                        <h2 className='text-4xl font-bold'>
                            GG<span className="text-[#ff4357]">.</span>EZ
                        </h2>
                    </NavLink>
                </div>
                {/* Desktop menu */}
                <nav className="hidden md:flex basis-7/12 items-center">
                    <ul className="flex gap-5 items-center">
                        {navLinks.map(navLink => (
                            <li key={navLink.link}>
                                <NavLink
                                    to={navLink.link}
                                    className={({ isActive }) =>
                                        `pb-[11px] font-bold text-slate-400 text-xl hover:text-white ${isActive && 'text-white  border-b-4 border-[#ff4357]'}`
                                    }
                                    onClick={() => navLink.name === 'Home' && resetProfile() }
                                >
                                    {navLink.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Mobile menu */}
                <nav className="flex md:hidden">
                    <button 
                        type="button" 
                        class="inline-flex items-center  text-sm rounded-lg text-white "
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class={`${isMenuOpen ? 'absolute' : 'hidden'} w-full h-screen left-0 top-0 bg-slate-900`}>
                        <ul class="flex flex-col gap-5 px-3 py-2 text-center">
                            <li className="text-right">
                                <button 
                                    className="text-slate-400 text-2xl font-bold mr-4"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    ✕
                                </button>
                            </li>
                            {navLinks.map(navLink => (
                                <li key={navLink.link}>
                                    <NavLink
                                        to={navLink.link}
                                        className={({ isActive }) =>
                                            `font-bold text-slate-400 text-xl hover:text-white ${isActive && 'text-white'}`
                                        }
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {navLink.name}
                                    </NavLink>
                                </li>
                            ))}
                            <li className="w-11/12 mx-auto">
                                <SearchForm isOnSearchBar onSearchCallback={() => setIsMenuOpen(false)} />
                            </li>
                        </ul>
                    </div>
                </nav>
                {!isHome && (
                    <div className="hidden md:flex basis-3/12 justify-center items-center ">
                        <SearchForm isOnSearchBar />
                    </div>
                )}

            </div>
        </header>
    )
}