import React from 'react'
import Image from 'next/image'


const MobilleApp = () => {
  return (
    <div>
        <div className='bg- [#F5F5F5] flex flex-col md:flex-row items-center justify-between md:m-2 md:mm-8 w-ful h-auto  md:h-[90vh] relative mb-9' >
             <div className='w-[407px] h-[282] bg-white mt-20 md:pl-40 ' >
                       <div className='md:w-[500px]'>
                        <h3 className='text-4xl md:text-5xl font-extrabold text-center md:text-left'>DOWNLOAD APP & GET THE VOUCHER!</h3>
                        <p className='mt-4 text-center  text-2xl md:mt-7 md:text-left '>Get 30% off for first transaction using Rondovision mobile app for now.</p>
                       </div>
                       <div className='flex md:mt-2 mb-16 mt-6 pl-5'>
                       <Image
            src="/images/google.png"
            alt="image"
            width={159}
            height={50}
      className='w-[159px] h-[50px] mr-9'
          />

                      <Image
            src="/images/apple.png"
            alt="image"
            width={159}
            height={50}
         className='w-[159px] h-[50px]'
          />
                       </div>
                       
            </div>   
        
            <div className='relative flex justify-center items-center mx-40'>
 
  <div className='w-[437px] h-[429px] rounded-full bg-[#FFFFFF] border-[] border-2 flex justify-center items-center '>
   
    <div className='w-[337px] h-[329px] rounded-full bg-[#FFFFFF] border-[rgba(239,236,235,0.82)] border-2 flex justify-center items-center'>
     
      <div className='w-[237px] h-[229px] rounded-full bg-[#FFFFFF] border-[rgba(239,236,235,0.82)] border-2 flex justify-center items-center'> <div className='absolute'>
          <Image
            src="/images/Mobile app.png"
            alt="image"
            width={280}
            height={520}
            className='w-[280px] h-[520px]' 
          />
        </div>
      </div>
    </div>
  </div>
  <div className='absolute top-[5%] right-[9%] w-[24px] h-[26px] rounded-full bg-[#E5C256]'></div>
                       <div className='absolute top-[85%] right-[0%] w-[12px] h-[12px] rounded-full bg-[#444444]'></div>
                        <div className='absolute bottom-[3%] left-[0%] w-[20px] h-[20px] rounded-full bg-[#E5C256]'></div>
                         <div className='absolute bottom-[85%] left-[0%] w-[15px] h-[15px] rounded-full bg-[#444444]'></div>
</div>
                      

        </div> 
    </div>

  )
}

export default MobilleApp