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

    // Decode URL dan ubah untuk proxy
    const decodedUrl = decodeURIComponent(url);

    const idnLive = `https://jkt48showroom-api.my.id/proxy?url=${decodedUrl}`
    // Tentukan sumber video
    const videoSource = type === 'showroom' ? decodedUrl : idnLive;

    console.log('Video Source:', videoSource); // Debugging

    if (Hls.isSupported()) {
      const hls = new Hls();

      hls.loadSource(videoSource);
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log('HLS manifest parsed successfully!');
      });

      return () => {
        hls.destroy(); // Membersihkan Hls instance saat unmount
      };
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = videoSource;
    }
  }, [url, type]);



  return (
    <div>
      <video
        autoPlay
        ref={videoRef}
        controls
        className='w-auto h-96'
        // referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default StreamingRoom;
