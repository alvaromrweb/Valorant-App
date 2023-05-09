import { createContext, useState, useEffect } from "react";
import { getAllProfileData } from "../services/profile";
import { changeWebFavicon, changeWebTitle } from "../helpers";

export const ProfileContext = createContext()

export function ProfileProvider ({ children }) {
    const [nameTag, setNameTag] = useState({})
    const [profile, setProfile] = useState({})
    const [profileMMRHistory, setProfileMMRHistory] = useState([])
    const [profileMatches, setProfileMatches] = useState([])
    const [isWizen, setIsWizen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const resetProfile = () => {
        setNameTag({})
        setProfile({})
        setProfileMMRHistory([])
        setProfileMatches([])
        setError('')
      }

    const resetApp = () => {
        resetProfile()
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

            changeWebTitle(`Valorant GG EZ - ${account.data.name}`)
            // Wizen specific functionality
            const isWizenSync = account.data.puuid === import.meta.env.VITE_WIZEN_PUUID
            setIsWizen(isWizenSync)
            isWizenSync && changeWebFavicon('/wizencara.jpg')
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
        <ProfileContext.Provider value={{
            profile, 
            profileMMRHistory, 
            profileMatches, 
            isWizen,
            loading, 
            error, 
            setNameTag, 
            resetProfile, 
            resetApp
        }}>
            {children}
        </ProfileContext.Provider>
    )
}