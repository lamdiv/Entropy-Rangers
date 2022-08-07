import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Authorization from "./Authorization";
import axios from 'axios';
import AuthContext from "../../store/auth-context";

function Login() {

  const [user, setUser] = useState({
    username: '',
    password: '',
    
  })

  const ctx = useContext(AuthContext)

  const navigate = useNavigate()


  const onChangeHandler = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  }

  const SubmitFormHandler = async (e) =>  {
    e.preventDefault();
    let headersList = {
     "Accept": "*/*",
     "Content-Type": "application/x-www-form-urlencoded" 
    }
    

    let bodyContent = `username=${user.username}&password=${user.password}`;
    
    let reqOptions = {
      url: "https://co2-calculator-sahajrajmalla.herokuapp.com/login/",
      method: "POST",
      headers: headersList, 
      data: bodyContent,
    }
    
    let response = await axios.request(reqOptions);
    // console.log(response.data);
    ctx.onLogin(response.data)

    navigate('/')

  }


  return (
    <Authorization>
    <form className="w-full sm:w-[25rem]" onSubmit={SubmitFormHandler}>
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
              onChange={onChangeHandler}
              name="username"
              value={user.username}
              placeholder="Enter your email"
              className="block w-full px-3 py-2 mt-1 text-gray-700  border border-gray-300 rounded-md focus:bg-white outline-none"
              required
            />
        </div>

        <div className="text-left w-full mt-4">
          <label className="text-gray-700 font-medium">Password</label>
          <input
              type="password"
              onChange={onChangeHandler}
              name="password"
              value={user.password}
              placeholder="Enter your password"
              className="block w-full px-3 py-2 mt-1 text-gray-700  border border-gray-300 rounded-md focus:bg-white outline-none"
              required
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
