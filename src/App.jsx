import { useState, useEffect } from 'react';
import HenrikDevValorantAPI from 'unofficial-valorant-api';
import SearchForm from './components/SearchForm';

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
  const [nameTag, setNameTag] = useState({name: '', tag: ''})
  const [profile, setProfile] = useState({})
  const [profileMMRHistory, setProfileMMRHistory] = useState([])

  useEffect(() => {
    if(nameTag.name && nameTag.tag) {
      getAllProfileData(nameTag)
      .then(({account, MMRHistory}) => {
        account.status === 200 && setProfile(account.data)
        MMRHistory.status === 200 && setProfileMMRHistory(MMRHistory.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }, [nameTag])

  return (
    <main className="bg-slate-900 text-white">
      <div className="bg-[url('/valorant-bg.jpg')] backdrop-opacity-60 backdrop-invert bg-white/30">
        <div className="container flex flex-col justify-center items-center mx-auto text-center min-h-screen pb-5">
            <SearchForm setNameTag={setNameTag} example="Wizen#0000" />
        </div>

      </div>
    </main>
  )
}

export default App
