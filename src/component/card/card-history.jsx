import { GrGift } from "react-icons/gr";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineFieldTime } from "react-icons/ai";
import ShowroomImg from '../../assets/showroom.png'
import IdnImg from '../../assets/IDN_Live.png'
import { Link } from 'react-router-dom'
import { formatDuration, timeAgo } from '../../assets/validation/validation';

const cardHistory = ({ item }) => {

  const totalRupiah = item.gift_rate * item.points;
   

  return (
    
    <div className="w-full bg-gray-800 text-white px-4 pt-4 pb-3 rounded-xl">

      <div className="flex gap-x-2">
        {/* IMAGE COVER */}
        <div className="w-64 h-36 rounded-lg overflow-hidden relative">
          <img src={item.member.img} alt="member photo" className="object-cover" />
          <img src={item.type == "showroom" ? ShowroomImg : IdnImg} alt="type ve" className={`${item.type == "showroom" ? "w-24 left-4" : "w-14 left-9"} absolute bottom-3`}/>
        </div>


        {/* INFORMATION LIVE */}
        <div className="ml-4 font-poppins">
          <Link className="text-lg font-semibold capitalize tracking-wider mb-2">{item.member.nickname ? item.member.nickname : item.member.name}</Link>
          <p className="flex items-center mt-2 gap-x-3 text-sm tracking-wide text-secondary-text">
            <span className="w-6 h-6 flex items-center justify-center bg-orange text-white rounded-full"><GrGift size={15} /></span>
            ± Rp {totalRupiah.toLocaleString("id-ID", { minimumFractionDigits: 2 })}
          </p>
          <p className="flex items-center mt-2 gap-x-3 text-sm tracking-wide text-secondary-text">
            <span className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full"><RiUser3Line size={18} /></span>
            {item.live_info.viewers?.num.toLocaleString("id-ID")} Viwers
          </p>
          <p className="flex items-center mt-2 gap-x-3 text-sm tracking-wide text-secondary-text">
            <span className="w-6 h-6 flex items-center justify-center bg-red-600 text-white rounded-full"><AiOutlineFieldTime size={19} /></span>
            {formatDuration(item.live_info.duration)}
          </p>
        </div>
      </div>


      {/* DETAIL BUTTON AND LATEST LIVE */}
      <div className="flex items-center justify-between font-poppins mt-1 px-1">
        <p className="text-sm text-secondary-text flex items-center gap-x-1 justify-center"><AiOutlineFieldTime size={21} /> {timeAgo(item.created_at)}</p>
        <Link to={`/detail-live/${item.member.nickname}/${item.data_id}`|| "#"} className="font-medium tracking-wider">Details</Link>
      </div>



    </div>
    
  )
}

export default cardHistory