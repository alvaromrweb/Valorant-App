import { useState, useEffect } from 'react';
import HenrikDevValorantAPI from 'unofficial-valorant-api';
import SearchForm from './components/SearchForm';
import Profile from './components/Profile';

const VAPI = new HenrikDevValorantAPI();

const getAllProfileData = async nameTag => {
  try {
    const [account, MMRHistory] = await Promise.all([
      VAPI.getAccount(nameTag),
      VAPI.getMMRHistory({...nameTag, region: 'eu'})
    ])
    return {account, MMRHistory}
  } catch (error) {
    return Promise.reject(error);
  }
}

function App() {
  const [nameTag, setNameTag] = useState({})
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState({})
  const [profileMMRHistory, setProfileMMRHistory] = useState([])

  const resetApp = () => {
    setNameTag({})
    setProfile({})
    setProfileMMRHistory([])
  }

  useEffect(() => {
    if(Object.keys(nameTag).length > 0) {
      setLoading(true)
      getAllProfileData(nameTag)
      .then(({account, MMRHistory}) => {
        account.status === 200 && setProfile(account.data)
        MMRHistory.status === 200 && setProfileMMRHistory(MMRHistory.data)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
    }
  }, [nameTag])

  return (
    <div className="bg-slate-900 text-white">
      <div className="bg-[url('/valorant-bg.jpg')] bg-slate-900 bg-cover bg-center">
        <div className="container flex flex-col justify-center items-center mx-auto text-center min-h-screen pb-5">
          {Object.keys(profile).length === 0 ? (
            <SearchForm 
              loading={loading}
              setNameTag={setNameTag} 
              example="Wizen#0000" 
            />
          ) : 
            <Profile 
              profile={profile} 
              profileMMRHistory={profileMMRHistory}
              resetApp={resetApp}
            />
          }
        </div>

      </div>
    </div>
  )
}

export default App
