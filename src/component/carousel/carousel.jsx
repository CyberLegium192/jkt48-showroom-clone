import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react'
import { historyLive } from '../../assets/api/history-live';
import HistoryCard from '../card/history-card'
import { HistoryLiveSkeleton } from '../skeletons/history-card-skeletons';


const carousel = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsloading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const data = await historyLive(''); // Tunggu data dari historyLive
      setData(data); // Set data ke state
      setIsloading(false)
    }
    fetchData();
  }, [])

  return (
    <>
      <Swiper
        // slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={25}
        navigation={true}
        modules={[Navigation]}
        className="mb-5"
      >
        {isLoading ? Array.from({ length: 3 }, (_, i) => (
          <SwiperSlide key={i}>
            <HistoryLiveSkeleton />
          </SwiperSlide>
        )) :
          data.slice(0, 6).map((item, i) => <SwiperSlide key={i}>{<HistoryCard item={item} />}</SwiperSlide>)
        }
      </Swiper>
    </>
  )
}

export default carousel;