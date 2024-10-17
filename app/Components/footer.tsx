import React from 'react'
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black p-10 md:p-24 '>
        <div className='  flex flex-col md:flex-row md:justify-between  md:mx-16 ' >

            <div className='flex flex-col place-content-center md:place-content-start '>
                <h3 className='flex font-extrabold text-4xl text-white justify-center md:justify-start pb-2 md:pb-6'>FASHION</h3>
                <p className='md:text-[#8E8E8E] text-yellow-500 text-xl pb-5 md:w-80  font-medium'>Complete your style with awesome clothes from us.</p>
                <div className="md:flex space-x-4 mt-4 hidden ">
                <Link href={"#"} className="bg-[#E6C744] p-3 rounded-xl shadow-amber-500 shadow-md text-black hover:bg-yellow-200">
          <FaFacebookF size={20} />
          </Link>
          <Link href={"#"} className="bg-[#E6C744] p-3 rounded-xl text-black hover:bg-yellow-200  shadow-amber-500 shadow-md ">
          <FaInstagram size={20} />
          </Link>
          <Link href={"#"} className="bg-[#E6C744] p-3 rounded-xl text-black hover:bg-yellow-200  shadow-amber-500 shadow-md ">
          <FaTwitter size={20} />
          </Link>
          <Link href={"#"} className="bg-[#E6C744] p-3 rounded-xl text-black hover:bg-yellow-200  shadow-amber-500 shadow-md ">
          <FaLinkedinIn size={20} />
          </Link>
     
    </div>
    </div> 
          
           
            <div className=' flex flex-col md:flex-row justify-center items center text-[#7A7A7A]'>
            <div  className='grid grid-cols-3'>
              <div   >
              <h4 className='text-gray-300 font-black text-2xl'>Company</h4>
              <ul className='flex flex-col justify-between gap-2 md:gap-5 mt-4 w-24 '>
                
                <Link href={"/"}><li className='transition-all duration-500  hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>Home</li></Link>
                <Link href={"#"}><li className='transition-all duration-500  hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>About</li></Link>
                <Link href={"#"}><li className='transition-all duration-500  hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>Contact us</li></Link>
                <Link href={"#"}><li className='transition-all duration-500  hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>Supports</li></Link>
                <Link href={"#"}><li className='transition-all duration-500  hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>Career</li></Link> 
              </ul>
              </div>

              <div >
              <h4 className='text-gray-300 font-black text-2xl'>Quick Links</h4>
              <ul className='flex flex-col justify-between gap-2  md:gap-5 mt-4'>
                
                <Link href={"/"}><li className='transition-all duration-500  hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>Order tracking</li></Link>
                <Link href={"#"}><li className='transition-all duration-500  hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>Share Location</li></Link>
                <Link href={"#"}><li className='transition-all duration-500  hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>Size Guides</li></Link>
                <Link href={"#"}><li className='transition-all duration-500  hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>FAQS</li></Link>
                
              </ul>
              </div>

              <div className=' ml-8'>
              <h4 className='text-gray-300 font-black text-2xl '>Legal</h4>
              <ul className='flex flex-col justify-between gap-2  md:gap-5 mt-4'>
                
                <Link href={"/"}><li className='transition-all duration-500  hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>Terms & conditions</li></Link>
                <Link href={"#"}><li className='transition-all duration-500  hover:text-[#E6C744] hover:border-b-2 hover:border-[#E6C744]'>Privacy policy</li></Link>
                
              </ul>
              </div>
            </div>
            </div>
            </div >
           
        <div  className='md:hidden flex justify-center space-x-4 mt-5 '>
          <Link href={"#"} className="bg-[#E6C744] p-3 rounded-full shadow-amber-500 shadow-md text-black hover:bg-yellow-200">
          <FaFacebookF size={20} />
          </Link>
          <Link href={"#"} className="bg-[#E6C744] p-3 rounded-full text-black hover:bg-yellow-200  shadow-amber-500 shadow-md ">
          <FaInstagram size={20} />
          </Link>
          <Link href={"#"} className="bg-[#E6C744] p-3 rounded-full text-black hover:bg-yellow-200  shadow-amber-500 shadow-md ">
          <FaTwitter size={20} />
          </Link>
          <Link href={"#"} className="bg-[#E6C744] p-3 rounded-full text-black hover:bg-yellow-200  shadow-amber-500 shadow-md ">
          <FaLinkedinIn size={20} />
          </Link>
        </div>
        
    </div>
  )
}

export default Footer