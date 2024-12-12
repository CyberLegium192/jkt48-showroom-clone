
import axios from 'axios';
const histortyLiveURL = 'https://api.crstlnz.my.id/api/recent?sort=date&page=1&filter=active&order=-1&perpage=12&search=&room_id=&group=jkt48&type=all'

// GET ALL DATA HISTORY LIVE
export const historyLive = async () => {
    const response = await axios.get(histortyLiveURL);
    return response.data.recents;
};


// FILTERING DATA 
export const filterHistoryLive = async (search, filterCategory) => {
    const response = await axios.get(
        `https://api.crstlnz.my.id/api/recent?sort=date&page=1&filter=active&order=-1&perpage=12&search=${search}&room_id=&group=jkt48&type=all`
    );
    const data = response.data.recents

    if (filterCategory == "gift") {
        return data.sort((a, b) => b.gift_rate * b.points - a.gift_rate * a.points)
    } else if(filterCategory == "duration"){
        return data.sort((a, b) => b.live_info.duration - a.live_info.duration)
    } else if(filterCategory == 'viewer'){
        return data.sort((a, b) => b.live_info.viewers.num - a.live_info.viewers.num)
    } else{
        return data
    }
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

