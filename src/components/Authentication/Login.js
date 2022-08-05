import { Link } from "react-router-dom";
import Authorization from "./Authorization";

function Login() {
  return (
    <Authorization>
    <form className="w-full sm:w-[25rem]">
      <div className="w-full p-3 sm:p-6 bg-white rounded-xl text-center">
        <div>
          <h2 className="text-xl font-bold">Welcome Back</h2>
          <p className="text-md text-gray-600">
            Enter your credentials to log in.
          </p>
        </div>

        <div className="text-left w-full mt-6">
          <label className="text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="block w-full px-3 py-2 mt-1 text-gray-700  border border-gray-300 rounded-md focus:bg-white outline-none"
          />
        </div>

        <div className="text-left w-full mt-4">
          <label className="text-gray-700 font-medium">Password</label>
          <input
            type="email"
            placeholder="Enter your password"
            className="block w-full px-3 py-2 mt-1 text-gray-700  border border-gray-300 rounded-md focus:bg-white outline-none"
          />
        </div>

        <div className="flex items-center justify-end mt-3">
          <div className="text-sm">
            <Link to="/account/forget-password" className="text-dark font-medium hover:font-semibold">
              Forgot your password?
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full rounded-md flex items-center justify-center gap-x-3 py-2 px-6 border text-md font-bold text-white bg-primaryDark hover:bg-primary duration-300 focus:outline-none"
          >
            Log In
          </button>
        </div>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-slate-300 text-md font-medium">
          Don't have an account?
          <Link to="/account/register" className="text-primary font-bold ml-2">
            Sign Up
          </Link>
        </h3>
      </div>
    </form>
    </Authorization>
  );
}

export default Login;
