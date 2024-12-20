import { FaRegCalendarAlt } from "react-icons/fa";
import { fetchSchedule } from "../../assets/api/api"
import { useEffect, useState } from 'react'
import { Schedule } from '../../component/card/scheduleCard'
import { ScheduleSkeleton } from '../../component/skeletons/schedule-skeletons';
import { LayoutHome } from '../home/home'
import { Headers } from '../home/home';



const schedule = () => {
    const [scheduleData, setScheduleData] = useState([])
    const [upComingSchedulesTheater, setUpcomingScheduleTheater] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const fetchDataSchedule = async () => {
            const data = await fetchSchedule("/event"); // Tunggu data dari fetchNews
            setUpcomingScheduleTheater(data?.data.theater.upcoming); // Set data ke state
            setScheduleData(data?.data.theater.recent)
            setIsLoading(false)
        };
        fetchDataSchedule();
    }, [])
    return (
        <>
            <LayoutHome>
                <Headers title='Next Theater' href='/schedule' icons={<FaRegCalendarAlt size={23} />} colors="text-blue-700" linked={true} />
                <div className="grid grid-cols-3 gap-4">
                    { isLoading ? Array.from({ length: 3 }, (_, i) => <ScheduleSkeleton key={i} />) :
                        upComingSchedulesTheater?.map((item, i) => <Schedule key={i} item={item} />)
                    }
                </div>

            </LayoutHome>
        </>
    )
}

export default schedule