import { useEffect, useState } from 'react'
import { FaRegClock } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from 'react-router-dom'
import { imagePosterTheater } from '../../assets/validation/validation';

export const Schedule = ({ item }) => {
  const [desk, setDesk] = useState()
  const [imageCover, setImageCover] = useState()
  useEffect(() => {
    const validation = () => {
      const hasil = imagePosterTheater(item.title)
      setDesk(hasil.description)
      setImageCover(hasil.urlCover)
    }
    validation()
  }, [])



  return (
    <Link className='overflow-hidden relative rounded-lg border-2 border-border-color' to={`https://jkt48.com${item.linkDetail}`}>
      <div className="w-full h-44 overflow-hidden">
        <img src={imageCover} alt={item.title} className='object-cover h-full w-full hover:scale-110 hover:duration-500 transition-all' />
      </div>

      {/* Gradien dan teks */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/40 to-black/60 hover:bg-black/70 transition-all duration-300">

        {/* Waktu dan tanggal */}
        <div className="absolute top-0 left-0 bg-black/40 px-2 py-1 rounded-lg text-primary-text text-xs font-semibold font-poppins flex flex-col gap-y-1">
          <span className="block">{item.time}</span>
          <span className="block">{item.date}</span>
        </div>

        {/* Judul di tengah bawah */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-poppins font-semibold text-center">
          <h2>{item.title}</h2>
        </div>
      </div>



    </Link>
  )
}
