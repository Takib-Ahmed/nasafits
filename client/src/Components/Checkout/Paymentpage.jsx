import { useState } from "react";
import PaymentConfirmation from "./Paymentconfrimation";

export default function Paymentpage({placedOrdered,setOrderhistory}){
  const [Paying,setPaying] = useState(placedOrdered.paymentMethod==='PayDelivery'?placedOrdered.shippingCost:placedOrdered.payableAmount)
    return (
        <>
            <div className="mx-auto py-20 px-5 lg:px-10 lg:p-20 bg-white shadow-md rounded-md">
      <h2 className=" text-2xl md:text-3xl font-bold text-center pb-5 md:pb-10"  onClick={()=>{
      console.log(placedOrdered.paymentMethod)
    
      }}>Payment Confirmation</h2>

      <div className="flex flex-col-reverse md:flex-row-reverse justify-around gap-5 flex-wrap md:flex-nowrap">
    
           <PaymentConfirmation Paying={Paying} placedOrdered={placedOrdered}setOrderhistory={setOrderhistory}/>
        <div className=" w-full md:w-[50%]  bg-gray-100 p-4 sm:px-5  shadow   flex flex-col lg:mx-10 mb-0 ">
          <h3 className="font-bold text-lg mb-3">Cart Overview</h3>
          {placedOrdered.Products.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2 mb-2 h-full ">
              <img src={item.coverImage} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
              <div className="flex-1 ml-3">
                <p className=" text-sm lg:font-medium sm:text-medium">{item.name}</p>
                <p className=" text-sm text-gray-500 pt-0.5">Size: {item.selectedsize}</p>
                <p className="text-gray-500 ">Quantity: {item.quantity}</p>
              </div>
              <p className=" text-green-600 ">৳{item.discountPrice}</p>
            </div>
          ))}

          <div className="mt-4">
            <div className="flex justify-between font-medium">
              <p>Total Payable:</p> <p>৳{placedOrdered.payableAmount}</p>
            </div>
            <div className="flex justify-between font-medium">
              <p>You are Paying :</p> <p>৳{Paying}</p>
            </div>
            <div className="flex justify-between font-bold text-lg text-green-600 mt-2">
              <p>Remaining </p> <p>৳{placedOrdered.payableAmount-Paying}</p>
            </div>
          </div>
        </div>
      </div>
   
    </div></>
    );
}