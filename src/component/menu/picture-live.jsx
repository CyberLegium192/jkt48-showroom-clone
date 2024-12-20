import IDNlogo from '../../assets/IDN_Live.png'
import Showroomlogo from '../../assets/showroom.png'
import { Screenshot } from '../carousel/screenshot'

export const PictureLive = ({ data }) => {
  return (
    <div className="flex max-sm:flex-col gap-x-5 max-sm:gap-y-5 p-4 max-w-6xl mx-auto mb-3">
      {/* Kolom kiri */}
      <div className="lg:w-[30%] h-64 max-sm:h-80 max-sm:w-full overflow-hidden rounded-xl relative">
        <img src={data?.type == "showroom" ? data?.room_info?.img_alt : data?.idn?.image} alt="live image poster" className="w-full h-full object-cover" />
        <h4 className="absolute top-2 left-2 font-poppins text-lg tracking-wide text-white font-semibold">{data?.type == "showroom" ? data?.room_info.fullname : data?.idn?.title}</h4>
        <img src={data?.type == "showroom" ? Showroomlogo : IDNlogo} alt="IDN LOGO" className='absolute bottom-2 right-2 w-16' />
      </div>

      {/* Kolom kanan */}
      <div className="rounded-xl w-[70%] max-sm:w-full overflow-hidden">
        {
          data?.live_info.screenshot.list.length > 0 ? <Screenshot data={data?.live_info.screenshot} /> : <p className='w-full bg-gray-800 h-full flex items-center justify-center text-gray-400 '>Tidak ada screenshot</p>
        }
        
      </div>
    </div>

  )
}
