import Hls from 'hls.js';
import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'

const StreamingRoom = () => {

  const { url } = useParams();
  const videoRef = useRef(null);

  useEffect(() => {
    console.log(url)
    if (!videoRef.current) return;
    const decodedUrl = decodeURIComponent(url); // Decode URL
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(decodedUrl); // Load URL HLS
      hls.attachMedia(videoRef.current); // Attach ke elemen video

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log('HLS manifest parsed successfully!');
      });

      return () => {
        hls.destroy(); // Membersihkan Hls saat komponen di-unmount
      };
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      // Fallback untuk browser yang mendukung native HLS (seperti Safari)
      videoRef.current.src = decodedUrl;
    }
    
  }, [url]);

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
