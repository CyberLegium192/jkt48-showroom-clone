import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // Pastikan Anda menggunakan import ini

const app = express();
const PORT = 5000;

// Middleware CORS untuk mengizinkan akses dari frontend
app.use(cors());

// Proxy endpoint untuk semua permintaan streaming
app.get("/api/proxy", async (req, res) => {
  const { url } = req.query; // Ambil URL dari query parameter

  if (!url) {
    return res.status(400).json({ error: "URL parameter is required" });
  }

  try {
    // Fetch ke API eksternal
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch the URL" });
    }

    const contentType = response.headers.get("content-type");
    res.setHeader("Content-Type", contentType); // Forward Content-Type

    // Gunakan arrayBuffer untuk menangani data binary
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer); // Konversi ke Buffer

    res.status(200).send(buffer); // Kirim kembali ke frontend
  } catch (error) {
    console.error("Error fetching URL:", error);
    res.status(500).json({ error: "Failed to fetch data from the server" });
  }
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
