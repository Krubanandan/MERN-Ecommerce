import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium '>
        <img src={assets.logo}/> 
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr class="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>Collections</p>
                <hr class="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>About</p>
                <hr class="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>Contact</p>
                <hr class="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
            </NavLink>
            
        </ul>
    </div>
  )
}

export default NavBar