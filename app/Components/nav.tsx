"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NewArrivals from './newArrivals';

const Nav = () => {
 
    const [isOpen , setIsOpen] = useState(false);
    const toggleMenu = (() =>{
        setIsOpen(!isOpen)
    });
    return (
                // NAVBAR START
  <nav className='flex justify-between p-9 mx-6 items-center  '>
              {/* LOGO */}
    <div>
    <Image 
    src = {"/images/Frame 53.png"}
    alt='LOGO'
    width={180}
    height={45}
    />
    </div >
             {/* DESKTOP NAV LINKS */}
    <div className='  font-medium  hidden md:flex space-x-4 '>
     <ul className='flex justify-between  gap-14 text-[18px] mr-8 ' >
        <Link href={"#"}><li  className='transition-all duration-500  hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>FASHION</li></Link>
        <Link href={"#"}><li  className='transition-all duration-500  hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>CATELOUGE</li></Link>   
        <Link href={"#"}><li  className='transition-all duration-500  hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>FAVOURITE</li></Link>
        <Link href={"#"}><li  className='transition-all duration-500  hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>LIFESTYLE</li></Link>
     </ul>
          <div className='flex items-center justify-center text-white h-8 rounded-md w-[90px] bg-black'>
          <button  >SIGN UP</button>
          </div>
        </div>
        <button className="text-2xl text-blue-900 cursor-pointer md:hidden" onClick={toggleMenu}>
            ☰
          </button>
        
           {/* MOBILE NAV */}

           <div className= {`fixed top-0 left-0 bg-white h-screen w-[40vh] transition-transform transform duration-400 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}  md:hidden `}>
          
        <div className='flex justify-between items-center p-5
        '>
        <Image 
    src = {"/images/Frame 53.png"}
    alt='LOGO'
    width={180}
    height={45}
    />
        
        <button className="text-2xl text-blue-900 cursor-pointer   " onClick={toggleMenu}>
              X
            </button>
            </div>
         
            <div className='flex px-16 font-black text-[20px] md:hidden'>
            <ul className='flex flex-col justify-between gap-8 mt-9' >
        <Link href={"#"}><li className='transition-all duration-500 ease-linear hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>CATALOGUE</li></Link>
        <Link href={`#`}><li  className='transition-all duration-500 ease-linear hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>FASHION</li></Link>   
        <Link href={"#"}><li  className='transition-all duration-500 ease-linear hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>FAVOURITE</li></Link>
        <Link href={"#"}><li  className='transition-all duration-500 ease-linear hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>LIFESTYLE</li></Link>
     </ul>
            </div>
            </div>
  </nav>
  )
}

export default Nav