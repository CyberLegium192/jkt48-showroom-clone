import { GiFallingStar } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
export const GiftListCard = ({item}) => {
  return (
    <div className="flex gap-x-3">
      <img src={item.img} alt="gift icons" className="w-16" />
      <div>
        <h5 className="text-sm mt-2 text-white font-poppins font-medium line-clamp-1">{item.name} <span className="bg-blue-500 px-1 rounded-lg ml-1">{item.num}x</span></h5>
        <p className="text-sm text-gray-300 flex items-center gap-x-1 mt-1">
          <span className="flex items-center gap-x-1">
            <GiFallingStar size={18}/>{item.point} pts
          </span>
          <GoDotFill size={12}/>
          <span className="flex items-center gap-x-1">
            <FaUserGroup size={14}/>{item.user_count}
          </span>
        </p>
      </div>
    </div>
  )
}
