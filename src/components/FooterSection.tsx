import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const socialMedias = [
  { title: "Home", id: "1", href: "/" },
  { title: "Contact us", id: "2", href: "/contact-us" },
  { title: "Blogs", id: "3", href: "/blogs" },
  { title: "Service", id: "4", href: "/service" },
];

const FooterSection = () => {
  return (
    <footer className='w-full bg-orange-50'>
      <div className='max-w-[1400px] mx-auto px-8 py-12 flex flex-col md:flex-col items-center justify-between'>
          <div className="flex justify-center mb-6">
          <Image
            height={100}
            width={100}
            alt="Burger Party"
            src="/images/logo.png"
          />
        </div>
         {/* Navigation Links  */}
        <div className='flex gap-6 mx-auto max-w-[600px]  justify-center md:justify-start'>
          {socialMedias.map((social, index) => (
            <Link key={index} href={social.href}>
              <span className="text-black  hover:text-orange-600 cursor-pointer font-medium text-center">
                {social.title}
              </span>
            </Link>
          ))}

          
        </div>

        {/* Logo or Image */}
      

      </div>
    </footer>
  );
}

export default FooterSection;
