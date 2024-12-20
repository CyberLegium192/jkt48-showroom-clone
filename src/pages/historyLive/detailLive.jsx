import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { detailLive, onLiveShowroom, onLiveIdn } from '../../assets/api/history-live'
import { Aside } from "../../component/sidebar/aside"
import { IoArrowBackSharp } from "react-icons/io5";
import { HeaderDetail } from "../../component/menu/header-detail";
import { OnLives } from "../../component/card/card-history";
import { DetailGift } from "../../component/menu/detail-gift";
import { PictureLive } from "../../component/menu/picture-live";
import GiftInfo from "../../component/menu/GIftInfo";
import { format, isValid } from "date-fns";
import BusySVG from "../../assets/bussy.svg";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";




const DetailLive = () => {
  const [data, setData] = useState()
  const [showroomLive, setShowroomLive] = useState([])
  const [idnLive, setIdnLive] = useState([])
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

    const fetchLiveShowroom = async () => {
      const response = await onLiveShowroom()
      setShowroomLive(response.data)
    }
    fetchLiveShowroom()

    const fetchLiveIdn = async () => {
      const response = await onLiveIdn("/idn_lives")
      setIdnLive(response)
    }
    fetchLiveIdn()
  }, [data_id])

  return (
    <>
      <div className="flex flex-col lg:flex-row-reverse gap-5">
        <Aside>
          {/* Onlive */}
          <div className="w-full bg-gray-800 text-white px-3 py-2 pt-4 pb-5 rounded-lg ">
            <h5 className="text-lg font-poppins capitalize font-semibold tracking-wider mb-1 px-2">now live</h5>
            {
              (idnLive && idnLive.length > 0) || (showroomLive && showroomLive.length > 0)
                ? <NowLive  showroomLive={showroomLive} idnLive={idnLive} />
                : 
                <div className="flex items-center flex-col w-full">
                  <img src={BusySVG} className="w-48 -mb-2"/>
                  <p className="font-poppins text-sm tracking-wider">Tidak ada live 😭</p>
                </div>
            }
          </div>
        </Aside>

        <main className="w-full lg:w-[75%] bg-primary-dark rounded-t-lg">
          <HeadersNavigartion data={data} handleBack={handleBack} date={formattedDate} />

          <HeaderDetail data={data} />
          <PictureLive data={data} />
          <DetailGift data={data} />


          {/* GiftInfo Section */}
          {data?.live_info?.gift?.list && (
            <div className="px-4">
              <GiftInfo gifts={data.live_info.gift.list} />

            </div>
          )}
          
        </main>
      </div>
    </>
  )
}


const NowLive = ({ showroomLive, idnLive }) => {
  return (
    <div className="w-full mt-3">
      {
        showroomLive?.map((item, i) => <OnLives key={i} item={item} />)
      }
      {
        idnLive?.map((item, i) => <OnLives key={i} item={item} />)
      }
    </div>
  )
}

const HeadersNavigartion = ({ data, handleBack, date }) => {
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