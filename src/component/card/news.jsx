import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { validateThemeNews } from '../../assets/validation/validation'


export const News = ({item, lineClimp}) => {
  const [validateTema , setValidateTema] = useState()
  const [bgTema , setBgtema] = useState()
  const [hoverBgTema , setHoverBgtema] = useState()

  useEffect(() => {
    const validate = () => {
      const data = validateThemeNews(item.tema)
      setValidateTema(data)
      setBgtema(data.badgeBg)
      setHoverBgtema(data.hoverBg)
    }
    validate()
  }, [])
  
  
  return (
    <Link className={`rounded-lg inline-block bg-card-bg border-2 border-border-color w-full relative px-2 pt-2 pb-3 ${hoverBgTema} hover:duration-300 transition-all hover:-translate-y-2`} to={`https://jkt48.com${item.linkDetail}`} >
      <div className='flex items-center justify-between px-2 font-poppins font-semibold'>
        <p className={`${bgTema} px-3 py-[1px] rounded-full text-xs uppercase text-white `}>{validateTema?.title}</p>
        <span className='text-sm text-white font-normal '>{item.time}</span>
      </div>
      <h4 className={`font-poppins text-white text-sm font-medium tracking-widest px-2 mt-3 ${lineClimp ? 'line-clamp-3' : null}`}>{item.title}</h4>
    </Link>
  )
}
