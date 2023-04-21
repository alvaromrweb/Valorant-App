import { useState, useEffect } from 'react';
import HenrikDevValorantAPI from 'unofficial-valorant-api';
import SearchForm from './components/SearchForm';
import Profile from './components/Profile';
import { changeWebFavicon, changeWebTitle } from './helpers';

const VAPI = new HenrikDevValorantAPI();

const getAllProfileData = async nameTag => {
  try {
    const account = await VAPI.getAccount(nameTag)
    const [MMRHistory, matches] = await Promise.all([
      VAPI.getMMRHistory({...nameTag, region: account.data.region}),
      VAPI.getMatches({...nameTag, region: account.data.region, size: 10})
    ])
    return {account, MMRHistory, matches}
  } catch (error) {
    return Promise.reject(error);
  }
}

function App() {
  const [nameTag, setNameTag] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [profile, setProfile] = useState({})
  const [profileMMRHistory, setProfileMMRHistory] = useState([])
  const [profileMatches, setProfileMatches] = useState([])

  const resetApp = () => {
    setNameTag({})
    setProfile({})
    setProfileMMRHistory([])
    setProfileMatches([])
    setError('')
    changeWebTitle('Valorant GG EZ')
    changeWebFavicon('/favicon.png')
  }

  useEffect(() => {
    if(Object.keys(nameTag).length > 0) {
      if(!nameTag.name || !nameTag.tag) {
        setError('Incorrect name#tag format')
        return
      }
      setLoading(true)
      setError('')
      getAllProfileData(nameTag)
      .then(({account, MMRHistory, matches}) => {
        account.status === 200 ? setProfile(account.data) : setError(account.error[0].message)
        MMRHistory.status === 200 ? setProfileMMRHistory(MMRHistory.data) : setError(MMRHistory.error[0].message)
        matches.status === 200 ? setProfileMatches(matches.data) : setError(matches.error[0].message)
      })
      .catch(err => {
        console.log(err)
        setError('Error trying to get account information')
      })
      .finally(() => {
        setLoading(false)
      })
    }
  }, [nameTag])

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
