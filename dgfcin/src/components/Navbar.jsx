import React from 'react'
import Logo1 from '../assets/globe.gif'
import Logo2 from '../assets/dgfc_logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-blue-900'>
            <div className=' max-w-[1320px] mx-auto flex '>
                <div className='flex pl-[50px] cursor-pointer'>
                    <img className='w-[60px] h-[60px]' src={Logo1} alt='logo' />
                    <img className='w-[100px] h-[60px]' src={Logo2} alt="logo2" />
                </div>
                <div className='pl-[180px] pt-[12px] font-serif font-medium  cursor-pointer'>
                    <ul className='flex gap-10 font-bold'>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-white"}>HOME</NavLink>
                        </li> 
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/about' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-white"}>ABOUT US</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/service' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-white"}> SERVICES</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/dgfcwarehouse' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-white"}>DGFC WAREHOUSE</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/training' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-white"}>TRAINING</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/event' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-white"}>EVENT</NavLink>
                        </li>
                        <li className='hover:text-yellow-300 hover:underline'>
                            <NavLink to='/contact' className={({ isActive }) => isActive ? "text-yellow-300 underline" : "text-white"}>CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
