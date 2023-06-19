import { useState, useEffect } from "react";
import { getLeaderboard } from "../services/leaderboard";

export default function useLeaderboard () {
    const [leaderboard, setLeaderboard] = useState([])
    const [region, setRegion] = useState('eu')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setLoading(true)
        getLeaderboard(region).then(response => {
            if(response.status === 200) {
                setLeaderboard(response.data)
            } else {
                setError(response.error[0].message)
            }
        }).finally(() => {
            setLoading(false)
        })
    }, [region])

    return {leaderboard, region, setRegion, loading, error}
}