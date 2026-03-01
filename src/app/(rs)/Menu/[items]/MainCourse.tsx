import React from 'react';

const mainCourseItems = [
  { name: "Grilled Chicken", img: "/images/main1.png" },
  { name: "Steak", img: "/images/main2.png" },
  { name: "Fish Fillet", img: "/images/main3.png" },
  { name: "Vegetable Curry", img: "/images/main4.png" },
];

const MainCourse = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Main Course</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {mainCourseItems.map((item, idx) => (
          <div key={idx} className="bg-[#1e3a8a] p-4 rounded text-center shadow-md">
            <img src={item.img} alt={item.name} className="h-28 mx-auto mb-2 object-contain" />
            <p className="text-white font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainCourse;
