import axios from 'axios';
import { Await } from 'react-router-dom';
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
  try {
    const response = await axios.get(`${url}${PATH}`);
    const data = response.data;

    const formattedData = Object.entries(data).map(([key, value]) => ({
      ...value, 
      firebaseId: key, 
    }));


    // Sort data berdasarkan tanggal terbaru (descending)
    const sortedData = formattedData.sort((a, b) => {
      const dateA = new Date(a.date.split("-").reverse().join("-")); // Format ke YYYY-MM-DD
      const dateB = new Date(b.date.split("-").reverse().join("-"));
      return dateB - dateA; // Sort descending berdasarkan tanggal
    });

    return sortedData;
  } catch (error) {
    console.error("Error fetching schedule:", error);
    return [];
  }
};














export const fecthSsk = async () => {
  const response = await axios.get("https://api.crstlnz.my.id/api/sousenkyo/members")
  return response.data
}

// https://www.youtube.com/watch?v=

