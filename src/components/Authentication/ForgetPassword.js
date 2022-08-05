import React from 'react'
import { Link } from 'react-router-dom'
import Authorization from './Authorization'

function ForgetPassword() {
  return (
    <Authorization>
        <form className="w-full sm:w-[25rem]">
      <div className="w-full p-3 sm:p-6 bg-white rounded-xl text-center">
        <div className='space-y-2'>
          <h2 className="text-xl font-bold">Did you forget your password?</h2>
          <p className="text-md text-gray-600">
            We will send you an email with reset link if your email is registered.
          </p>
        </div>

        <div className="text-left w-full mt-6">
          <input
            type="email"
            placeholder="Enter your registered email"
            className="block w-full px-3 py-2 mt-1 text-gray-700  border border-gray-300 rounded-md focus:bg-white outline-none"
          />
        </div>


        <div className="mt-4">
          <button
            type="submit"
            className="w-full rounded-md flex items-center justify-center gap-x-3 py-2 px-6 border text-md font-bold text-white bg-primaryDark hover:bg-primary duration-300 focus:outline-none"
          >
            Send Link
          </button>
        </div>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-slate-300 text-md font-medium">
          Go back to
          <Link to="/account/login" className="text-primary font-bold ml-2">
            Sign In
          </Link>
        </h3>
      </div>
    </form>
    </Authorization>
  )
}

export default ForgetPassword