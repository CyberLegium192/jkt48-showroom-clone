import { useState, useEffect } from "react";
import { filterHistoryLive } from "../../assets/api/history-live";
import {CardHistory} from "../../component/card/card-history";
import { Loading } from "../../component/input/loading";
import FilterLive from "../../component/input/filter";
import { IoSearch } from "react-icons/io5";



const Live = () => {
  const [allDataHistory, setAllDataHistory] = useState([]); // Data mentah dari API
  const [searchValue, setSearchValue] = useState(""); // Pencarian nama
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState("all"); // Filter kategori
  const [isSort, setIsSort] = useState(true)// filter sort up or down
  const [statusMem, setStatusMem] = useState("")
  const [isFilterVisible, setIsFilterVisible] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Memanggil data berdasarkan kategori filter
        const data = await filterHistoryLive(searchValue, filterCategory, isSort, statusMem); 
        setAllDataHistory(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, [searchValue, filterCategory, isSort, statusMem]);




  return (
    <div className="flex flex-col lg:flex-row-reverse gap-2 relative">


      {/* Sidebar Filter */}
      <aside
        className={`fixed lg:static max-sm:top-16 left-0 w-full lg:w-1/4 bg-secondary-dark z-40 transform  ${
          isFilterVisible ? "translate-y-0" : "-translate-y-full"
        } lg:translate-y-0 transition-transform duration-300 lg:relative lg:shadow-none shadow-lg lg:h-auto h-screen`}
      >
          <FilterLive onFilterChange={setFilterCategory} isFilterVisible={isFilterVisible} setIsFilterVisible={setIsFilterVisible} setSearchValue={setSearchValue} setIsSort={setIsSort} setStatusMem={setStatusMem} />
      </aside>

      {/* Konten Utama */}
      <main className="w-full lg:w-[75%] px-2 max-sm:pt-2">
        <div className="bg-primary-dark pt-2 pb-3 px-6 max-sm:px-5 max-sm:py-3 rounded-xl mb-7 flex items-center justify-between">
          <h2 className="text-xl max-sm:text-lg font-poppins font-light text-primary-text capitalize">
            Recent Live
          </h2>
            <button
            className="text-white px-4 py-1 rounded-lg shadow-md lg:hidden"
            onClick={() => setIsFilterVisible(!isFilterVisible)}
          >
            <IoSearch size={20}/>
          </button>
        </div>

        <div className="space-y-8 relative">
        {loading ? (
          <Loading />
        ) : (
          <div className="space-y-8 relative">
            {Array.isArray(allDataHistory) && allDataHistory.length > 0 ? (
              allDataHistory.map((item, i) => (
                <CardHistory item={item} key={i} />
              ))
            ) : (
              <div className="h-96 w-full flex items-center justify-center absolute">
                <p className="text-center font-poppins lg:text-lg font-semibold text-primary-text tracking-widest">
                  Data not found
                </p>
              </div>
            )}
          </div>
        )}
        </div>

      </main>
    </div>
  );
};

export default Live;
