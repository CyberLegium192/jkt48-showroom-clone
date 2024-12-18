import { Link } from 'react-router-dom'
import Sayonara from '../../assets/sayonara.webp'



export const HeaderDetail = ({data}) => {
    const grade = data?.room_info?.is_graduate
    const gen = data?.room_info?.generation.replace("-jkt48", " ").replace("gen", " ")

    const statusMem = grade ? "graduate" : "active"


    return (
        <div>
            <img src={Sayonara} alt="banner" className='w-full'/>
            
            <div className=' bg-primary-dark pb-4'>
                {/* PROFILE PICTURE */}
                <div className='relative'>
                    <img src={data?.room_info?.img_alt} alt="member photo" className='absolute -top-10 w-28 h-28 max-sm:w-24 max-sm:h-24 object-cover object-center rounded-full ml-3 border-[6px] border-primary-dark'/>
                </div>

                {/* SOSIAL MEDIA */}
                <div className='flex w-full justify-end px-4 pt-5 pb-4 gap-x-4'>
                    <Link to={`https://www.showroom-live.com/room/profile?room_id=${data?.room_id}`} className='text-white bg-blue-500 px-4 py-2 font-poppins text-sm max-sm:text-xs rounded-full font-medium'>showroom</Link>
                    <Link className='text-white bg-blue-500 px-4 py-2 max-sm:text-xs font-poppins text-sm rounded-full font-medium'>share</Link>
                </div>

                {/* BIODATA */}
                <div className=' px-5 pt-2'>
                    <h2 className='text-3xl max-sm:text-2xl text-white font-poppins font-medium tracking-wider capitalize mb-1'>{data?.room_info?.nickname}</h2>
                    <p className='text-[14px] max-sm:text-xs capitalize font-poppins font-semibold text-secondary-text'><span className={`${statusMem == "active" ? "text-green-600" : "text-red-600"} mr-2`}>{statusMem}</span> {gen}th generation</p>
                </div>
            </div>


        </div>
    )
}
