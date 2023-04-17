import { useState, useEffect } from 'react';
import HenrikDevValorantAPI from 'unofficial-valorant-api';
import SearchForm from './components/SearchForm';

const VAPI = new HenrikDevValorantAPI();

function App() {
  const [search, setSearch] = useState({})
  const [profile, setProfile] = useState({})
  const [profileMMRHistory, setProfileMMRHistory] = useState([])

  useEffect(() => {
    VAPI.getAccount({name: "eagle", tag: "7853"})
    .then((data) => setProfile(data.data))
    .catch(err => {
      console.log(err);
    })
  }, [])

  useEffect(() => {
    if(Object.keys(profile).length > 0) {
      VAPI.getMMRHistoryByPUUID({region: 'eu', puuid: profile.puuid})
      .then((data) => setProfileMMRHistory(data.data))
      .catch(err => {
        console.log(err);
      })
    }
  }, [profile])
  
  

  return (
    <main className="bg-[url('/valorant-bg.jpg')] text-white">
      <div className="container mx-auto text-center min-h-screen pb-5">
        <div className="flex flex-col justify-center items-center ">
          <SearchForm />
        </div>
      </div>
    </main>
  )
}

export default App
