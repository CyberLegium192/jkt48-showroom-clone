import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { detailLive } from '../../assets/api/history-live'
import { Aside } from "../../component/sidebar/aside"
import { IoArrowBackSharp } from "react-icons/io5";
import { HeaderDetail } from "../../component/header/header-detail";

const DetailLive = () => {
  const [data, setData] = useState()
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data_id } = useParams()

  const navigate = useNavigate()
// BUTTON TRIGGER BACK PAGE
  const handleBack = () => {
    navigate(-1)
  }
// HANDLE SCROLL
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const fetchLogDetailLive = async () => {
      const response = await detailLive(data_id)
      setData(response)
    }
    fetchLogDetailLive()

    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener ketika komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [])


  return (
    <div className="flex flex-col lg:flex-row-reverse gap-5 relative">
      <Aside>
        <div className="w-full bg-primary-dark text-white">
          adsfasf
        </div>
      </Aside>

      <main className="w-full lg:w-[75%] px-2 max-sm:pt-2 relative">
        <HeadersNavigartion isScrolled={isScrolled} data={data} handleBack={handleBack}/>
        <HeaderDetail data={data}/>

      </main>



    </div>
  )
}

const HeadersNavigartion = ({isScrolled, data, handleBack}) => {
  return (
    <div className={`sticky top-0 left-0 z-50 pb-2 pt-3 px-5 rounded-t-lg flex items-center transition-all duration-300 ${isScrolled
        ? "bg-gray-700 bg-opacity-50 backdrop-blur-md"
        : "bg-primary-dark"
      }`}>
      <div className="flex items-center gap-5">
        <button className="text-secondary-text w-9 h-9 hover:bg-gray-800 duration-300 transition-all flex items-center justify-center rounded-full" onClick={handleBack}><IoArrowBackSharp size={22} /></button>

        <div className="text-white">
          <h4 className="font-poppins font-medium text-lg leading-none text-white tracking-wider">{data?.room_info?.fullname}</h4>
          <span className="text-xs font-poppins capitalize leading-none text-secondary-text">{data?.type} Live - {data?.created_at}</span>
        </div>
      </div>

    </div>

  )
}



export default DetailLive