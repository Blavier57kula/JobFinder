import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar flex justify-between items-center p-[3rem]'>
        <div className="logoDiv">
            <h1 className="logo text-[25px] text-blueColor"> <strong>BK Job</strong>  Search</h1>
        </div>
        <div className="menu flex gap-8">
          <li className="menulist text-[#6f6f6f] hover:text-blueColor">Jobs</li>
          <li className="menulist text-[#6f6f6f] hover:text-blueColor">Compagnies</li>
          <li className="menulist text-[#6f6f6f] hover:text-blueColor">About</li>
          <li className="menulist text-[#6f6f6f] hover:text-blueColor">Contact</li>
          <li className="menulist text-[#6f6f6f] hover:text-blueColor">Blog</li>
          <li className="menulist text-[#6f6f6f] hover:text-blueColor">Login</li>
          <li className="menulist text-[#6f6f6f] hover:text-blueColor">Register</li>
        </div>
    </div>
  )
}

export default NavBar;