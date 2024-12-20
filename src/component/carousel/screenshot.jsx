import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay,Pagination } from 'swiper/modules';

export const Screenshot = ({ data }) => {

    
    return (
        <div className='h-full select-none'>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                autoplay={{
                    delay: 2700,
                    disableOnInteraction: false,
                }}
                spaceBetween={20}
                loop={true}
                navigation={false}
                // pagination={{
                //     clickable: true,
                //   }}
                modules={[Navigation, Autoplay, Pagination]}
                className="h-full w-full"
            >
                {
                    data?.list?.slice(2, 10).map((item, i) =>
                        <SwiperSlide key={i}>
                            <img
                                src={`https://res.cloudinary.com/haymzm4wp/image/upload/${data?.folder}/${item}.${data?.format}`}
                                alt="picture live" className='w-full h-full rounded-lg object-cover object-center'
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}
