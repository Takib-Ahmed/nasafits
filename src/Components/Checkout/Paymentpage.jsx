import PaymentConfirmation from "./Paymentconfrimation";

export default function Paymentpage(){
    return (
        <>
            <div className="mx-auto py-20 px-5 sm:px-10 lg:p-20 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold text-center pb-10"  onClick={()=>{
      
       
      }}>Checkout Info</h2>

      <div className="flex flex-col-reverse lg:flex-row justify-around gap-5 flex-wrap lg:flex-nowrap">
    
           <PaymentConfirmation/>
        <div className=" w-full lg:w-[75%] bg-gray-100 p-4 sm:px-5 shadow  h-fit mt-5 flex flex-col lg:mx-10 mb-0 ">
          <h3 className="font-bold text-lg mb-3">Cart Overview</h3>
          {SelectedCarts.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2 mb-2">
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
              <p>Total:</p> <p>৳{totalAmount}</p>
            </div>
            <div className="flex justify-between font-medium">
              <p>Shipping:</p> <p>৳{shippingCost}</p>
            </div>
            <div className="flex justify-between font-bold text-lg text-green-600 mt-2">
              <p>Payable:</p> <p>৳{payableAmount}</p>
            </div>
          </div>
        </div>
      </div>
   
    </div></>
    );
}