import React from 'react'
import { fetchSchedule } from "../../assets/api/api"
import { isPastSchedule } from "../../assets/validation/validation";
import { useEffect, useState } from 'react'
import { Schedule } from '../../component/card/schedule'
import { ScheduleSkeleton } from '../../component/skeletons/schedule-skeletons';
import { Pagination } from '../../component/pagination/pagination';
import { LayoutHome } from '../home/home'
import { validatePageNumber } from '../../assets/validation/validation';

const schedule = () => {
    const [scheduleData, setScheduleData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedTema, setSelectedTema] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedTitle, setSelectedTitle] = useState("");
    const [currentPage, setCurrentPage] = useState(1); // Halaman aktif
    const itemsPerPage = 17;


    useEffect(() => {
        const fetchDataSchedule = async () => {
            const data = await fetchSchedule('/schedule.json'); // Tunggu data dari fetchNews
            setScheduleData(data); // Set data ke state
            setIsLoading(false)
        };
        fetchDataSchedule();
    }, [])

    // filtering data schedule
    const filteredSchedules = scheduleData.filter((item) => {
        const itemMonth = item.date.split("-")[1];
        const title = item.title.toLowerCase()
        return (
            (selectedTema === "" || item.tema === selectedTema) &&
            (selectedMonth === "" || itemMonth === selectedMonth) &&
            (selectedTitle === "" || item.title.toLowerCase() === selectedTitle)
        );
    });


    const upcomingSchedules = scheduleData.filter(
        (item) => !isPastSchedule(item.date, item.time)
    );

    // Validasi halaman
    const totalPages = Math.ceil(filteredSchedules.length / itemsPerPage);
    const validCurrentPage = validatePageNumber(currentPage, totalPages);

    const indexOfLastItem = validCurrentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredSchedules.slice(indexOfFirstItem, indexOfLastItem);

    // Fungsi untuk berpindah halaman
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };




    const NextTheaterDes = () => {
        return (
            <div className='grid md:grid-cols-2 lg:flex flex-col gap-4 mb-4 items-center'>
                {
                    upcomingSchedules.length > 0 ? (<p className='text-secondary-text text-center text-sm font-poppins'>No upcoming theater</p>) : (
                        isLoading ? <ScheduleSkeleton recent={true} /> : (
                            upcomingSchedules?.filter(item => item.tema !== "/images/icon.cat2.png").map((item, i) => <Schedule key={i} item={item} />)
                        )
                    )
                }
            </div>
        )
    }

    const NextTheaterMobile = () => {
        return (
            <div className='grid md:grid-cols-2 lg:flex grid-cols-2 gap-4 items-center'>
                {
                    upcomingSchedules.length > 0 ? (<p className='text-secondary-text text-center text-sm font-poppins'>No upcoming theater</p>) : (
                        isLoading ? <ScheduleSkeleton recent={true} /> : (
                            upcomingSchedules?.filter(item => item.tema !== "/images/icon.cat2.png").map((item, i) => <Schedule key={i} item={item} />)
                        )
                    )
                }
            </div>

        )
    }


    return (
        <div className='lg:flex gap-x-3'>

            <div>

                {/* NEXT THEATER WHEN OPEN ON PHONE */}
                <div className='w-full lg:hidden'>
                    <div className='bg-primary-dark pt-2 pb-2 px-6 rounded-xl mb-4'>
                        <h2 className='text-xl font-poppins font-light text-primary-text capitalize mb-2 pr-5 mt-2'>next show</h2>
                    </div>
                    <LayoutHome>
                        <NextTheaterMobile />
                    </LayoutHome>
                </div>


                {/* HEADER  */}
                <div className='bg-primary-dark pt-2 lg:pb-2 max-sm:pb-4 px-6 rounded-xl mb-7 lg:flex items-center justify-between'>
                    <h2 className='text-xl font-poppins font-light text-primary-text capitalize mb-2 pr-5 mt-2'>history theater</h2>
                </div>



                {/* JADWAL TEATER YANG LALU PC OR PHONE*/}
                <LayoutHome>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {isLoading
                            ? Array.from({ length: itemsPerPage }, (_, i) => (
                                <div key={i} className="flex justify-center">
                                    <ScheduleSkeleton recent={false} />
                                </div>
                            ))
                            : currentItems
                                ?.filter((item) => item.tema !== "/images/icon.cat2.png")
                                .map((item, i) => <Schedule key={i} item={item} />)}
                    </div>
                </LayoutHome>


                {/* PAGINATION CONTROL */}
                <div className='flex items-center justify-center'>
                    {isLoading ? null :<Pagination currentPage={currentPage} totalPages={totalPages} 
                                        onPageChange={handlePageChange} />
                    }
                </div>

            </div>



            {/* JADWAL TEATER SELANJUT NYA ON DESKTOP */}
            <div className='w-64 max-sm:hidden'>
                <div className='bg-primary-dark pt-2 pb-2 px-6 rounded-xl lg:mb-7 max-sm:mb-4'>
                    <h2 className='text-xl font-poppins font-light text-primary-text capitalize mb-2 pr-5 mt-2'>next show</h2>
                </div>
                <LayoutHome>
                    <NextTheaterDes />
                </LayoutHome>
            </div>




        </div>
    )
}

export default schedule