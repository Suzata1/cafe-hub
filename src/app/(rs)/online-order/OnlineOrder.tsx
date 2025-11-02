// 'use client';

// import React, { useState } from 'react';

// export default function OnlineOrder() {
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [paymentResponse, setPaymentResponse] = useState(null);

//   const handleCheckout = async () => {
//     if (paymentMethod !== 'Khalti') {
//       alert(`Selected payment method: ${paymentMethod}`);
//       return;
//     }
// debugger;
//     const paymentData = {
//       return_url: "http://localhost:3000/",
//       website_url: "http://localhost:3000/",
//       amount: "1000",
//       purchase_order_id: "Order01",
//       purchase_order_name: "test",
//       customer_info: {
//         name: "Ram Bahadur",
//         email: "test@khalti.com",
//         phone: "9800000001"
//       }
//     };

//     try {
//       const res = await fetch('/api/payment/initiate', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(paymentData),
//       });

//       const data = await res.json();
//       console.log('Khalti Response:', data);
//       setPaymentResponse(data);

//       if (data.payment_url) {
//         window.location.href = data.payment_url;
//       } else {
//         alert('Payment initiation failed');
//       }
//     } catch (error) {
//       console.error('Error initiating payment:', error);
//       alert('Something went wrong. Check console for details.');
//     }
//   };

//   const statusStyles = {
//     Completed: { color: 'green', message: 'Payment completed successfully!' },
//     Pending: { color: 'orange', message: 'Payment is pending. Please wait.' },
//     Initiated: { color: 'blue', message: 'Payment initiated. Please complete the payment.' },
//     Refunded: { color: 'purple', message: 'Payment has been refunded.' },
//     Expired: { color: 'gray', message: 'Payment expired. Please try again.' },
//     'User canceled': { color: 'red', message: 'Payment was canceled by the user.' },
//   };
//  const currentStatus = paymentResponse ? statusStyles[paymentResponse.status] : null;

//   return (
//     <div className="p-8 md:p-16 bg-white min-h-screen">
//       <h1 className="text-2xl font-bold mb-8 text-gray-700">Order Confirmation</h1>
//       <div className="grid md:grid-cols-3 gap-12">
//         {/* Left side form */}
//         <div className="md:col-span-2 border p-6 shadow rounded-md">
//           <div className="mb-4">
//             <label className="block font-semibold">Email</label>
//             <input type="email" className="w-full border p-2 rounded" placeholder="Enter your email" />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold">SMS Code</label>
//             <input type="text" className="w-full border p-2 rounded" placeholder="Enter code" />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold">Order Details</label>
//             <textarea className="w-full border p-2 rounded" placeholder="e.g. 2x Pizza, 1x Burger"></textarea>
//           </div>
//           <div>
//             <label className="block font-semibold">Time of delivery</label>
//             <input type="time" className="border p-2 rounded" />
//           </div>
//           <div className="space-x-3 mt-5">
//             <label className="block font-semibold mb-2">Discount Code</label>
//             <input type="text" placeholder="Enter discount code" className="border p-2 rounded mr-2" />
//             <button className="bg-red-700 mt-2 text-white px-4 py-2 rounded">Apply</button>
//             <button className="block mt-4 w-30 bg-red-700 text-white py-2 rounded">Submit</button>
//           </div>
//         </div>

//         {/* Right side - payment */}
//         <div className="space-y-6">
//           <div className="border p-4 shadow rounded-md">
//             <p className="font-semibold mb-2">Order Form:</p>
//             <p><span className="font-medium">Quantity:</span> 3</p>
//             <p><span className="font-medium">Food names:</span> Pizza, Burger</p>
//             <p className="mt-2"><span className="font-medium">Calculated:</span> Rs. 850</p>
//           </div>

//           <div className="bg-gray-100 p-4 shadow rounded-md">
//             <p className="font-semibold mb-2">Payment Integration</p>
//             <div className="grid grid-cols-2 gap-2">
//               {['Khalti', 'Credit Card', 'GPay', 'Esewa'].map((method) => (
//                 <label key={method} className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="payment"
//                     value={method}
//                     onChange={() => setPaymentMethod(method)}
//                   />
//                   {method}
//                 </label>
//               ))}
//             </div>
//             <button
//               className="bg-red-700 text-white px-4 py-2 mt-4 w-full rounded"
//               onClick={handleCheckout}
//             >
//               Checkout
//             </button>
//           </div>

//           {currentStatus && (
//             <div className="p-4 rounded shadow" style={{ color: currentStatus.color }}>
//               <p>{currentStatus.message}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import React, { useState } from 'react';

