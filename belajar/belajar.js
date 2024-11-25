// Ambil semua elemen <img> di halaman
const images = document.querySelectorAll('img');

// Buat array untuk menampung semua nilai src
images.forEach(img => {
    img.src = img.src.replace('http://127.0.0.1:5500', 'https://jkt48.com')
})

const linkUrl = document.querySelectorAll("a")
linkUrl.forEach(link => {
    link.href = link.href.replace('http://127.0.0.1:5500', 'https://jkt48.com')
})