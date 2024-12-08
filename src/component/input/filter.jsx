import { useState } from "react";
import {Search} from './search'


const menu = ["all", "gift", "viewer", "duration"]


const FilterLive = ({ onFilterChange,isFilterVisible, setIsFilterVisible }) => {
    const [selectedFilters, setSelectedFilters] = useState([]); // Menyimpan filter yang dipilih sementara

    const handleFilterToggle = (filter) => {
        setSelectedFilters(filter);
        onFilterChange(filter);
    };

    const handleApplyFilters = () => {
        onFilterChange(selectedFilters); // Kirim filter ke parent
        setIsFilterVisible(!isFilterVisible)
    };
    const isSelected = (filter) => selectedFilters.includes(filter);

    return (
        <div className="w-full bg-primary-dark p-4 rounded-lg shadow-md font-poppins overflow-hidden">
            <div className="w-full">
                <Search />
            </div>
            <h3 className="text-lg font-medium text-primary-text tracking-wider mb-4">Filter</h3>

            <div className="">
                {
                    menu.map((item, i) =>
                        <button className={`w-full text-center text-sm py-3 px-3 ${isSelected(item) ? "bg-orange text-white" : "bg-gray-700 text-gray-300"
                            } hover:bg-orange-hover hover:bg-opacity-70 ${i === 0 ? "rounded-t-xl" : "" // Tombol pertama
                            } ${i === menu.length - 1 ? "rounded-b-xl" : "" // Tombol terakhir
                            }`}
                            onClick={() => handleFilterToggle(item)}
                            key={i}>
                            {item}
                        </button>)
                }
            </div>

            {/* Tombol Apply */}
            <div className="mt-4 flex justify-end">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                    onClick={handleApplyFilters}
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default FilterLive;
