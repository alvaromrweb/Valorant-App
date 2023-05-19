import { createContext, useState, useEffect } from "react";
import { getAllProfileData } from "../services/profile";
import { changeWebFavicon, changeWebTitle, isValidNameTag } from "../helpers";

export const ProfileContext = createContext()

export function ProfileProvider ({ children }) {
    const [nameTag, setNameTag] = useState('')
    const [profile, setProfile] = useState({})
    const [profileMMRHistory, setProfileMMRHistory] = useState([])
    const [profileMatches, setProfileMatches] = useState([])
    const [recentSearches, setRecentSearches] = useState(() => {
      // Get from localstorage if exists
      const searchesFromStrage = window.localStorage.getItem('recentSearches')
      return searchesFromStrage ? JSON.parse(searchesFromStrage) : []
    })
    const [isWizen, setIsWizen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const resetProfile = () => {
        setNameTag('')
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
        if(nameTag) {
          if(!isValidNameTag(nameTag)) {
            setError('Invalid name#tag')
            return
          }
          setLoading(true)
          setError('')
          getAllProfileData(nameTag)
          .then(({account, MMRHistory, matches}) => {
            account.status === 200 ? setProfile(account.data) : setError(account.error[0].message)
            MMRHistory.status === 200 ? setProfileMMRHistory(MMRHistory.data) : setError(MMRHistory.error[0].message)
            matches.status === 200 ? setProfileMatches(matches.data) : setError(matches.error[0].message)

            if(account.status === 200 && MMRHistory.status === 200 && matches.status === 200) {
              // Save search in recent searches
              const recentSearch = {
                puuid: account.data.puuid,
                name: account.data.name,
                tag: account.data.tag,
                currenttier: MMRHistory.data[0].currenttier,
                dateSearch: Date.now()
              }
  
              if((recentSearches.filter(search => search.puuid === account.data.puuid)).length > 0) {
                // Update search if already exists in localstorage
                let newRecentSearches = recentSearches.map(search => {
                  return search.puuid === recentSearch.puuid ? recentSearch : search
                })
                newRecentSearches = newRecentSearches.sort((a, b) => b.dateSearch - a.dateSearch)
                setRecentSearches(newRecentSearches)
                window.localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches))
              } else {
                const newRecentSearches = [recentSearch].concat(recentSearches)
                setRecentSearches(newRecentSearches)
                window.localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches))
  
              }
  
              changeWebTitle(`${account.data.name}#${account.data.tag}`)
              // Wizen specific functionality
              const isWizenSync = account.data.puuid === import.meta.env.VITE_WIZEN_PUUID
              setIsWizen(isWizenSync)
              isWizenSync ? changeWebFavicon('/wizencara.jpg') : changeWebFavicon('/favicon.png')

            }
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
            recentSearches,
            isWizen,
            loading, 
            error, 
            setError,
            setNameTag, 
            resetProfile, 
            resetApp
        }}>
            {children}
        </ProfileContext.Provider>
    )
}