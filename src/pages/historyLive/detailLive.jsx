import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {detailLive} from '../../assets/api/history-live'

const DetailLive = () => {
    const [data, setData] = useState()
    const { data_id } = useParams() 


    useEffect(() => {
        const fetchLogDetailLive = async() => {
            const response = await detailLive(data_id)
            setData(response)
        }
        fetchLogDetailLive()
        
    }, [])
    

  return (
    <div>{data_id}</div>
  )
}

export default DetailLive