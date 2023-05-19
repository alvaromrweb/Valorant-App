import HenrikDevValorantAPI from 'unofficial-valorant-api';
const VAPI = new HenrikDevValorantAPI();

export const getAllProfileData = async nameTag => {
    try {
      const nametagArr = nameTag.split('#')
      const nameTagObj = {name: nametagArr[0], tag: nametagArr[1]}
      const account = await VAPI.getAccount(nameTagObj)
      const [MMRHistory, matches] = await Promise.all([
        VAPI.getMMRHistory({...nameTagObj, region: account.data.region}),
        VAPI.getMatches({...nameTagObj, region: account.data.region, size: 10})
      ])
      return {account, MMRHistory, matches}
    } catch (error) {
      return Promise.reject(error);
    }
  }