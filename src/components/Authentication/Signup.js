import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Authorization from "./Authorization";

function Signup() {

  const [createUser, setCreateUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()


  const onChangeHandler = (e) => {
    setCreateUser({...createUser,[e.target.name]:e.target.value})
  }

  const SubmitFormHandler = (e) =>  {
    e.preventDefault();

    console.log(createUser)


    fetch('https://co2-calculator-sahajrajmalla.herokuapp.com/user/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(createUser)
    }).then(() =>  {
        console.log('New User Posted!');
        setCreateUser({
          name: '',
          email: '',
          password: ''
        })
        navigate("/account/login");
        // history.go(-1)
        // history.push('/home')
    }
    
    )
  }
  return (
    <Authorization>
      <form className="w-full sm:w-[25rem]" onSubmit={SubmitFormHandler} >
        <div className="w-full p-3 sm:p-6 bg-white rounded-xl text-center">
          <div>
            <h2 className="text-xl font-bold">Create an Account</h2>
            <p className="text-md text-gray-600">
              Enter your credentials to register.
            </p>
          </div>

          <div className="text-left w-full mt-6">
            <label className="text-gray-700 font-medium">Name</label>
            <input
              type="text"
              onChange={onChangeHandler}
              name="name"
              value={createUser.name}
              placeholder="Enter your name"
              className="block w-full px-3 py-2 mt-1 text-gray-700  border border-gray-300 rounded-md focus:bg-white outline-none"
              required
            />
          </div>

          <div className="text-left w-full mt-6">
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              onChange={onChangeHandler}
              name="email"
              value={createUser.email}
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
              value={createUser.password}
              placeholder="Enter your password"
              className="block w-full px-3 py-2 mt-1 text-gray-700  border border-gray-300 rounded-md focus:bg-white outline-none"
              required
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full rounded-md flex items-center justify-center gap-x-3 py-2 px-6 border text-md  font-bold text-white bg-primaryDark hover:bg-primary duration-300 focus:outline-none"
            >
              Register
            </button>
          </div>
        </div>
        <div className="text-center mt-4">
          <h3 className="text-slate-300 text-md font-semibold">
            Already have an account?
            <Link to="/account/login" className="text-primary font-bold ml-2">
              Sign In
            </Link>
          </h3>
        </div>
      </form>
    </Authorization>
  );
}

export default Signup;
