import HenrikDevValorantAPI from 'unofficial-valorant-api';
const VAPI = new HenrikDevValorantAPI();

export const getLeaderboard = async (region = "eu") => {
    try {
      const leaderboard = await VAPI.getLeaderboard({version:"v2", region})
      return leaderboard
    } catch (error) {
      return Promise.reject(error);
    }
  }