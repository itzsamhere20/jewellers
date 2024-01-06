import React from 'react'
import logo from '../../assets/logo.png'
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className='flex w-[100%] justify-between h-[80px] bg-[rgba(255,255,255,0.13)] text-white px-20 overflow-hidden backdrop-blur-sm '>
        <img className='w-[30%] object-contain ' src={logo}/>
        <div className='flex w-[60%]  items-center  mr-12'>
            <ul className='flex w-[100%] justify-end gap-16 capitalize'>
                <li className='cursor-pointer'>home</li>
                <li  className='cursor-pointer'>About</li>
                <li  className='cursor-pointer'>store</li>
                <li  className='cursor-pointer'>contact</li>
            </ul>
        </div>
        <div className='flex w-[10%] items-center justify-end gap-5 text-lg'>
        <AiOutlineSearch className='cursor-pointer' />
        <FaRegHeart  className='cursor-pointer' />
        </div>
      
    </div>
  )
}
