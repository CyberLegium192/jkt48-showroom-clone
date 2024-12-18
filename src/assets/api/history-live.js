
import axios from 'axios';
const histortyLiveURL = 'https://api.crstlnz.my.id/api/recent?sort=date&page=1&filter=active&order=-1&perpage=30&search=&room_id=&group=jkt48&type=all'

// GET ALL DATA HISTORY LIVE
export const historyLive = async () => {
    const response = await axios.get(histortyLiveURL);
    return response.data.recents;
};


// FILTERING DATA 
export const filterHistoryLive = async (search, filterCategory, isSort, statusMem) => {
    const api_url = `https://api.crstlnz.my.id/api/recent?sort=${filterCategory}&page=1&perpage=20&filter=${statusMem}&order=${isSort ? "-1" : "1"}&search=${search}&group=jkt48&type=all`
    const response = await axios.get(api_url);
    const data = response.data.recents
    return data
};

// SHOWROOM ONLIVE 
export const onLiveShowroom = async () => {
    const response = await axios.get('https://sorum-mobile.vercel.app/api/rooms/onlives')
    return response.data
}
// IDN ONLIVE
export const onLiveIdn = async () => {
    const response = await axios.get('https://api.crstlnz.my.id/api/idn_lives')
    return response.data
}


// DETAIL MEMBER LIVE
export const detailLive = async (data_id) => {
    const response = await axios.get(`https://api.crstlnz.my.id/api/recent/${data_id}`)
    return response.data
}

