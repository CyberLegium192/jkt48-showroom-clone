import axios from 'axios';
const url = 'https://jkt48-c9e60-default-rtdb.firebaseio.com'


const bulanMap = {
  januari: 0,
  februari: 1,
  maret: 2,
  april: 3,
  mei: 4,
  juni: 5,
  juli: 6,
  agustus: 7,
  september: 8,
  oktober: 9,
  november: 10,
  desember: 11,
};

// FETCHING NEWS DATA
export const fetchNews = async (PATH) => {
  const response = await axios.get(`${url}${PATH}`);
  const data = response.data;

  // Proses data untuk format yang diinginkan
  const formattedData = Object.values(data).map((item) => {
    const [tanggal, bulan, tahun] = item.time.split(" "); // Pisahkan string tanggal
    const monthIndex = bulanMap[bulan.toLowerCase()]; // Ambil indeks bulan dari bulanMap
    const timeStamp = new Date(tahun, monthIndex, tanggal).getTime(); // Konversi ke timestamp
    return {
      ...item,
      timeStamp, // Simpan timestamp untuk pengurutan
    };
  });

  // Urutkan berdasarkan timestamp dari terbaru ke terlama
  const sortedData = formattedData.sort((a, b) => b.timeStamp - a.timeStamp);

  return sortedData;
};

// FETCHING SCHEDULE DATA

export const fetchSchedule = async (PATH) => {
  const response = axios.get(`${import.meta.env.VITE_API_URL_DC}${PATH}`)
  return response
};


// YOUTUBE VIDEO 
export const youtubeData = async () => {
  const response = await axios.get("https://yt-api.p.rapidapi.com/channel/videos", {
    url: 'https://yt-api.p.rapidapi.com/channel/videos',
    params: {
      id: 'UCadv-UfEyjjwOPcZHc2QvIQ'
    },
    headers: {
      'x-rapidapi-key': '7684e90671msha4c9e8b0e96d257p1862e2jsnebe34a94e1fe',
      'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    }
  })
  return response.data.data
}