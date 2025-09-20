import React from 'react';
import Image from 'next/image';

const HeroSection=()=> {
  return (
   <div className='w-full bg-orange-50 '> <div className='max-w-[1400px] mx-auto'>
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 ">
      {/* Text section */}
      <div className="max-w-xl mb-6 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-700 leading-tight">
          It’s time to <br/> have <br /> Burger Party!!
        </h1><br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h3 className='text-xl md:text-xl font-bold text-red-500'>Tasty-Healthy-Cruchly</h3>
      </div>

      <div className='flex items-center'>
        <Image
          height={550}
          width={250}
          alt="Burger Party"
          src="/images/burger.png"
        />
      </div>
      </div>
    </div></div>
  );
}

export default HeroSection;
