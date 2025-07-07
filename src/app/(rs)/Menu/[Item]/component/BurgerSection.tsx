const burgerItems = [
  { name: "Classic Burger", img: "/images/burger1.png" },
  { name: "Cheese Burger", img: "/images/burger2.png" },
  { name: "Veggie Burger", img: "/images/burger3.png" },
  { name: "Spicy Burger", img: "/images/burger4.png" },
];

export default function BurgerSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-orange-600 mb-6">Our Burgers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {burgerItems.map((item, idx) => (
          <div key={idx} className="bg-[#c53300] p-4 rounded text-center shadow-md">
            <img src={item.img} alt={item.name} className="h-28 mx-auto mb-2 object-contain" />
            <p className="text-white font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
