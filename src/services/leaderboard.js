import axios from 'axios';

export const getLeaderboard = async (region = "eu") => {
    try {
      const leaderboard = await axios.get(`${import.meta.env.VITE_DATA_API_URL}/v2/leaderboard/${region}`)
      return leaderboard
    } catch (error) {
      return Promise.reject(error);
    }
  }