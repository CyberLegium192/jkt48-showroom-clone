import {useState} from 'react';
export const Search = ({setValue}) => {
    const [search, setSearch] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if(search.length == 0){
            setValue(" ")
        } else{
            setValue(search)
        }
    }


    return (

        <form className="w-full max-sm:mb-4 mb-3" onSubmit={handleSubmit}>
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                     className="block w-full p-2 text-sm ps-10 font-poppins text-white font-medium tracking-wider border border-gray-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search member live"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </form>
    )
}
