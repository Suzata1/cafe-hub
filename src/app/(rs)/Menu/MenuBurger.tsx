import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const socialMedias = [
  {
    id: '1',
    title: 'Burger',
    href: '/menu/burger',
    image: '/images/pastry.png',
    price: 5.99,
  },
  {
    id: '2',
    title: 'Main Course',
    href: '/menu/main-course',
    image: '/images/pizza.png',
    price: 9.49,
  },
  {
    id: '3',
    title: 'Pasta',
    href: '/menu/pasta',
    image: '/images/potato.png',
    price: 6.75,
  },
  {
    id: '4',
    title: 'Pastry',
    href: '/menu/pastry',
    image: '/images/pastry.png',
    price: 4.25,
  },
];

const MenuBurger = () => {
  return (
    <div className='bg-white   w-full'>
    <div className='max-w-[1400px]  mx-auto'>
    <div className='flex justify-between items-center h-16   w-full'></div>
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold text-red-500 mb-6 text-center  gap-4 ">Explore Categories</h2>
      <div className="flex md:flex-row flex-col gap-4">
        {socialMedias.map((social) => (
          <div
            key={social.id}
            className="bg-white shadow-md p-4 rounded hover:bg-orange-50 transition"
          >
            <Link href={social.href}>
            
              <h3 className="text-center font-semibold bg-red-500 text-white">{social.title}</h3>
              <div className='w-full flex items-center h-[290px] gap-4 mb-2'>
              <Image src={social.image}
              alt={social.title} height={290} width={290} className='object-contain'
              /></div>
              
              <p className="text-center font-medium bg-red-500 text-white">${social.price}</p>
            
            </Link>
          </div>
          
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default MenuBurger;
