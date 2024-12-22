import Hls from 'hls.js';
import { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { roomLive } from '../../assets/api/history-live';
import { VidoePlayer } from './vidoePlayer';



const StreamingRoom = () => {
  const [urlStream, setUrlStream] = useState()
  const [nameMember, setNameMember] = useState()
  const { room_key } = useParams();
  const videoRef = useRef(null);

  const fetchURLIDN = async () => {
    const response = await roomLive(`${room_key}/idn`);
    const selectedUrl = response?.stream_url;
    const memberName = response?.member_info.name
    setUrlStream(selectedUrl);
    setNameMember(memberName);

    if (selectedUrl) {
      const decodedUrl = decodeURIComponent(selectedUrl);
      const idnLive = `https://jkt48showroom-api.my.id/proxy?url=${decodedUrl}`;
      const videoSource = idnLive;

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
    
      fetchURLIDN()
  }, [room_key, urlStream]);



  return (


      <div className={`flex-grow flex items-center justify-center`}>
        <div className='w-[30]'>
          
        <VidoePlayer videoRef={videoRef} nameMember={nameMember}/>
        </div>
      </div>
  );
};

export default StreamingRoom;