export default function OnlineOrder() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentResponse, setPaymentResponse] = useState(null); 

  const handleCheckout = async () => {
    if (paymentMethod !== 'Khalti') {
      alert(`Selected payment method: ${paymentMethod}`);
      return;
    }

    const paymentData = {
      return_url: "http://localhost:3000/", 
      website_url: "http://localhost:3000/",
      amount: "1000",
      purchase_order_id: "Order01",
      purchase_order_name: "test",
      customer_info: {
        name: "Ram Bahadur",
        email: "test@khalti.com",
        phone: "9800000001"
      }
    };

    try {
      const res = await fetch('https://dev.khalti.com/api/v2/epayment/initiate/', {
        method: 'POST',
        headers: {
          'Authorization': 'key live_secret_key_68791341fdd94846a146f0457ff7b455', 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
      });

      const data = await res.json();
      console.log('Khalti Response:', data);

      if (data.payment_url) {
        // Open Khalti payment page
        window.location.href = data.payment_url;
      } else {
        alert('Payment initiation failed');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('Something went wrong. Check console for details.');
    }
  };

  // Map status to colors and messages
  const statusStyles = {
    Completed: { color: 'green', message: 'Payment completed successfully!' },
    Pending: { color: 'orange', message: 'Payment is pending. Please wait.' },
    Initiated: { color: 'blue', message: 'Payment initiated. Please complete the payment.' },
    Refunded: { color: 'purple', message: 'Payment has been refunded.' },
    Expired: { color: 'gray', message: 'Payment expired. Please try again.' },
    "User canceled": { color: 'red', message: 'Payment was canceled by the user.' }
  };

  const currentStatus = paymentResponse ? statusStyles[paymentResponse.status] : null;

  return (
    <div className="p-8 md:p-16 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-gray-700">Order Confirmation</h1>
      <div className="grid md:grid-cols-3 gap-12">

        {/* Left Form */}
        <div className="md:col-span-2 border p-6 shadow rounded-md space-y-4">
          <div>
            <label className="block font-semibold">Email</label>
            <input type="email" className="w-full border p-2 rounded" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block font-semibold">SMS Code</label>
            <input type="text" className="w-full border p-2 rounded" placeholder="Enter code" />
          </div>
          <div>
            <label className="block font-semibold">Order Details</label>
            <textarea className="w-full border p-2 rounded" placeholder="e.g. 2x Pizza, 1x Burger"></textarea>
          </div>
          <div>
            <label className="block font-semibold">Time of delivery</label>
            <input type="time" className="border p-2 rounded" />
          </div>

           <div className="space-x-3 mt-5">
           <label className="block font-semibold mb-2">Discount Code</label>
          <input type="text" placeholder="Enter discount code" className="border p-2 rounded mr-2" />             <button className="bg-red-700 mt-2 text-white px-4 py-2 rounded">Apply</button>
          <button className="block mt-4 w-30 bg-red-700 text-white py-2 rounded">Submit</button>        </div>
      
        </div>

        {/* Right Summary & Payment */}
        <div className="space-y-6">
          <div className="border p-4 shadow rounded-md">
            <p className="font-semibold mb-2">Order Summary:</p>
            <p><span className="font-medium">Quantity:</span> 3</p>
            <p><span className="font-medium">Food names:</span> Pizza, Burger</p>
            <p className="mt-2"><span className="font-medium">Calculated:</span> Rs. 850</p>
          </div>

          {/* Payment Method */}
          <div className="bg-gray-100 p-4 shadow rounded-md">
            <p className="font-semibold mb-2">Select Payment Method</p>
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
            <button
              className="bg-red-700 text-white px-4 py-2 mt-4 w-full rounded"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>

          {/* Payment Response */}
          {paymentResponse && (
            <div className="border p-4 shadow rounded-md mt-4 space-y-2">
              <h2 className="font-semibold">Payment Status</h2>
              <p><span className="font-medium">Payment ID:</span> {paymentResponse.pidx}</p>
              <p><span className="font-medium">Amount:</span> Rs. {paymentResponse.total_amount}</p>
              <p>
                <span className="font-medium">Status:</span> 
                <span style={{ color: currentStatus.color }}> {paymentResponse.status}</span>
              </p>
              <p><span className="font-medium">Transaction ID:</span> {paymentResponse.transaction_id || 'N/A'}</p>
              <p><span className="font-medium">Fee:</span> Rs. {paymentResponse.fee}</p>
              <p><span className="font-medium">Refunded:</span> {paymentResponse.refunded ? 'Yes' : 'No'}</p>
              <p style={{ color: currentStatus.color, fontWeight: 'bold' }}>{currentStatus.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
