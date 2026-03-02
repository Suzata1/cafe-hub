import React from 'react';

const burgerItems = [
  { name: "Classic Burger", price: "Rs.450", img: "/images/burger1.png" },
  { name: "Cheese Burger",price: "Rs.350", img: "/images/burger4.png" },
  { name: "Veggie Burger",price: "Rs.150", img: "/images/burger2.png" },
  { name: "Spicy Burger",price: "Rs.550", img: "/images/burger1.png" },
];

const BurgerSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-orange-600 mb-6">Our Burgers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {burgerItems.map((item, idx) => (
          <div key={idx} className="bg-[#c53300] p-4 rounded text-center shadow-md">
            <img src={item.img} alt={item.name} alt= {item.price} className="h-28 mx-auto mb-2 object-contain" />
            <p className="text-white font-semibold">{item.name}</p>
                 <p className="text-white font-semibold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BurgerSection;
