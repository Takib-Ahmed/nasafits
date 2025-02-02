import { Autocomplete, AutocompleteItem, Button, Checkbox, Textarea } from "@heroui/react";
import { Input } from "@nextui-org/react";
import { useState } from "react";

const Checkout = ({SelectedCarts}) => {
  const [paymentMethod, setPaymentMethod] = useState("cod"); // Default payment method
  const [selectedCity, setSelectedCity] = useState("-- Select Your City --");
  // Dummy product data (You can replace this with actual cart data)
  const totalAmount = SelectedCarts.reduce((total, selectedcarts) => total + selectedcarts.discountPrice * selectedcarts.quantity, 0);

  const cities = [
    "Dhaka", "Savar", "Nabinagar", "Ashulia", "Keraniganj", "Tongi", "Bagerhat",
    "Bandarban", "Barguna", "Barisal", "Bhola", "Bogra", "Brahmanbaria", "Chandpur",
    "Chapainawabganj", "Chittagong", "Chuadanga", "Comilla", "Coxs Bazar",
    "Dinajpur", "Faridpur", "Feni", "Gaibandha", "Gazipur", "Gopalganj", "Habiganj",
    "Jamalpur", "Jessore", "Jhalokathi", "Jhenaidah", "Joypurhat", "Khagrachari",
    "Khulna", "Kishoreganj", "Kurigram", "Kushtia", "Lakshmipur", "Lalmonirhat",
    "Madaripur", "Magura", "Manikganj", "Meherpur", "Moulvibazar", "Munshiganj",
    "Mymensingh", "Naogaon", "Narail", "Narayanganj", "Narsingdi", "Natore",
    "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh", "Patuakhali",
    "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur", "Satkhira",
    "Shariatpur", "Sherpur", "Sirajganj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon"
  ];
  

  const shippingCost = 60;
  const payableAmount = totalAmount + shippingCost;

  return (
    <div className=" mx-auto py-20 px-5 sm:px-10 lg:p-20   bg-white shadow-md rounded-md ">
      <h2 className="text-3xl font-bold text-center pb-10">Checkout Info</h2>

      <div className=" flex flex-col-reverse lg:flex-row justify-around gap-5 flex-wrap lg:flex-nowrap ">
        {/* Left Section - User Info */}
        <div className="w-full md:px-5 lg:px-10">
          <h3 className="font-bold text-lg mb-2">Contact Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    
            <Input
      isClearable
      className="lg:max-w-xs"
  
      label="Full Name"
     
      type="name"
      variant="bordered"
isRequired
  
    />
            <Input
      isClearable
    className="lg:max-w-xs"
   isRequired
      label="Email"
     
      type="email"
      variant="bordered"
  
     
    />
       
            <Input
      isClearable
className="lg:max-w-xs"
  
      label="Phone Number"
    isRequired
      type="name"
      variant="bordered"

     
    />
          </div>

          <h3 className="font-bold text-lg mb-2">Shipping Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Textarea
    className="lg:max-w-xs"
    isRequired
      label="Detailed Address"
 
      variant="bordered"
    />
          
          <Textarea
 className="lg:max-w-xs"
    isRequired
      label="Note (Optional)"
     variant="bordered"
 
    />
      
          
 
            <div className="lg:max-w-xs">
   
   <Autocomplete
     label="Select Your City"
    variant="bordered"
     defaultItems={cities.map((city) => ({ label: city, key: city }))}
     selectedKey={selectedCity}
     onSelectionChange={setSelectedCity}
     className="w-full"
     isRequired
   >
     {(item) => (
       <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
     )}
   </Autocomplete>

 
 </div>

 <Input
      isClearable
  className="lg:max-w-xs"
  
      label="Alt. Phone (Optional)"

      type="name"
      variant="bordered"

     
    />




          </div>

          <div className="bg-gray-100 p-6  mb-4 text-center  w-full rounded-lg">
  <h3 className="text-lg font-semibold">Your total payable amount is</h3>
  <p className="text-2xl font-bold text-green-600">৳{payableAmount}</p>

  <h4 className="font-bold mt-4 text-lg">Breakdown</h4>

  {/* Table Section with Proper Borders */}
  <div className="border mt-2 overflow-hidden">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200 border-b border-gray-300">
          <th className="py-2 px-4 text-left font-semibold border-r border-gray-300">Purpose</th>
          <th className="py-2 px-4 text-right font-semibold">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-300">
          <td className="py-2 px-4 text-left border-r border-gray-300">Total</td>
          <td className="py-2 px-4 text-right">৳{totalAmount}</td>
        </tr>
        <tr>
          <td className="py-2 px-4 text-left border-r border-gray-300">Shipping</td>
          <td className="py-2 px-4 text-right">৳{shippingCost}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="text-sm text-gray-600 mt-3">
    You will get the delivery <span className="font-bold text-green-600">within 2-3 Days</span> after confirmation.
  </p>
</div>


          {/* Payment Options */}
          <h3 className="font-bold mb-2">Payment Options</h3>
          <div className="flex space-x-4 mb-4">
            <button
              className={`payment-btn ${paymentMethod === "cod" ? "border-green-500 bg-green-500 text-white" : ""}`}
              onClick={() => setPaymentMethod("cod")}
            >Delivery Payment</button>
            <button
              className={`payment-btn ${paymentMethod === "card" ? "border-green-500 bg-green-500 text-white" : ""}`}
              onClick={() => setPaymentMethod("card")}
            >Full Payment</button>
   
          </div>

          {/* Coupon Code */}
          <div className="flex space-x-2 mb-4">
          <Input
      isClearable
      className="max-w-xs  flex-1 "
  
      label="Enter Coupon Code Here"

      type="name"
      variant="bordered"
size="sm"
     
    />

<Button radius="lg" size="lg"  className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Coupon</Button>
   
          </div>

          {/* Terms & Confirm Order */}
          <div className="mb-4">
        
       
            <label   className=" text-medium cursor-pointer">
            <Checkbox  size="sm"  type="checkbox" id="terms" className="  -translate-y-0.5" >

</Checkbox>
              I agree to the <span className="text-blue-500">Terms & Conditions, Refund Policy</span> and
              <span className="text-blue-500"> Privacy Policy</span>.
            </label>
          </div>
          <Button radius="lg" size="lg"  className="w-full bg-green-600 text-white py-3 rounded-md text-lg font-bold">Confirm Order</Button>
 
        </div>

        {/* Right Section - Cart Overview */}
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
    </div>
  );
};

export default Checkout;
