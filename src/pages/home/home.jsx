import Carousel from '../../component/carousel/carousel'
import { News } from "../../component/card/news"
import { Link } from 'react-router-dom';
import { IoArrowForwardOutline } from "react-icons/io5"
import { fetchNews, fetchSchedule, fecthSsk } from "../../assets/api/api"
import { onLiveShowroom, onLiveIdn } from '../../assets/api/history-live';
import { useEffect, useState } from 'react'
import { Schedule } from '../../component/card/schedule';
import Onlive from '../../component/card/onlive';

// IMPORT SKELETONS
import { SkeletonCardNews } from '../../component/skeletons/news-skeletons';
import { ScheduleSkeleton } from '../../component/skeletons/schedule-skeletons';
export const Home = () => {
  const [newsData, setNewsData] = useState([])
  const [scheduleData, setScheduleData] = useState([])
  const [onLive, setOnlive] = useState([])
  const [onLiveIDN, setOnliveIDN] = useState([])
  const [isLoadingNews, setIsLoadingNews] = useState(true)
  const [isLoadingSchedule, setIsLoadingSchedule] = useState(true)


  useEffect(() => {
    const fetchDataNews = async () => {
      const data = await fetchNews('/news.json'); // Tunggu data dari fetchNews
      setNewsData(data); // Set data ke state
      setIsLoadingNews(false)
    };
    fetchDataNews();

    const fetchDataSchedule = async () => {
      const data = await fetchSchedule('/schedule.json'); // Tunggu data dari fetchNews
      setScheduleData(data.filter(item => item.tema !== "/images/icon.cat2.png")); // Set data ke state
      setIsLoadingSchedule(false)
    };
    fetchDataSchedule();

    const fetchShowroomLive = async () => {
      const data = await onLiveShowroom()
      setOnlive(data.data)

    }
    fetchShowroomLive()

    const fetchIDNLive = async () => {
      const data = await onLiveIdn()
      setOnliveIDN(data)
    }
    fetchIDNLive()




  }, [])

  return (
    <>
      <div>
        {/* ONLIVE SHOWROOM */}
        <div className={`${onLive.length > 0 ? "block" : "hidden"}`}>
          <LayoutHome>
            <Headers title='live idn' linked={true}/>
            <div className='flex flex-wrap gap-4 max-sm:grid max-sm:grid-cols-2'>
              {
                onLive?.map((item, i) => <Onlive item={item} key={i} />)
              }
            </div>
          </LayoutHome>
        </div>

        {/* ONLIVE IDN */}
        <div className={`${onLiveIDN.length > 0 ? "block" : "hidden"}`}>
          <LayoutHome>
            <Headers title='live idn' linked={true} />
            <div className='flex flex-wrap gap-4 max-sm:grid max-sm:grid-cols-2 '>
              {
                onLiveIDN?.map((item, i) => <Onlive item={item} key={i} />)
              }
            </div>
          </LayoutHome>
        </div>


        {/* HISTORY LIVE */}
        <LayoutHome>
          <Headers title='live terakhir' href='/history-live' />
          <Carousel />
        </LayoutHome>


        {/* NEWS PAGE */}
        <LayoutHome>
          <Headers title='NEWS' href='/news' />
          <div className='grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-5 mb-4'>
            {isLoadingNews ? Array.from({ length: 6 }, (_, i) => <SkeletonCardNews key={i} />) :
              newsData.slice(0, 6).map((item, i) => <News key={i} item={item} lineClimp={true} />)
            }
          </div>
        </LayoutHome>



        {/* SCHEDULE THEATER */}
        <LayoutHome>
          <Headers title='SCHEDULE THEATER' href='/schedule' />
          <div className='grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {isLoadingNews ? Array.from({ length: 4 }, (_, i) => <ScheduleSkeleton key={i} />) :
              scheduleData?.slice(0, 4).map((item, i) => <Schedule key={i} item={item} />)
            }
          </div>
        </LayoutHome>

      </div>
    </>
  )
}


export const LayoutHome = ({ children }) => {
  return (
    <div className='bg-primary-dark pt-5 pb-5 px-4 rounded-xl mb-7'>
      {children}
    </div>
  )
}




export const Headers = ({ title, href, linked }) => {
  return (
    <div className='flex items-center justify-between pr-1  mb-5'>
      <h1 className='lg:text-2xl max-sm:text-lg font-poppins font-light text-white capitalize'>{title}</h1>
      <Link to={href} className={`text-white flex items-center gap-x-3 lg:text-lg max-sm:text-sm font-poppins ${linked ? "hidden" : "flex"}`}>See more<IoArrowForwardOutline size={20} /></Link>
    </div>
  )
}


// export default home