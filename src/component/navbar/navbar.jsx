import Logo from '../../assets/logo2.png'
import {Link} from 'react-router-dom'
import {Menu}  from './menu'
import { IoHome, IoNewspaper  } from "react-icons/io5";
import { FaRegCalendarAlt, FaRegClock, FaMedal } from "react-icons/fa";
import { PiMonitorPlayBold } from "react-icons/pi";

const menu = [
  {title: 'Home', path: '/', icon: <IoHome size={22}/> },
  {title: 'news', path: '/news', icon: <IoNewspaper size={22} />},
  {title: 'schedule', path: '/schedule', icon: <FaRegCalendarAlt size={22}/>},
  {title: 'history live', path: '/history-live', icon: <FaRegClock size={22}/>},
  {title: 'top member', path: '/top-member', icon: <FaMedal size={22}/>},
  {title: 'multi idn', path: '/multi-idn', icon: <PiMonitorPlayBold size={25} />},
]


const navbar = () => {
  return (
    <div className='lg:w-80 bg-primary-dark lg:h-screen text-white p-3' >
      
      <div>
        <Link to='/'><img src={Logo} alt="logo" className='lg:w-28 max-md:w-20 '/></Link>
      </div>

        <div>
          <ul className='mt-6 p-1 pt-4'>
            {
              menu.map((item, i) => <Menu item={item} key={i} />)
            }
          </ul>
        </div>

    </div>
  )
}

export default navbar