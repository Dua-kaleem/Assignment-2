// import React from 'react'
// import Image from 'next/image'

// const Brand = () => {
//   return (
//     <div className='bg-[#E6C744] w-full h-28 mt-11 mb-6 '>
//         <div className='flex flex-wrap flex-row-2 justify-between py-6  px-12 '>
//         <Image 
//     src = {"/images/Rectangle 36.png"}
//     alt='LOGO'
//     width={120}
//     height={12}
//     />
//       <Image 
//     src = {"/images/Rectangle 44.png"}
//     alt='LOGO'
//     width={120}
//     height={12}
//     />

// <Image 
//     src = {"/images/Rectangle 38.png"}
//     alt='LOGO'
//     width={120}
//     height={12}
//     />

// <Image 
//     src = {"/images/Rectangle 45.png"}
//     alt='LOGO'
//     width={120}
//     height={12}
//     />

// <Image 
//     src = {"/images/Rectangle 43.png"}
//     alt='LOGO'
//     width={120}
//     height={12}
//     />

// <Image 
//     src = {"/images/Rectangle 41.png"}
//     alt='LOGO'
//     width={120}
//     height={12}
//     />
//         </div>
//     </div>
//   )
// }

// export default Brand
import React from 'react'
import Image from 'next/image'

const Brand = () => {
  return (
    <div className='bg-[#E6C744] w-full h-auto mt-11 mb-6'>
        {/* Responsive Grid */}
        <div className='grid grid-cols-3  md:grid-cols-6 gap-4 py-6 px-12'>
            <Image 
                src="/images/Rectangle 36.png"
                alt="LOGO"
                width={120}
                height={12}
            />
            <Image 
                src="/images/Rectangle 44.png"
                alt="LOGO"
                width={120}
                height={12}
            />
            <Image 
                src="/images/Rectangle 38.png"
                alt="LOGO"
                width={120}
                height={12}
            />
            <Image 
                src="/images/Rectangle 45.png"
                alt="LOGO"
                width={120}
                height={12}
            />
            <Image 
                src="/images/images.png"
                alt="LOGO"
                width={120}
                height={18}
            />
            <Image 
                src="/images/Rectangle 41.png"
                alt="LOGO"
                width={120}
                height={12}
            />
        </div>
    </div>
  )
}

export default Brand
