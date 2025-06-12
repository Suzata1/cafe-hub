
import React from 'react';
import Image from 'next/image';

const RecipentSection= () => {
  return (
    <div className='w-full bg-white'>
      <div className='max-w-[1400px] mx-auto px-6 py-10'>
        <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
          Make a Reservation
        </h2>

        <div className='flex justify-center w-full  items-center'>
          <Image
            height={325}
            width={600}
            src="/images/rev.png"
            alt="Reservation"
            className="rounded shadow-md"
          
          />
        </div>
      </div>
    </div>
  );
};

export default RecipentSection
