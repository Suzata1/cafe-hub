import OnlineOrder from "./OnlineOrder";

export default function OnlineOrderPage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-center text-orange-600">Online-Order</h1>
     
   <OnlineOrder/>
    </div>
  );
}

// use client or usestate are not allowed (hook method not allowed )
//make the different file -> make the component