import { useState, useEffect } from 'react'
import { fetchNews } from '../../assets/api/api'
import { News } from '../../component/card/news'
import { SkeletonCardNews } from "../../component/skeletons/news-skeletons"
import { Pagination } from "../../component/pagination/pagination";
import { validatePageNumber } from '../../assets/validation/validation';

import { LayoutHome } from '../home/home'

const news = () => {
    const [newsData, setNewsData] = useState([])
    const [loading, setLoading] = useState(true);
    const [selectedTema, setSelectedTema] = useState('all');
    const [currentPage, setCurrentPage] = useState(1); // Halaman aktif
    const itemsPerPage = 12;


    useEffect(() => {
        const fetchingData = async () => {
            const data = await fetchNews('/news.json')
            setNewsData(data)
            setLoading(false)
        }
        fetchingData()
    }, [])

    // Filter data berdasarkan tema yang dipilih
    const filteredNews = selectedTema === 'all' ? newsData : newsData.filter(item => item.tema === selectedTema);

    // Validasi halaman
    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
    const validCurrentPage = validatePageNumber(currentPage, totalPages);
   
    const indexOfLastItem = validCurrentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);


    // Fungsi untuk berpindah halaman
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <>
            <div className='bg-primary-dark pt-2 lg:pb-2 max-sm:pb-4 px-6 rounded-xl lg:mb-7 max-sm:mb-6 lg:flex items-center justify-between'>
                <h2 className='text-xl font-poppins font-light text-primary-text capitalize mb-2 pr-5 mt-2'>News</h2>
            </div>

            <LayoutHome>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-4'>
                    {loading
                        ? Array.from({ length: itemsPerPage }, (_, i) => <SkeletonCardNews key={i} />) // Tampilkan skeleton
                        : currentItems.map((item, i) => <News key={i} item={item} />)
                    }
                </div>

            </LayoutHome>
                    {/* Kontrol Pagination */}
                    <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    />
        </>
    )
}

export default news