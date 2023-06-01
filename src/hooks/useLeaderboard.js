import { useState, useEffect } from "react";
import { getLeaderboard } from "../services/leaderboard";

export default function useLeaderboard () {
    const [leaderboard, setLeaderboard] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if(leaderboard.length === 0) {
            setLoading(true)
            getLeaderboard().then(response => {
                console.log(response)
                if(response.status === 200) {
                    const limitedPlayers = response.data.players.slice(0, 99)
                    let limitedLeaderboard = response.data
                    limitedLeaderboard.players = limitedPlayers
                    console.log(limitedLeaderboard)
                    setLeaderboard(limitedLeaderboard)
                } else {
                    setError(response.error[0].message)
                }
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [])

    return {leaderboard, loading, error}
}