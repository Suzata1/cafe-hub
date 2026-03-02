import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';   

const pastaItems = [
  { name: "Spaghetti", price: "Rs.299", img: "/images/pasta1.png" },
  { name: "Fettuccine",  price: "Rs.399",img: "/images/pasta2.png" },
  { name: "Penne", price: "Rs.499", img: "/images/pasta3.png" },
  { name: "Lasagna", price: "Rs.499", img: "/images/pasta4.png" },
];

const PastaSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-green-600 mb-6">Our Pasta</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {pastaItems.map((item, idx) => (
          <div key={idx} className="bg-[#2c6b3c] p-4 rounded text-center shadow-md">
            <img src={item.img} alt={item.name}alt={item.price} className="h-28 mx-auto mb-2 object-contain" />
            <p className="text-white font-semibold">{item.name}</p>
            <p className="text-white font-semibold">{item.price}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastaSection;
