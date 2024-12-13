import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { detailLive } from '../../assets/api/history-live'
import { Aside } from "../../component/sidebar/aside"
import { IoArrowBackSharp } from "react-icons/io5";
import { HeaderDetail } from "../../component/menu/header-detail";
import { DetailGift } from "../../component/menu/detail-gift";
import { PictureLive } from "../../component/menu/picture-live";
import { format, isValid } from "date-fns";

const DetailLive = () => {
  const [data, setData] = useState()
  const { data_id } = useParams()
  const createdAt = data?.created_at ? new Date(data?.created_at) : null;

  // Pastikan date valid
  const formattedDate = createdAt && isValid(createdAt)
    ? format(createdAt, "dd MMMM yyyy")
    : "Invalid Date";

  const navigate = useNavigate()
  // BUTTON TRIGGER BACK PAGE
  const handleBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    const fetchLogDetailLive = async () => {
      const response = await detailLive(data_id)
      setData(response)
    }
    fetchLogDetailLive()

  }, [])

  return (
    <>
      <div className="flex flex-col lg:flex-row-reverse gap-5">
        <Aside>
          <div className="w-full bg-primary-dark text-white">
            adsfasf
          </div>
        </Aside>

        <main className="w-full lg:w-[75%] bg-primary-dark rounded-t-lg">
          <HeadersNavigartion data={data} handleBack={handleBack} date={formattedDate}/>
          <HeaderDetail data={data} />
          {
            data?.idn ? <PictureLive data={data} /> : null
          }
          <DetailGift data={data} />
        </main>



      </div>
    </>
  )
}

const HeadersNavigartion = ({ data, handleBack, date}) => {
  return (
    <div
      className={`relative top-0 left-0 pb-2 pt-3 px-5 rounded-t-lg flex items-center transition-all duration-300 bg-gray-700 bg-opacity-30 backdrop-blur-md w-full`}
    >
      <div className="flex items-center gap-5">
        <button className="text-secondary-text w-9 h-9 hover:bg-gray-800 duration-300 transition-all flex items-center justify-center rounded-full" onClick={handleBack}><IoArrowBackSharp size={22} /></button>

        <div className="text-white">
          <h4 className="font-poppins font-medium text-lg leading-none text-white tracking-wider">{data?.room_info?.fullname}</h4>
          <span className="text-xs font-poppins capitalize leading-none text-secondary-text">{data?.type} Live - {date}</span>
        </div>
      </div>

    </div>

  )
}



export default DetailLive