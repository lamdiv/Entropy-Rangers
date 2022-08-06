import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section id="footer" className="mt-20 mb-10 px-2 md:px-0">
      <div
        className="p-4 container mx-auto bg-[#F3FFEC] rounded-2xl space-y-5 md:p-6"
      >
        <div
          className="flex flex-col justify-between items-center space-y-10 md:items-start md:flex-row md:space-x-8 md:space-y-0"
        >
          {/* <!-- Footer Info --> */}
          <Link to="/"><div className="text-xl  font-bold">
            Entropy <span className="text-primary font-extrabold">RANGERS</span>
            
          </div></Link>
          
          <p className="text-sm font-semibold text-dark text-center">&copy; 2022 Team Sunya</p>
        </div>

      </div>
    </section>
  )
}

export default Footer