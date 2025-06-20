

export default function AboutUsPage() {
  return (
    <div className="max-[1440]:screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="w-full md:w-1/2">
          <img src="/images/chefs-cooking.png" alt="Chefs Cooking" className="rounded-lg shadow-lg " />
        </div>

     
        <div className="w-100px md:w-1/2 h-100px bg-orange-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-4">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-800 font-bold  md:text-2xl">
            A cozy café serving <br/>
            delicious handmade <br/>
            burgers & cheesy pizzas,<br/>
            made fresh with love <br/>
            and perfect for<br/>
             every craving and mood.<br/>
          </p>
        </div>
      </div>
    </div>
  );
}
