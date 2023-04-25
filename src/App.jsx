import { useState } from 'react';
import SearchForm from './components/SearchForm';
import Profile from './components/Profile';
import { changeWebFavicon, changeWebTitle } from './helpers';
import { useProfile } from './hooks/useProfile';

function App() {
  const [nameTag, setNameTag] = useState({})
  const {profile, profileMMRHistory, profileMatches, loading, error, resetProfile} = useProfile({nameTag})

  const resetApp = () => {
    setNameTag({})
    resetProfile()
    changeWebTitle('Valorant GG EZ')
    changeWebFavicon('/favicon.png')
  }

  return (
    <div className="bg-slate-900 text-white">
      <div className="bg-[url('/valorant-bg.jpg')] bg-slate-900 bg-fixed bg-cover bg-center">
        <div className="container flex flex-col md:justify-center items-center mx-auto text-center min-h-screen pb-5">
          {Object.keys(profile).length > 0 && profileMatches.length > 0 && profileMMRHistory.length > 0 ? 
            <Profile 
              profile={profile} 
              profileMMRHistory={profileMMRHistory}
              profileMatches={profileMatches}
              resetApp={resetApp}
            />
            : 
              <SearchForm 
                loading={loading}
                error={error}
                setNameTag={setNameTag} 
                example="Wizen#0000" 
              />
          }
        </div>
      </div>
    </div>
  )
}

export default App
