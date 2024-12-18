import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export const Schedule = ({ item }) => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1); // Mengatur tanggal besok

  // Membandingkan tanggal besok dengan tanggal pada item
  const isTomorrow = new Date(item.date).toDateString() === tomorrow.toDateString();

  const formattedDate = new Date(item.date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });


  return (
    <Link className='overflow-hidden relative rounded-lg p-3 bg-gray-800'>
      <div className='w-full h-40 overflow-hidden relative'>
          <img src={item.banner} alt="poster image" className='object-center object-cover w-full h-full rounded-lg'/>
          {isTomorrow && <span className='absolute top-0 left-0 text-sm py-1 px-5 bg-orange bg-opacity-90 rounded-tl-lg rounded-br-lg font-poppins text-white'>besok</span>}
      </div>
      
      <div className='mt-3 pl-1 relative'>
        <p className='font-poppins text-sm text-white font-medium'>{item.title}</p>
        <p className='text-xs text-gray-300 my-2 font-poppins font-normal'>{formattedDate}</p>
        <p className='text-xs inline-block right-0 font-poppins text-white bg-blue-600 px-3 py-1 rounded-xl'>{item.member_count == 0 ? "no" : item.member_count} member</p>
      </div>
      


    </Link>
  )
}
