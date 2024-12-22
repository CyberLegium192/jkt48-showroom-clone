import { timeAgo } from "../../assets/validation/validation"
import { FaUserGroup } from "react-icons/fa6";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Link } from "react-router-dom";

export const RecentLive = ({ item }) => {
    return (
        <div className="px-2 pb-4 border-b-[2px] border-b-gray-700">
            <div className="flex gap-x-4">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <img
                        src={item.member.img_alt}
                        alt="member picture"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="border-b-[2px] border-b-gray-600 w-full pb-3">
                    <h2 className="font-semibold font-poppins ">{item.member.nickname ? item.member.nickname : item.member.name}</h2>
                    <p className="text-sm my-1 flex items-center gap-x-2 text-gray-300 font-poppins"> <FaUserGroup size={15} /> {item.live_info.viewers?.num.toLocaleString("id-ID")}</p>
                    <p className="text-sm flex items-center gap-x-2 text-gray-300 font-poppins"> <AiOutlineFieldTime size={20} /> {timeAgo(item.created_at)}</p>
                </div>
            </div>
                <div className="flex justify-end mt-2">
                    <Link  to={`/detail-live/${item.member.nickname}/${item.data_id}` || "#"} className="font-poppins font-medium">Details</Link>
                </div>
        </div>
    )
}
