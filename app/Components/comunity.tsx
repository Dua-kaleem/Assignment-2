import React from 'react'

const Comunity = () => {
  return (
    <div className='bg-[#E5C643] w-full h-auto  text-white flex-col place-content-center items-center md:p-36 p-7  pt-24 pb-24 '>
         <h3  className='font-black text-2xl  md:text-6xl md:pl-36 pl-7'>JOIN SHOPPING COMMUNITY TO <span className='md:pl-44 pl-14'>GET MONTHLY PROMO</span></h3>
         <p className='font-normal md:text-4xl text-xl md:pl-36  pl-7 tracking-wide md:pt-8'>Type your  email  down  below  and  be  young  wild   generation</p>
         <div className="flex items-center relative pl-10 md:pl-96 pt-8 ">
  <input type="email" placeholder="Add your email here" className="h-12 w-96 text-gray-600  rounded-l-md  " />
  <button className="bg-black text-white py-2 px-6  absolute ml-72 rounded-md hover:bg-[#E5C643] shadow-lg hover:text-black ">SEND</button></div>

         </div>
  )
}

export default Comunity