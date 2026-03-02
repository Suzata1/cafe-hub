'use client';

import BurgerSection from './[items]/BurgerSection';
import MainCourse from './[items]/MainCourse';
import PastaSection from './[items]/PastaSection';
import PastrySection from './[items]/PastrySection';

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Menu</h1>
    
      {/* Grid layout for menu sections */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
        {/* Burger Section */}
        <section id="burger" className="bg-white p-6 rounded-lg shadow-md">
          {/* <h2 className="text-2xl font-semibold mb-4">Burgers</h2> */}
          <BurgerSection />
        </section>

        {/* Main Course Section */}
        <section id="mainCourse" className="bg-white p-6 rounded-lg shadow-md">
          {/* <h2 className="text-2xl font-semibold mb-4">Main Course</h2> */}
          <MainCourse />
        </section>

        {/* Pasta Section */}
        <section id="pasta" className="bg-white p-6 rounded-lg shadow-md">
          {/* <h2 className="text-2xl font-semibold mb-4">Pasta</h2> */}
          <PastaSection />
        </section>

        {/* Pastry Section */}
        <section id="pastry" className="bg-white p-6 rounded-lg shadow-md">
          {/* <h2 className="text-2xl font-semibold mb-4">Pastries</h2> */}
          <PastrySection />
        </section>
        
      </div>
    </div>
  );
}   

//"bg-white shadow-md p-4 rounded

   