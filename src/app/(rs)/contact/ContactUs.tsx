'use client';

import React, { useState } from 'react';

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // Replace this with actual backend/form handler
    alert('Order submitted successfully!');
  };

  return (
    
    <div className="max-w-[1400px] mx-auto p-8 bg-white flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Left Section */}
      <div className="text-left space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Lets get your order<br />from here!!
        </h2>
        <img src="/images/free.png" alt="Free Delivery"  className="w-64 md:w-80"/>
      </div>

      {/* Right Section - Form */}
      <div className="w-full max-w-md bg-gray-50 p-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold text-center mb-4">Contact Form</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Physical Address</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-black transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
