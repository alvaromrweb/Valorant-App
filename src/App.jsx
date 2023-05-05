import SearchForm from './components/SearchForm';
import Profile from './components/Profile';
import Header from './components/Header';
import { useContext } from 'react';
import { ProfileContext } from './context/profile';

function App() {
  
  const {profile, profileMMRHistory, profileMatches} = useContext(ProfileContext)

  return (
    <div className="bg-slate-900 text-white">
      <div className="bg-[url('/valorant-bg.jpg')] bg-slate-900 bg-fixed bg-cover bg-center">
        {/* <Header /> */}
        <div className="container flex flex-col md:justify-center items-center mx-auto text-center min-h-screen pb-5">
          {Object.keys(profile).length > 0 && profileMatches.length > 0 && profileMMRHistory.length > 0 ? 
            <Profile />
            : 
              <SearchForm 
                example={import.meta.env.VITE_PLAYER_EXAMPLE}
              />
          }
        </div>
      </div>
    </div>
  )
}

export default App
