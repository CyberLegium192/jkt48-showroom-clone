import {useEffect, useState} from 'react'
import axios from 'axios'

const multiIdn = () => {
    useEffect(() => {
        const fetching = async() => {
            const response = await axios.get('https://player-stream.vercel.app/api/proxy?url=https://showroom-admin.vercel.app/leaderboard-member/showroom?page=1&filterBy=month&year=2024')
        const data = response.data
        console.log(data)
        }
        fetching()
    }, [])





  return (
    <div>multiIdn</div>
  )
}

export default multiIdn