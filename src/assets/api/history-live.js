
const histortyLiveURL = 'https://api.crstlnz.my.id/api/recent?sort=date&page=1&filter=active&order=-1&perpage=12&search=&room_id=&group=jkt48&type=all'


import axios from 'axios';




export const historyLive = async (search = "") => {
    const response = await axios.get(histortyLiveURL);
    return response.data.recents;
};


export const filterHistoryLive = async (search = "") => {
    const response = await axios.get(
        `https://api.crstlnz.my.id/api/recent?sort=date&page=1&filter=active&order=-1&perpage=12&search=${search}&room_id=&group=jkt48&type=all`
    );
    return response.data;
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

