'use client';

import React, { useState } from 'react';

export default function OnlineOrder() {
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <div className="p-8 md:p-16 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-gray-700">Order Confirmation</h1>
      <div className="grid md:grid-cols-3 gap-12">
        
        <div className="md:col-span-2 border p-6 shadow rounded-md">
          <div className="mb-4">
            <label className="block font-semibold">Email</label>
            <input type="email" className="w-full border p-2 rounded" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">SMS Code</label>
            <input type="text" className="w-full border p-2 rounded" placeholder="Enter code" />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Order Details</label>
            <textarea className="w-full border p-2 rounded" placeholder="e.g. 2x Pizza, 1x Burger"></textarea>
          </div>
          <div>
            <label className="block font-semibold">Time of delivery</label>
            <input type="time" className="border p-2 rounded" />
          </div>
        </div>

    
        <div className="space-y-6">
        
          <div className="border p-4 shadow rounded-md">
            <p className="font-semibold mb-2">Order Form:</p>
            <p><span className="font-medium">Food names:</span> Pizza, Burger</p>
            <p className="mt-2"><span className="font-medium">Calculated:</span> Rs. 850</p>
          </div>

         
          <div className="border p-4 shadow rounded-md">
            <input type="text" placeholder="Enter discount code" className="border p-2 rounded mr-2" />
            <button className="bg-black text-white px-4 py-2 rounded">Apply</button>

            <button className="block mt-4 w-full bg-black text-white py-2 rounded">Submit</button>
          </div>

         
          <div className="bg-gray-100 p-4 shadow rounded-md">
            <p className="font-semibold mb-2">Esewa Payment Integration</p>
            <div className="grid grid-cols-2 gap-2">
              {['Khalti', 'Credit Card', 'GPay', 'Esewa'].map((method) => (
                <label key={method} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    onChange={() => setPaymentMethod(method)}
                  />
                  {method}
                </label>
              ))}
            </div>
            <button className="bg-black text-white px-4 py-2 mt-4 w-full rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
