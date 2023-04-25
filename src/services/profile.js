import HenrikDevValorantAPI from 'unofficial-valorant-api';
const VAPI = new HenrikDevValorantAPI();

export const getAllProfileData = async nameTag => {
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