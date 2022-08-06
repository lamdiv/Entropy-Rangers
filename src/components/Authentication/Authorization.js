import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Authorization(props) {
    useEffect(() => {
        let navbar = document.querySelector("#navbar");
        let footer = document.querySelector("#footer");
    
        if (navbar && footer) {
          navbar.style.display = "none";
          footer.style.display = "none";
        }
    
        return () => {
          if (navbar) {
            navbar.style.display = "block";
            footer.style.display = "block";
          }
        };
      }, []);
    
      return (
        <div>
          <div className="w-full bg-[#1E4A01] h-screen flex justify-center items-center flex-col p-2">
            {/* <Link to="/"> */}
            <Link to="/" className="text-xl text-primary mb-6 font-bold">
            Entropy <span className="text-white font-extrabold">RANGERS</span>
          </Link>
            {/* </Link> */}
            {props.children}
          </div>
        </div>
      );
}
export default Authorization