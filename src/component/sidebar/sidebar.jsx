import Navbar from "../navbar/navbar"

const sidebar = ({ children }) => {
  return (
    <div className="md:block lg:flex sm:block">
      <Navbar />

      <div className="bg-secondary-dark lg:h-screen max-sm:min-h-screen w-full overflow-x-hidden lg:pl-3 lg:pr-2 max-sm:px-3  pt-4 pb-5">
          { children }
      </div>
    </div>
  )
}

export default sidebar