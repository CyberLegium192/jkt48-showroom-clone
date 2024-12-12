import Hls from 'hls.js';
import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StreamingRoom = () => {
  const token = "SfqXGRANhj9FQ8byMJh5fgqm"
  const { url } = useParams();
  const { type } = useParams()
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const decodedUrl = decodeURIComponent(url); // Decode URL
    
    // const decodedUrlIdn = `http://localhost:5000/api/proxy?url=${decodeURIComponent(url)}`; // URL untuk IDN
    const decodedUrlIdn = `https://crossorigin.me/${decodeURIComponent(url)}`; // URL untuk IDN
    // const decodedUrlIdn = decodeURIComponent(url); // Decode URL

    const videoSource = type === 'showroom' ? decodedUrl : decodedUrlIdn; // Pilih URL berdasarkan type

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSource); // Load URL HLS
      hls.attachMedia(videoRef.current); // Attach ke elemen video

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log('HLS manifest parsed successfully!');
      });

      return () => {
        hls.destroy(); // Membersihkan Hls saat komponen di-unmount
      };
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      // Fallback untuk browser yang mendukung native HLS (seperti Safari)
      videoRef.current.src = videoSource;
    }
  }, [url, type]); // Tambahkan 'type' ke dependency array

  return (
    <div>
      <video
        autoPlay
        ref={videoRef}
        controls
        className='w-auto h-96'
      />
    </div>
  );
};

export default StreamingRoom;
