import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// IMPORT ICONS
import { IoArrowForwardOutline } from "react-icons/io5"
import { CiStreamOn } from "react-icons/ci";
import { ImNewspaper } from "react-icons/im";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

// IMPORT COMPONENT
import Carousel from '../../component/carousel/carousel'
import { News } from "../../component/card/news"
import { Schedule } from '../../component/card/scheduleCard';
import {Onlive} from '../../component/card/onlive';
import { YoutubeVideo } from '../../component/card/youtube-video';
// IMPORT API
import { fetchNews, fetchSchedule, youtubeData } from "../../assets/api/api"
import { onLiveShowroom, onLiveIdn } from '../../assets/api/history-live';
// IMPORT SKELETONS
import { SkeletonCardNews } from '../../component/skeletons/news-skeletons';
import { ScheduleSkeleton } from '../../component/skeletons/schedule-skeletons';
import { YoutubeSkeletonCard } from '../../component/skeletons/youtubeSkeletons';

export const Home = () => {
  const [newsData, setNewsData] = useState([])
  const [scheduleData, setScheduleData] = useState([])
  const [onLive, setOnlive] = useState([])
  const [onLiveIDN, setOnliveIDN] = useState([])
  const [dataYoutube, setDataYoutube] = useState([])
  const [isLoadingNews, setIsLoadingNews] = useState(true)
  const [isLoadingSchedule, setIsLoadingSchedule] = useState(true)
  const [isLoadingYoutube, setIsLoadingYoutube] = useState(true)


  useEffect(() => {
    const fetchDataNews = async () => {
      const data = await fetchNews('/news.json'); 
      setNewsData(data); // Set data ke state
      setIsLoadingNews(false)
    };
    fetchDataNews();

    const fetchDataSchedule = async () => {
      const data = await fetchSchedule(); // Tunggu data dari fetchNews
      setScheduleData(data.data.theater.recent); // Set data ke state
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

    const fetchYoutube = async () => {
      const data = await youtubeData()
      setDataYoutube(data)
      setIsLoadingYoutube(false)
    }
    fetchYoutube()
  }, [])


  return (
    <>
      <div>
        {/* ONLIVE MEMBER */}
          <LayoutHome>
            <Headers title='live member' linked={true} icons={<CiStreamOn size={26} />} colors="text-red-600" />
            <div className='grid grid-cols-5 gap-6 max-sm:grid max-sm:grid-cols-2 '>
              {
                onLive?.map((item, i) => <Onlive item={item} key={i} />)
              }
              {
                onLiveIDN?.map((item, i) => <Onlive item={item} key={i} />)
              }
            </div>
          </LayoutHome>

        {/* HISTORY LIVE */}
        <LayoutHome>
          <Headers title='live terakhir' href='/history-live' icons={<AiOutlineFieldTime size={26} />} colors="text-white" />
          <Carousel />
        </LayoutHome>


        {/* NEWS PAGE */}
        <LayoutHome>
          <Headers title='NEWS' href='/news' icons={<ImNewspaper size={26} />} colors="text-red-700" />
          <div className='grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-5 mb-4'>
            {isLoadingNews ? Array.from({ length: 6 }, (_, i) => <SkeletonCardNews key={i} />) :
              newsData.slice(0, 6).map((item, i) => <News key={i} item={item} lineClimp={true} />)
            }
          </div>
        </LayoutHome>



        {/* SCHEDULE THEATER */}
        <LayoutHome>
          <Headers title='SCHEDULE THEATER' href='/schedule' icons={<FaRegCalendarAlt size={26} />} colors="text-blue-700" />
          <div className='grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {isLoadingSchedule ? Array.from({ length: 4 }, (_, i) => <ScheduleSkeleton key={i} />) :
              scheduleData?.slice(0, 4).map((item, i) => <Schedule key={i} item={item} />)
            }
          </div>
        </LayoutHome>

        {/* YOUTUBE INFO */}
        <LayoutHome>
          <Headers title='Youtube JKT48 TV' href='/' icons={<FaYoutube size={26} />} colors="text-red-700" />
          <div className='grid max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {isLoadingYoutube ? Array.from({ length: 4 }, (_, i) => <YoutubeSkeletonCard key={i} />) :
              dataYoutube?.slice(0, 8).map((item, i) => <YoutubeVideo key={i} item={item} />)
            }

          </div>
        </LayoutHome>

      </div>
    </>
  )
}


export const LayoutHome = ({ children }) => {
  return (
    <div className='bg-primary-dark pt-5 pb-5 px-3 rounded-xl mb-7'>
      {children}
    </div>
  )
}



export const Headers = ({ title, href, linked, icons, colors }) => {
  return (
    <div className='flex items-center justify-between px-2 mb-5'>
      <h1 className='lg:text-xl max-sm:text-lg font-poppins font-medium text-white capitalize flex items-center gap-x-3'>
        <p className={colors}>{icons}</p>
        {title}
      </h1>
      <Link to={href} className={`text-white flex items-center gap-x-1 lg:text-sm max-sm:text-sm font-poppins ${linked ? "hidden" : "flex"}`}>See more<IoArrowForwardOutline size={20} /></Link>
    </div>
  )
}


// export default home