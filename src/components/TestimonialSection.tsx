'use client';
import React from 'react';
import Image from 'next/image';



const testimonials = [
  {
    id: 1,
    name: 'Bunny Joe',
    comment: 'I like the food. Good experience',
    image: '/images/customer.png',
   
  },
  {
    id: 2,
    name: 'Jane Smith',
    comment: 'Delicious and fresh!',
    image: '/images/customer.png',
   
  },
  {
    id: 3,
    name: 'Alex Brown',
    comment: 'Nice ambiance, tasty dishes.',
    image: '/images/customer.png',
   
  },
];



const TestimonialSection = () => {
  return (
     <div className='w-full bg-orange-50 '> <div className='max-w-[1400px] mx-auto'>
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 ">
        <h2 className='text-2xl font-bold text-red-500 mb-10 text-center'>Customer Testimonials</h2>
        <div className='flex  justify-center gap-6'>
          {testimonials.map((item) => (
            <div key={item.id} className='bg-[#D63C06] text-white p-6 rounded shadow-md w-full h-[220px] text-center '>
              <div className='flex justify-center mb-3'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className='rounded-full border-2 border-white object-cover'
                />
              </div>
              <h3 className='font-semibold mb-1'>{item.name}</h3>
              <p className='text-sm mt-1 px-2'>{item.comment}</p>
             
            </div>
          ))}
        </div></div>
      </div>
   </div>
  );
};

export default TestimonialSection;
