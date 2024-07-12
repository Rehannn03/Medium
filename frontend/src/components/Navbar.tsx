
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="border-b flex justify-between px-10 py-4 bg-gray-700">
      <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer text-2xl font-bold text-white">
        Blog Spot
      </Link>
      <div className='flex flex-row'>
        <Link to={`/publish`}>
          <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
        </Link>

        <div className="h-10 w-10 rounded-full bg-slate-400 flex items-center justify-center mr-4">
          <span className="text-white text-xl">R</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar