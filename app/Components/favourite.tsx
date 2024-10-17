
import React from 'react'

const favourite =[
   {
    id: 1,
    name:"Trending on instagram",
    title : "Explore NOw!",
     imageUrl:"/images/f1.png",
     exploreArrow: "/images/Arrow 1.png",

   },
   {
    id: 2,
    name:"All Under $40",
    title : "Explore NOw!",
     imageUrl:"/images/f2.png",
     exploreArrow: "/images/Arrow 1.png",

   }

]
const Favourite = () => {
  return (
    <div className='mx-auto py-4 md:py:8 md:px-8'>
    <div className='m-20 relative flex justify-end items-end md:justify-start md:items-end'>
        <div className="w-20 h-4 md:ml-56 bg-yellow-400 rounded-t-[40%]  rounded-r-[50%]   transform scale-x-150  ">
        </div>
        <h1 className="text-4xl font-bold text-center   absolute">Young&#39;s Favourite</h1>

    </div>
     <div className='grid grid-cols-1 md:grid-cols-2 place-content-center justify-between h-auto px-5 '>
      {favourite.map((favourites) => (
          <div key={favourites.id}>
            <img src={favourites.imageUrl} 
            alt={favourites.name}
            className="md:w-[90%] h-auto object-cover md:mx-12 mx:6  flex place-content-center rounded-2xl shadow-lg shadow-slate-500 " />
            <div className='flex justify-between mt-5 mb-2 md:pl-14 md:w-[40rem] hover:text-yellow-400'>
              <h3 className='text-2xl font-medium '>{favourites.name}</h3>
              <img src={favourites.exploreArrow} 
              alt="Arrow" 
              />
            </div>
            <p className=' mb-4 text-lg text-gray-500 md:pl-14 hover:text-blue-400'>{favourites.title}</p>
          </div>
      ))}

     </div>
    </div>
  )
}

export default Favourite