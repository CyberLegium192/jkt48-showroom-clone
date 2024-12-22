import { useEffect, useState, useRef } from 'react'
import { onLiveIdn, onLiveShowroom } from '../../assets/api/history-live';
import Hls from 'hls.js';
import { VidoePlayer } from '../streaming/vidoePlayer';



const multiIdn = () => {
  const [data, setData] = useState([]);
  const [selectedStreams, setSelectedStreams] = useState([]);
  const [showStreamDiv, setShowStreamDiv] = useState(false);
  const videoRefs = useRef({});
  const hlsInstances = useRef({});

  useEffect(() => {
    // Fetch data API
    const fetchData = async () => {
      const response = await onLiveIdn('/idn_lives');
      setData(response);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Inisialisasi HLS hanya untuk stream baru
    selectedStreams.forEach((streamUrl) => {
      if (!hlsInstances.current[streamUrl]) {
        const videoElement = videoRefs.current[streamUrl];

        if (videoElement && Hls.isSupported()) {
          const hls = new Hls();
          const decodedUrl = decodeURIComponent(streamUrl);
          const proxyUrl = `https://jkt48showroom-api.my.id/proxy?url=${decodedUrl}`;

          hls.loadSource(proxyUrl);
          hls.attachMedia(videoElement);
          hlsInstances.current[streamUrl] = hls; // Simpan instance HLS

          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            console.log(`HLS manifest parsed successfully for ${streamUrl}`);
          });
        }
      }
    });

    // Cleanup HLS instance saat stream dihapus
    return () => {
      Object.keys(hlsInstances.current).forEach((streamUrl) => {
        if (!selectedStreams.includes(streamUrl)) {
          hlsInstances.current[streamUrl].destroy();
          delete hlsInstances.current[streamUrl];
        }
      });
    };
  }, [selectedStreams]);

  const handleToggleStreamDiv = () => {
    setShowStreamDiv(!showStreamDiv);
  };

  const handleSelectStream = (streamUrl) => {
    setSelectedStreams((prev) =>
      prev.includes(streamUrl)
        ? prev.filter((url) => url !== streamUrl)
        : [...prev, streamUrl]
    );
  };

  return (
    <div className='text-white'>

      <p>URL Stream yang dipilih:</p>
      <div className="grid grid-cols-3 gap-4">
      {selectedStreams.map((url, index) => (
        <div key={url} className="flex justify-center items-center">
          <VidoePlayer
            videoRef={(el) => {
              if (el) {
                videoRefs.current[url] = el; // Simpan referensi elemen video berdasarkan URL
              }
            }}
            nameMember={`Stream ${index + 1}`}
            />
        </div>
      ))}
      </div>

      <button onClick={handleToggleStreamDiv} className='text-white'>
        {showStreamDiv ? "Sembunyikan" : "Tampilkan"}
      </button>

      {showStreamDiv && (
        <div id="streamURL" className='text-white'>
          {data.map((item, index) => (
            <div key={index}>
              <p className='text-red-500'>{item.user.name}</p>
              <button onClick={() => handleSelectStream(item.stream_url)}>
                {selectedStreams.includes(item.stream_url) ? "Batalkan" : "Pilih"} Stream
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default multiIdn