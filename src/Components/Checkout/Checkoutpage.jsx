/* eslint-disable react/prop-types */
import { Autocomplete, AutocompleteItem, Button, Checkbox, Textarea } from "@heroui/react";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import PaymentConfirmation from "./Paymentconfrimation";
const Checkout = ({ SelectedCarts,setOrderhistory }) => {
  const [paymentMethod, setPaymentMethod] = useState("Deliverypaid"); // Default payment method
  const [selectedCity, setSelectedCity] = useState("");
  const storedUser = JSON.parse(localStorage.getItem("userdata")) || {};
  const [inputName,setinputname] = useState()
  // User input state
  const [Order, setOrder] = useState({
    fullName: storedUser.name ? storedUser.name :'',
    email:  storedUser.email ? storedUser.email:'',
    phoneNumber: storedUser.phone ? storedUser.phone:'',
    detailedAddress: "",
    note: "",
    altPhone: "",
    couponCode: "",
    agreeTerms: false,
    Id:Date.now(),
    Products:SelectedCarts,
    paid:'',


    
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setOrder((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
    setinputname(name)
  };
  const handleClear = (name) => {
  
     if(name){
      setOrder((prevData) => ({
        ...prevData,
         [name]:''
      }));
     }
    
  

  };
  const handleCleardes = () => {
  
   
     setOrder((prevData) => ({
       ...prevData,
        [inputName]:''
     }));
    
   
 

 };

  const totalAmount = SelectedCarts.reduce(
    (total, cart) => total + cart.discountPrice * cart.quantity,
    0
  );
  const shippingCost = 60;
  const payableAmount = totalAmount + shippingCost; 

  const cities = [
    "Dhaka", "Savar", "Nabinagar", "Ashulia", "Keraniganj", "Tongi", "Bagerhat",
    "Bandarban", "Barguna", "Barisal", "Bhola", "Bogra", "Brahmanbaria", "Chandpur",
    "Chapainawabganj", "Chittagong", "Chuadanga", "Cumilla", "Coxs Bazar",
    "Dinajpur", "Faridpur", "Feni", "Gaibandha", "Gazipur", "Gopalganj", "Habiganj",
    "Jamalpur", "Jessore", "Jhalokathi", "Jhenaidah", "Joypurhat", "Khagrachari",
    "Khulna", "Kishoreganj", "Kurigram", "Kushtia", "Lakshmipur", "Lalmonirhat",
    "Madaripur", "Magura", "Manikganj", "Meherpur", "Moulvibazar", "Munshiganj",
    "Mymensingh", "Naogaon", "Narail", "Narayanganj", "Narsingdi", "Natore",
    "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh", "Patuakhali",
    "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur", "Satkhira",
    "Shariatpur", "Sherpur", "Sirajganj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon"
  ];
  const sendEmail = (Placedorder) => {
    const templateParams = {
      Order_id:Placedorder.Id,
      full_name: Placedorder.fullName,
      email: Placedorder.email,
      phone_number: Placedorder.phoneNumber,
      alt_phone: Placedorder.altPhone,
      city: Placedorder.city,
      address: Placedorder.detailedAddress,
      coupon_code: Placedorder.couponCode,
      payment_method: Placedorder.paymentMethod,
      total_amount: Placedorder.totalAmount,
      note: Placedorder.note,
      agree_Terms:Placedorder.agreeTerms,
      products_list: Placedorder.Products.map(
        (product) =>
        `${product.name} 
        Size: ${product.selectedsize}, 
        Quantity: ${product.quantity}, 
        URL: ${product.ProductAdress}, 
        Id: ${product.id}`
      ).join('\n')
    };
    console.log(Placedorder.Products)
   
    emailjs
      .send('service_q26jdmu', 'template_64jstfk', templateParams, {
        publicKey: 'UhFs-e6E1DIJ4bSAw',
      })
      .then(
        () => {
          console.log('Email sent successfully!');
       
        },
        (error) => {
          console.log('Failed to send email:', error.text);
        },
      );
  };

  const handleSubmit = () => {
    if(Order.agreeTerms && Order.fullName!='' && Order.phoneNumber!='' && Order.email!='' && selectedCity!='' ){

      const Placedorder = {
        ...Order,
        city: selectedCity,
        Ordered:true,
        paymentMethod,
        totalAmount: totalAmount + shippingCost
      };
      setOrderhistory((prev)=>[...prev,Placedorder])
   
   sendEmail(Placedorder);
    }
    else{
      alert('Plz fill all the inputs')
    }

    // Backend API call or further processing
  };








 

  return (
    <div className="mx-auto py-20 px-5 sm:px-10 lg:p-20 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold text-center pb-10"  onClick={()=>{
      
       
      }}>Checkout Info</h2>

      <div className="flex flex-col-reverse lg:flex-row justify-around gap-5 flex-wrap lg:flex-nowrap">
        <div className="w-full md:px-5 lg:px-10">
          <h3 className="font-bold text-lg mb-2">Contact Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              { label: "Full Name", name: "fullName", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Phone Number", name: "phoneNumber", type: "text" }
            ].map((field) => (
              <Input
                key={field.name}
                isClearable
                className="lg:max-w-xs"
                label={field.label}
                name={field.name}
                type={field.type}
                variant="bordered"
                value={Order[field.name]}
                onChange={handleChange}
                isRequired
               onClear={()=>{
                handleClear([field.name])
               }}
              />
            ))}
          </div>

          <h3 className="font-bold text-lg mb-2">Shipping Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              { label: "Detailed Address", name: "detailedAddress" },
              { label: "Note (Optional)", name: "note" }
            ].map((field) => (
              <Textarea
                key={field.name}
                className="lg:max-w-xs"
                label={field.label}
                name={field.name}
                variant="bordered"
                value={Order[field.name]}
                onChange={handleChange}
                isRequired={field.name !== "note"}
                isClearable = { Order[field.name]!='' ?true:false}
                
             onClear={Order[field.name]!='' && handleCleardes}
              />
            ))}

            <Autocomplete
              label="Select Your City"
              variant="bordered"
              defaultItems={cities.map((city) => ({ label: city, key: city }))}
              selectedKey={selectedCity}
              onSelectionChange={setSelectedCity}
              className="lg:max-w-xs"
              isRequired
            >
              {(item) => <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>}
            </Autocomplete>

            <Input
              isClearable
              className="lg:max-w-xs"
              label="Alt. Phone (Optional)"
              name="altPhone"
              type="text"
              variant="bordered"
              value={Order.altPhone}
              onChange={handleChange}
              onClear={()=>{
                handleClear(['altPhone'])
               }}
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

          <h3 className="font-bold mb-2">Payment Options</h3>
          <div className="flex space-x-4 mb-4">
            {[
              { label: "Delivery Payment", method: "Deliverypaid" },
              { label: "Full Payment", method: "Fullypaid" }
            ].map((option) => (
              <button
                key={option.method}
                className={`payment-btn ${
                  paymentMethod === option.method ? "border-green-500 bg-green-500 text-white" : ""
                }`}
                onClick={() => setPaymentMethod(option.method)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="flex space-x-2 mb-4">
            <Input
              isClearable
              className=" w-full"
              label="Enter Coupon Code Here"
              name="couponCode"
              type="text"
              variant="bordered"
              value={Order.couponCode}
              onChange={handleChange}
              onClear={()=>{
                handleClear(['couponCode'])
               }}
              size="sm"
            
              validate={(value) => {
                if (value.length < 3) {
                  return "Username must be at least 3 characters long";
                }
      
                return value === "admin" ? "Nice try!" : null;
              }}
            
            />
            <Button radius="lg" size="lg" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add Coupon
            </Button>
          </div>

          <div className="mb-4">
            <Checkbox
              size="sm"
              name="agreeTerms"
              checked={Order.agreeTerms}
              onChange={handleChange}
            >
              I agree to the <span className="text-blue-500">Terms & Conditions</span>, <span className="text-blue-500">Refund Policy</span>, and <span className="text-blue-500">Privacy Policy</span>.
            </Checkbox>
          </div>

          <Button onClick={handleSubmit} radius="lg" size="lg" className="w-full bg-green-600 text-white py-3 rounded-md text-lg font-bold">
            Place Order
          </Button>
        </div>
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
   
    </div>
  );
};

export default Checkout;



