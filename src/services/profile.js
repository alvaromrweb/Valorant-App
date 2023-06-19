import axios from 'axios';

export const getAllProfileData = async nameTag => {
    try {
      const nametagArr = nameTag.split('#')
      const nameTagObj = {name: nametagArr[0], tag: nametagArr[1]}
      const {data: account} = await axios.get(`${import.meta.env.VITE_DATA_API_URL}/v1/account/${encodeURI(nameTagObj.name)}/${encodeURI(nameTagObj.tag)}`)
      const [{data: MMRHistory}, {data: matches}] = await Promise.all([
        axios.get(`${import.meta.env.VITE_DATA_API_URL}/v1/by-puuid/mmr-history/${account.data.region}/${encodeURI(account.data.puuid)}`),
        axios.get(`${import.meta.env.VITE_DATA_API_URL}/v3/by-puuid/matches/${account.data.region}/${encodeURI(account.data.puuid)}?size=10`)
      ])
      return {account, MMRHistory, matches}
    } catch (error) {
      return Promise.reject(error);
    }
  }