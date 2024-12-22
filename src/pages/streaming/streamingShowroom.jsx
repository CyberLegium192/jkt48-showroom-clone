import Hls from 'hls.js';
import { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { roomLive } from '../../assets/api/history-live';
import { VidoePlayer } from './vidoePlayer';
import { Aside } from '../../component/sidebar/aside';


const StreamingRoomShowroom = () => {
  const [urlStream, setUrlStream] = useState()
  const [nameMember, setNameMember] = useState()
  const { room_key } = useParams();
  const { type } = useParams()
  const videoRef = useRef(null);

  const fetchURL = async () => {
    const response = await roomLive(room_key);
    const selectedUrl = response?.streaming_url_list[0]?.url
    setUrlStream(selectedUrl);
    if (selectedUrl) {
      const decodedUrl = decodeURIComponent(selectedUrl);
      const idnLive = `https://jkt48showroom-api.my.id/proxy?url=${decodedUrl}`;
      const videoSource = decodedUrl

      console.log('Video Source:', videoSource);

      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSource);
        hls.attachMedia(videoRef.current);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log('HLS manifest parsed successfully!');
        });

        return () => {
          hls.destroy();
        };
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = videoSource;
      }
    }
  };
  useEffect(() => {
    fetchURL();
  }, [room_key, type, urlStream]);



  return (
    <div className='flex flex-col lg:flex-row-reverse gap-5'>
      
      <aside className='w-[30%] bg-gray-600'>
        <p>asdf</p>
      </aside>



      <main className='w-[70%]'>
        <VidoePlayer videoRef={videoRef} nameMember={nameMember} />
      </main>


    </div>
  );
};

export default StreamingRoomShowroom;
