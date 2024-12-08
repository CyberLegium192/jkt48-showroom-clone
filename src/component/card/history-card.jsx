import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { GiAerialSignal } from "react-icons/gi";
import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";



const historyCard = ({item}) => {
  function timeAgo(createdAt) {
    const now = new Date();
    const past = new Date(createdAt);
    const diffInSeconds = Math.floor((now - past) / 1000);
  
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
  }

  const member = item.member || {};
  const liveInfo = item.live_info || {};
  const viewers = liveInfo.viewers || {};

  return (
    <div>
      <div className="flex bg-card-bg w-full h-36 rounded-lg overflow-hidden border-2 border-border-color">
        <div className="w-24 h-full">
          <img
            src={member.img_alt || "https://via.placeholder.com/150"}
            alt="member photo"
            className="w-full object-cover h-full"
          />
        </div>

        <div className="p-3 flex flex-col gap-y-3 justify-center">
          {/* DATE TIME */}
          <h3 className="inline-flex items-center text-xs font-poppins text-secondary-text gap-x-3 font-semibold">
            <span className="text-orange">
              <FaRegCalendarAlt size={17} />
            </span>{" "}
            {liveInfo.date?.start
              ? new Date(liveInfo.date.start).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "Unknown date"}
          </h3>
          {/* VIEWS */}
          <p className="inline-flex items-center text-xs font-poppins text-secondary-text gap-x-4 font-medium">
            <span className="text-orange">
              <FaUserFriends size={17} />
            </span>{" "}
            {viewers.num ? viewers.num.toLocaleString() : 0} views
          </p>
          {/* LIVE TIME */}
          <p className="inline-flex items-center text-xs font-poppins text-secondary-text gap-x-4 font-medium">
            <span className="text-orange">
              <FaRegClock size={17} />
            </span>{" "}
            {liveInfo.duration
              ? `${Math.floor(liveInfo.duration / 3600000)} jam ${Math.floor(
                  (liveInfo.duration % 3600000) / 60000
                )} menit`
              : "Unknown duration"}
          </p>
          {/* TYPE LIVE */}
          <p className="inline-flex uppercase items-center text-xs font-poppins text-secondary-text gap-x-4 font-semibold">
            <span className="text-orange">
              <GiAerialSignal size={17} />
            </span>
            {item.type || "Unknown"} Live
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Link
          className="bg-orange py-1 max-sm:w-[40%] max-sm:text-xs lg:w-[40%] font-poppins line-clamp-1 text-white font-semibold pl-4 pr-2 rounded-md lg:text-[15px] capitalize inline-flex items-center gap-x-2 cursor-pointer"
          to={`/detail-live/${item.member.nickname}/${item.data_id}`|| "#"}
        >
          {member.url || "No URL"} <IoMdLogIn size={20} />
        </Link>
        {/* LAST TIME HISTORY */}
        <p className="bg-accent-red py-1 max-sm:w-[55%] lg:w-[50%] font-poppins text-white font-semibold pl-3 pr-2 rounded-md lg:text-[15px] max-sm:text-xs inline-flex items-center gap-x-2 capitalize">
          <FaRegClock size={18} /> {timeAgo(item.created_at)}
        </p>
      </div>
    </div>
  )
}

export default historyCard