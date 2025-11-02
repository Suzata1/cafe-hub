
import React from "react";

const KhaltiButton: React.FC = () => {
  const handlePayment = async () => {
    try {
      const response = await fetch("/api/khaltiPayment", {
        method: "POST",
      });

      const data = await response.json();

      if (data.payment_url) {
        // Redirect user to Khalti payment page
        window.location.href = data.payment_url;
      } else {
        console.error("Payment initiation failed", data);
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Pay with Khalti
    </button>
  );
};

export default KhaltiButton;
