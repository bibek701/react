import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {



  return (
    <div className='bg-black text-white flex justify-between px-7 py-3 '>

      <h1>Menu</h1>

      <nav className='space-x-7'>

        <NavLink to='/about'>About</NavLink>
        <NavLink to='/Contactpage'>Contact</NavLink>




      </nav>





    </div>
  )
}

export default Header