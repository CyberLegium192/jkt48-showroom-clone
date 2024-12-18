import { useState } from "react";
import {Search} from './search'
import { HiSortAscending, HiSortDescending } from "react-icons/hi";

const menu = ["date", "gift", "views", "duration"]


const FilterLive = ({ onFilterChange,isFilterVisible, setIsFilterVisible, setSearchValue, setIsSort, setStatusMem }) => {
    const [selectedFilters, setSelectedFilters] = useState("date"); // Menyimpan filter yang dipilih sementara
    const [searchInput, setSearchInput] = useState("")
    const [activeTab, setActiveTab] = useState("active");
    const [sortUp, setSortUp] = useState(true)


    const handleApplyFilters = () => {
        setIsFilterVisible(!isFilterVisible)
        onFilterChange(selectedFilters); // Kirim filter ke parent
        // setSearchValue(searchInput)
        setIsSort(sortUp)
        setStatusMem(activeTab)
    };

    const handleSort = () => {
        setSortUp(!sortUp)
    }

    const handleTabSelection = (tab) => {
        setActiveTab(tab);
    };



    const isSelected = (filter) => selectedFilters.includes(filter);

    return (
        <div className="w-full lg:fixed lg:top-0 bg-primary-dark p-4 rounded-lg shadow-md font-poppins overflow-hidden">
            <div className="w-full">
                <Search setValue={setSearchValue}/>
            </div>



            <div className='flex items-center justify-between'>
                <h3 className="text-lg font-light text-primary-text tracking-wider mb-6 mt-5">sort</h3>
                <button className="text-white bg-gray-700 hover:bg-gray-800 duration-300 w-7 h-7 rounded-[5px] flex items-center justify-center" onClick={handleSort}>
                    {
                        sortUp ? <HiSortAscending size={21}/> : <HiSortDescending size={21}/>
                    }
                    
                </button>
            </div>

            <div className="">
                {
                    menu.map((item, i) =>
                        <button className={`w-full text-center text-sm py-3 px-3 ${isSelected(item) ? "bg-orange text-white" : "bg-gray-700 text-gray-300"
                            } hover:bg-orange-hover hover:bg-opacity-70 ${i === 0 ? "rounded-t-xl" : "" // Tombol pertama
                            } ${i === menu.length - 1 ? "rounded-b-xl" : "" // Tombol terakhir
                            }`}
                            onClick={() => setSelectedFilters(item)}
                            key={i}>
                            {item}
                        </button>)
                }
            </div>


            <div className="flex items-center justify-between mt-4">
                <button className={`text-white w-[50%] bg-gray-700 py-2 rounded-s-lg text-sm font-poppins font-medium capitalize tracking-wider ${activeTab === "active" ? "bg-orange" : "bg-gray-700"} hover:bg-orange-hover hover:bg-opacity-65`} onClick={() => handleTabSelection("active")}>active</button>


                <button className={`text-white w-[50%] bg-gray-700 py-2 rounded-e-lg text-sm font-poppins font-medium capitalize tracking-wider ${activeTab === "graduated" ? "bg-orange" : "bg-gray-700"} hover:bg-orange-hover hover:bg-opacity-65`}
                onClick={() => handleTabSelection("graduated")}>graduated</button>
                
            </div>

            {/* Tombol Apply */}
            <div className="">
                <button
                    className="text-white font-poppins bg-orange hover:bg-orange-hover duration-300 w-full mt-5 py-2 rounded-lg"
                    onClick={handleApplyFilters}
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default FilterLive;
