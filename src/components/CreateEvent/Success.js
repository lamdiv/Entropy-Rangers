import { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";


function Success(props) {
 
  return (
    <div className="text-center p-4">
    <div className="flex justify-center items-center mt-6 relative">
      <span
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8"
          viewBox="0 0 512 512"
        >
          <path
            d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
            fill="none"
            stroke="#7DE081"
            strokeMiterlimit="10"
            strokeWidth="40"
          />
          <path
            fill="none"
            stroke="#7DE081"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="40"
            d="M352 176L217.6 336 160 272"
          />
        </svg>
      </span>
    </div>
    <h2 className="text-xl font-semibold mt-4">Event has been Created!</h2>

    <Link to="/event" className='mt-6 font-bold text-primary cursor-pointer'>Go to Event Page</Link>
  </div>
  )
}

export default Success;