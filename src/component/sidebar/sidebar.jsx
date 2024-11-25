import Navbar from "../navbar/navbar"

const sidebar = ({ children }) => {
  return (
    <div className="md:block lg:flex sm:block">
      <Navbar />

      <div className="bg-secondary-dark h-screen w-full overflow-x-hidden px-5 py-4">
          { children }
      </div>
    </div>
  )
}

export default sidebar