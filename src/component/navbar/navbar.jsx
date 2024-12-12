import Logo from '../../assets/logo2.png'

import { Link, useLocation } from 'react-router-dom'
import { Menu } from './menu'
import { IoHome, IoNewspaper } from "react-icons/io5";
import { FaRegCalendarAlt, FaRegClock, FaMedal } from "react-icons/fa";
import { PiMonitorPlayBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from 'react';

const menu = [
  { title: 'Home', path: '/home', icon: <IoHome size={22} /> },
  { title: 'news', path: '/news', icon: <IoNewspaper size={22} /> },
  { title: 'schedule', path: '/schedule', icon: <FaRegCalendarAlt size={22} /> },
  { title: 'history live', path: '/history-live', icon: <FaRegClock size={22} /> },
  { title: 'top member', path: '/top-member', icon: <FaMedal size={22} /> },
  { title: 'multi idn', path: '/multi-idn', icon: <PiMonitorPlayBold size={25} /> },
]


const navbar = () => {
  const [isOpen, setIsopen] = useState(false)
  const location = useLocation();
  const handleMenu = () => {
    setIsopen(!isOpen)
  }


  useEffect(() => {
    setIsopen(false);
  }, [location.pathname]);


  return (
    <>
      <nav className='lg:w-52 bg-primary-dark lg:h-screen z-50 text-white p-3 max-sm:sticky max-sm:top-0 max-sm:w-full' >

      <div className="flex items-center justify-between ">
        <div>
          <Link to='/'><img src={Logo} alt="logo" className='lg:w-20 max-md:w-20' /></Link>
        </div>
          <button onClick={handleMenu} className='lg:hidden' ><GiHamburgerMenu size={26}/></button>
      </div>




        <div className={`max-sm:fixed max-sm:bg-primary-dark max-sm:w-full max-sm:h-full z-50 max-sm:left-0 ${isOpen ? "max-sm:translate-x-0" : "max-sm:-translate-x-[100%]"} transition-all duration-300 `}>
          <ul className='mt-6 p-1 pt-4 max-sm:pl-6 max-sm:overflow-hidden'>
            {
              menu.map((item, i) => <Menu item={item} key={i} />)
            }
          </ul>
        </div>

      </nav>
    </>
  )
}

export default navbar