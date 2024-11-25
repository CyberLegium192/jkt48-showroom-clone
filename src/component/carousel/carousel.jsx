import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Card from '../card/card'
const tes = [
  {title: 'noval'},{title: 'noval'},{title: 'noval'},{title: 'noval'},{title: 'noval'},{title: 'noval'}
]

import { Pagination } from 'swiper/modules';
const carousel = () => {

  return (
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          tes.map((item, i) => <SwiperSlide>{<Card />}</SwiperSlide>)
        }
      </Swiper>
  )
}

export default carousel;