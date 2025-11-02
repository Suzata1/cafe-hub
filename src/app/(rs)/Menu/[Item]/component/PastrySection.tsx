import React from 'react';

const pastryItems = [
  { name: "Croissant", img: "/images/pastry1.png" },
  { name: "Muffin", img: "/images/pastry2.png" },
  { name: "Danish", img: "/images/pastry3.png" },
  { name: "Cupcake", img: "/images/pastry4.png" },
];

const PastrySection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-pink-600 mb-6">Pastries</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {pastryItems.map((item, idx) => (
          <div key={idx} className="bg-[#be185d] p-4 rounded text-center shadow-md">
            <img src={item.img} alt={item.name} className="h-28 mx-auto mb-2 object-contain" />
            <p className="text-white font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastrySection;
