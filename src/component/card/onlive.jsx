import React from 'react'
import { FaUser } from "react-icons/fa6";
import {Link} from 'react-router-dom';
const onlive = ({item}) => {

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // UNIX timestamp dalam detik, dikali 1000 untuk milidetik
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const formatLiveTime = (isoString) => {
    const date = new Date(isoString); // Parse ISO string menjadi objek Date
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };


  const formatViews = (views) => {
    return views.toLocaleString('id-ID'); // Menggunakan format Indonesia (dengan titik)
  };


  return (
    <Link className='text-white relative lg:w-52 lg:h-36 max-sm:w-[100%] max-sm:h-36 overflow-hidden rounded-lg' to={`/streaming/${encodeURIComponent(item?.streaming_url_list?.[0]?.url || item?.stream_url)}`}>
      <img src={item.image_square ? item.image_square : item.user.avatar} className='w-full h-full object-cover'/>

      <div className="absolute w-full h-full bg-gradient-to-b from-black/30 via-black/50 to-black/80 top-0 left-0">
        <p className='absolute left-1 bottom-3 px-2 lg:text-lg max-sm:text-sm font-poppins font-medium'>
          {item.room_url_key ? item.room_url_key : item.user.username?.replace("_", " ")} 

          <span className='ml-2 max-sm:text-sm lg:text-sm'>{item.started_at ? formatTime(item.started_at) : formatLiveTime(item.live_at)}</span>
          {/* <span className='ml-2 text-lg'>{formatTime(item.started_at)}</span> */}
        </p>
        <p>{}</p>
      </div>

      <div className="absolute top-0 right-0 bg-orange bg-opacity-80 pr-2 pl-3 py-1 rounded-bl-xl">
        <p className='lg:text-sm max-sm:text-xs font-poppins font-medium tracking-wider flex items-center gap-x-2'><FaUser  /> {item.view_num ? formatViews(item.view_num) : formatViews(item.view_count)}</p>
      </div>



    </Link>
  )
}

export default onlive