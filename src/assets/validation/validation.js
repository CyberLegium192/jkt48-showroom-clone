const ramune = 'https://res.cloudinary.com/dkkagbzl4/image/upload/v1716812243/setlist/cazjd2xk45ntxftjybhv.jpg';
const pajamaDrive = 'https://res.cloudinary.com/dkkagbzl4/image/upload/v1717156997/setlist/r40ua7rwq9t7tugspbjr.jpg';
const inginBertemu = 'https://res.cloudinary.com/haymzm4wp/image/upload/v1709798080/sd6phsgm0vglnznpdjnl.jpg';
const aturanAntiCinta = 'https://res.cloudinary.com/haymzm4wp/image/upload/v1709811057/hjsfgaw0kf3fhxg677fs.jpg';
const tunasDibalikSeragam = 'https://res.cloudinary.com/haymzm4wp/image/upload/v1709812617/nixxkdomj5rmq6ewmrm8.png';

// FILTER IMAGE COVER SCHEDULE THEATER
const posters = {
    "cara meminum ramune": {
        description: "Pernahkah kamu meminum Ramune? Meskipun tidak bisa diminum sekaligus, tapi Ramune tetap dapat kita rasakan kesegarannya dalam setiap tetesnya. Seperti nikmatnya Ramune tersebut, para member JKT48 New Era siap untuk memberikanmu keceriaan dan semangat baru, melalui setiap lagu yang ada di dalam setlist Cara Meminum Ramune (Ramune no Nomikata) ini.",
        urlCover: ramune
    },
    "pajama drive": {
        description: "Dengan penuh semangat dan keceriaan, Trainee JKT48 siap membawakan pertunjukan legendaris, yang pertama kali dibawakan pada tahun 2012 oleh Generasi 1 JKT48. Seperti apakah penampilan yang akan ditunjukkan oleh para generasi penerus? Mari bersama-sama rasakan energi yang luar biasa dari para Trainee JKT48!",
        urlCover: pajamaDrive
    },
    "ingin bertemu": {
        description: "Manis dan pahitnya sebuah pertemuan akan dapat kalian rasakan melalui pertunjukan “Ingin Bertemu” yang dipersembahkan oleh JKT48 Trainee Generasi 11",
        urlCover: inginBertemu
    },
    "aturan anti cinta": {
        description: "Satu lagi setlist yang dinanti dari JKT48 kini telah kembali. Seperti apakah warna dari para member JKT48 New Era ini pada saat membawakannya? Tentunya pertunjukan dengan penuh sisi energik dan perasaan dari member di setiap lagunya akan menggetarkan hatimu.",
        urlCover: aturanAntiCinta
    },
    "tunas di balik seragam": {
        description: "Satu lagi setlist yang dinanti dari JKT48 kini telah kembali. Seperti apakah warna dari para member JKT48 New Era ini pada saat membawakannya? Tentunya pertunjukan dengan penuh sisi energik dan perasaan dari member di setiap lagunya akan menggetarkan hatimu.",
        urlCover: tunasDibalikSeragam
    }
};

export const imagePosterTheater = (item) => {
    const result = posters[item.toLowerCase()];
    return result || "URL tidak ditemukan";
};



// validation themes news
const hasil = {
    "/images/icon.cat1.png": {
        title: "theater",
        badgeBg: "bg-red-600",
        hoverBg: 'hover:bg-red-800'
    },
    "/images/icon.cat2.png": {
        title: "event",
        badgeBg: "bg-blue-600",
        hoverBg: 'hover:bg-blue-800'
    },
    "/images/icon.cat5.png": {
        title: "birthday",
        badgeBg: "bg-green-600",
        hoverBg: 'hover:bg-green-800'
    },
    "/images/icon.cat8.png": {
        title: "other",
        badgeBg: "bg-black",
        hoverBg: 'hover:bg-slate-800'
    },
    
};
export const validateThemeNews = (item) => {
    const result = hasil[item.toLowerCase()];
    return result || "tema ada";
}


/**
 * Validasi apakah jadwal sudah lewat atau masih akan datang.
 * @param {string} date - Tanggal dalam format "DD-MM-YYYY".
 * @param {string} time - Waktu dalam format "HH:mm".
 * @returns {boolean} - `true` jika jadwal sudah lewat, `false` jika belum.
 */
export const isPastSchedule = (date, time) => {
  // Gabungkan tanggal dan waktu menjadi satu string
  const dateTimeString = `${date.split("-").reverse().join("-")}T${time}:00`; // Format ke "YYYY-MM-DDTHH:mm:00"

  // Konversi ke objek Date
  const scheduleDateTime = new Date(dateTimeString);

  // Bandingkan dengan waktu saat ini
  const now = new Date();
  return scheduleDateTime < now; // `true` jika sudah lewat, `false` jika belum
};


// src/assets/validation/validation.js

/**
 * Validates and returns the current page number within the bounds of total pages.
 * @param {number} currentPage - The current page number.
 * @param {number} totalPages - The total number of pages.
 * @returns {number} - A valid page number within the range.
 */
export const validatePageNumber = (currentPage, totalPages) => {
    if (currentPage < 1) return 1;
    if (currentPage > totalPages) return totalPages;
    return currentPage;
};

