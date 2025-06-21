'use client';

import Link from 'next/link';

const categories = ['Burger', 'Main course', 'Pasta', 'Pastry'];

export default function MenuPage() {
  return (
    <div className="flex p-8 gap-8">
      {/* Sidebar */}
      <div className="w-48 shadow-md rounded-lg bg-white p-4">
        <h2 className="font-bold text-red-600 text-lg mb-4">Food items</h2>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                href={`/menu/${cat.toLowerCase().replace(/\s/g, '-')}`}
                className="block bg-orange-600 text-white py-2 text-center rounded hover:bg-orange-700"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* You can add default category items here if needed */}
      <div className="text-gray-600 italic">
        ← Select a food category to explore delicious items.
      </div>
    </div>
  );
}
