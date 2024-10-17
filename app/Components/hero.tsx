import Image from 'next/image';
import Nav from './nav';

const Hero = () => {
  return (
    <div>
      <Nav />
      <div className='max-w-[87rem] md:max-h-[560px] mx-auto bg-[#F4F6F5] rounded-3xl flex flex-col md:flex-row justify-between p-6 md:p-20 items-center'>
        
        {/* Text Section */}
        <div className='flex flex-col items-center md:items-start  md:mb-3  mx-4 md:mx-11 '>
          <div className="flex flex-col space-y-6 md:space-y-10 md:mb-6  md:mt-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-center md:text-left">
              <span className="bg-white px-4 md:px-11 mb-6 inline-block">LET'S</span> 
              <span className="block mb-6">EXPLORE</span>
              <span className="block mb-6">UNIQUE</span>
              <span className="bg-yellow-400 px-2 inline-block">CLOTHES.</span>
            </h1>
          </div>

          <p className='mt-4 text-center  text-2xl md:mt-7 md:text-left'>Live for Influential and Innovative fashion!</p>

          <div className='flex items-center justify-center text-white h-8 rounded-md w-[90px] bg-black mt-6 px-20 py-7 hover:bg-white hover:text-black hover:shadow-lg '>
            <button className='flex justify-center items-center text-2xl '>ShopNow</button>
          </div>
        </div>

        {/* Hero Image */}
        <div className='mt-9 md:mt-0'>
          <Image
            src={"/images/her.png"}
            alt='hero-image'
            width={600}
            height={350}
            
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
