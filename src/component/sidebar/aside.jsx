import { useState } from "react";

export const Aside = ({children}) => {

    const [isFilterVisible, setIsFilterVisible] = useState(false); 
    return(
        <aside
        className={`fixed lg:static max-sm:top-16 left-0 w-full lg:w-[26%] bg-secondary-dark z-40 transform  ${
          isFilterVisible ? "translate-y-0" : "-translate-y-full"
        } lg:translate-y-0 transition-transform duration-300 lg:relative lg:shadow-none shadow-lg lg:h-auto h-screen`}
      >
        {children}
      </aside>
    )
}