import {Link, useLocation} from 'react-router-dom'
 


export const Menu = ( {item} ) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(item.path);
  return (
    <>
    <li>
      <Link className={`text-lg mb-9 font-poppins hover:scale-90 hover:duration-300 transition-all inline-flex capitalize items-center justify-center gap-x-4 ${
          isActive ? 'text-orange' : 'text-white'
        }`}>{item.icon}
      {item.title}</Link>
    </li>
    </>
  )
}
