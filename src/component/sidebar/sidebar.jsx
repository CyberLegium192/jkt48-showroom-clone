import Navbar from "../navbar/navbar"

const sidebar = ({ children }) => {
  return (
    <div className="md:block lg:flex sm:block">
      <Navbar />

      <div className="bg-secondary-dark lg:h-screen max-sm:min-h-screen w-full overflow-x-hidden lg:pr-2 max-sm:px-3 lg:pl-2 pt-3 pb-5">
          { children }
      </div>
    </div>
  )
}

export default sidebar