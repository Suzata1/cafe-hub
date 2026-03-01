'use client';

import Link from 'next/link';

export default function MenuPage() {
  const categories = [
    { name: 'Burgers', path: 'burger' },
    { name: 'Main Course', path: 'mainCourse' },
    { name: 'Pasta', path: 'pasta' },
    { name: 'Pastries', path: 'pastry' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Menu</h1>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Link
            key={category.path}
            href={`/menu/${category.path}`}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}