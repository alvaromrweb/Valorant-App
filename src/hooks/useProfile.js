import { useState, useEffect } from "react"
import { getAllProfileData } from "../services/profile"

export function useProfile ({ nameTag }) {

    const [profile, setProfile] = useState({})
    const [profileMMRHistory, setProfileMMRHistory] = useState([])
    const [profileMatches, setProfileMatches] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const resetProfile = () => {
        setProfile({})
        setProfileMMRHistory([])
        setProfileMatches([])
        setError('')
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

      return {profile, profileMMRHistory, profileMatches, loading, error, resetProfile}
}