import { HiMiniGift } from "react-icons/hi2";
import { PiMoneyWavyLight } from "react-icons/pi";
const GiftInfo = ({ gifts }) => {
  // Menghitung total hadiah
  const totalAllGifts = gifts.reduce((a, b) => a + (b.num * b.point), 0);

  // Menghitung hadiah berbayar
  const paidGifts = gifts
    .filter((gift) => !gift.free)
    .reduce((a, b) => a + (b.num * b.point), 0);

  // Menghitung hadiah gratis
  const freeGifts = gifts
    .filter((gift) => gift.free)
    .reduce((a, b) => a + (b.num * b.point), 0);

  return (
    <div className='text-white bg-gray-800 px-4 py-4 rounded-xl'>
      <div className='flex items-center justify-between'> 
        <h3 className='font-medium capitalize text-lg'>total gift</h3>
        <p className='text-[13px] text-gray-400 font-normal'>{totalAllGifts} pts</p>
      </div>
      <div className="bg-orange h-2 rounded-full overflow-hidden my-3">
        <div
          className="bg-blue-500 h-full text-base"
          style={{
            width: `${(paidGifts / totalAllGifts) * 100}%`,
          }}
        />
      </div>
      
        <p className='text-[13px] mt-3 max-sm:text-xs flex items-center gap-x-2 text-blue-500 tracking-wider'><HiMiniGift size={18} />paid gifts ({Math.round((paidGifts / totalAllGifts) * 100)}%)</p>
        <p className='text-[13px] mt-2 max-sm:text-xs flex items-center gap-x-2 text-orange tracking-wider'><PiMoneyWavyLight size={18} />free gifts ({Math.round((freeGifts / totalAllGifts) * 100)}%)</p>


    </div>
  );
};

export default GiftInfo;
