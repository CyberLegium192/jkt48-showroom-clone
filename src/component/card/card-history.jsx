import { GrGift } from "react-icons/gr";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineFieldTime } from "react-icons/ai";
import ShowroomImg from '../../assets/showroom.png'
import IdnImg from '../../assets/IDN_Live.png'
import { Link } from 'react-router-dom'
import { formatDuration, timeAgo } from '../../assets/validation/validation';

export const CardHistory = ({ item }) => {

  const totalRupiah = item.gift_rate * item.points;


  return (

    <div className="w-full bg-gray-800 text-white px-4 pt-4 pb-3 rounded-xl">

      <div className="flex gap-x-2">
        {/* IMAGE COVER */}
        <div className="w-64 h-36 max-sm:w-36 max-sm:h-20 rounded-lg overflow-hidden relative">
          <img src={item.member.img} alt="member photo" className="object-cover" />
          <img src={item.type == "showroom" ? ShowroomImg : IdnImg} alt="type live" className={`${item.type == "showroom" ? "w-24 left-4 max-sm:w-12 max-sm:left-2 max-sm:bottom-2" : "w-14 left-9 max-sm:w-8 max-sm:left-5 max-sm:bottom-1"} absolute bottom-3`} />
        </div>


        {/* INFORMATION LIVE */}
        <div className="ml-3 font-poppins">
          <Link className="text-lg max-sm:text-sm font-semibold capitalize tracking-wider mb-2">{item.member.nickname ? item.member.nickname : item.member.name}</Link>
          <p className="flex items-center mt-1 gap-x-3 text-sm max-sm:text-xs tracking-wide text-secondary-text">
            <span className="w-6 h-6 max-sm:w-4 max-sm:h-4 max-sm:text-xs flex items-center justify-center bg-orange text-white rounded-full">
              <GrGift />
            </span>
            ± Rp {totalRupiah.toLocaleString("id-ID", { minimumFractionDigits: 2 })}
          </p>
          <p className="flex items-center mt-1 gap-x-3 text-sm max-sm:text-xs tracking-wide text-secondary-text">
            <span className="w-6 h-6 max-sm:w-4 max-sm:h-4 max-sm:text-xs flex items-center justify-center bg-blue-600 text-white rounded-full">
              <RiUser3Line />
            </span>
            {item.live_info.viewers?.num.toLocaleString("id-ID")} Viwers
          </p>
          <p className="flex items-center mt-1 gap-x-3 text-sm max-sm:text-xs tracking-wide text-secondary-text">
            <span className="w-6 h-6 max-sm:w-4 max-sm:h-4 max-sm:text-xs flex items-center justify-center bg-red-600 text-white rounded-full">
              <AiOutlineFieldTime size={19} />
            </span>
            {formatDuration(item.live_info.duration)}
          </p>
        </div>
      </div>
      {/* DETAIL BUTTON AND LATEST LIVE */}
      <div className="flex items-center justify-between font-poppins mt-2 max-sm:mt-3 px-1 ">
        <p className="text-sm max-sm:text-xs text-secondary-text flex items-center gap-x-1 justify-center"><AiOutlineFieldTime size={21} /> {timeAgo(item.created_at)}</p>
        <Link to={`/detail-live/${item.member.nickname}/${item.data_id}` || "#"} className="font-medium tracking-wider max-sm:text-xs">Details</Link>
      </div>
    </div>

  )
}

import { BsFillCameraVideoFill } from "react-icons/bs";

export const OnLives = ({ item }) => {
  const calculateRelativeTime = (timestamp) => {
    const now = Date.now(); // Current time in milliseconds
    const diffInSeconds = Math.floor((now - timestamp * 1000) / 1000); // Difference in seconds

    if (diffInSeconds < 60) {
      return `${diffInSeconds} detik lalu`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} menit lalu`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} jam lalu`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} hari lalu`;
    }
  };

  const calculateRelativeTimeIdn = (isoDate) => {
    const liveTime = new Date(isoDate).getTime(); // Convert ISO date to timestamp in milliseconds
    const now = Date.now(); // Current time in milliseconds
    const diffInSeconds = Math.floor((now - liveTime) / 1000); // Difference in seconds

    if (diffInSeconds < 60) {
      return `${diffInSeconds} detik lalu`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} menit lalu`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} jam lalu`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} hari lalu`;
    }
  };

  // const image = "https://cdn.idntimes.com/content-images/post/20241216/266ef38a-da00-4d13-ba77-f94da68599ee-241216221726.jpg"
  return (
    <div className="flex gap-x-4 mb-4 overflow-hidden relative border-b-2 border-b-gray-600 pb-3 ">
      <img src={item?.image_square ? item.image_square : item.image} alt="" className="w-24 h-28 object-cover rounded-lg" />


      <div className="w-full py-2">
        <p className="text-sm font-poppins font-medium ">{item?.main_name ? item.main_name : item?.user.name}</p>
        {item?.started_at && (
          <p className="text-xs text-gray-400 font-poppins mt-2">
            {calculateRelativeTime(item.started_at)}
          </p>
        )}
        {item?.live_at && (
          <p className="text-xs text-gray-400 font-poppins mt-2">
            {calculateRelativeTimeIdn(item.live_at)}
          </p>
        )}

        <Link className="absolute bottom-2 right-2 text-sm py-1 px-3 rounded-lg font-poppins flex items-center gap-x-2 bg-red-600" to={`/streaming/${item.slug ? "idn" : "showroom"}/${encodeURIComponent(item?.streaming_url_list?.[0]?.url || item?.stream_url)}`}>
          <BsFillCameraVideoFill /> watch
        </Link>


      </div>


    </div>
  )
}