import React from 'react';
import Image from 'next/image';


const Sale = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-auto md:h-[90vh] md:mt-10 mt-5"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <Image
            className="w-[90%] md:w-[70%] h-auto md:h-[90vh] object-cover"
            src="/images/image 12.png"
            alt="imag"
          />

          <div className="flex flex-col items-center md:items-start md:mb-3 mx-4 md:mx-11 px-5 md:px-20 mt-7">
            <div className="flex flex-col space-y-6 md:space-y-10 md:mb-6 px-5 md:px-16 md:mt-16">
              <h2 className="text-4xl md:text-6xl font-extrabold text-center">
                <span className="bg-white px-4 md:px-11 mb-3 inline-block">
                  PAYDAY
                </span>
                <span className="block">SALE NOW</span>
              </h2>
            </div>

            <p className="text-center md:text-start font-medium text-lg md:text-2xl px-5 md:px-20">Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <p className="text-center px-5 md:px-20 text-lg md:text-2xl font-extrabold mt-3">
              1 June - 10 June 2021
            </p>
            <p className="text-center px-5 md:px-20 text-lg md:text-2xl mt-3">
              *Terms & Conditions apply
            </p>
            <div className='flex items-center justify-center text-white h-8 rounded-md w-[90px] bg-black mt-6 md:mx-20 px-20 hover:bg-white hover:text-black py-7 mb-14'>
            <button className='flex justify-center items-center  text-2xl '>ShopNow</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
