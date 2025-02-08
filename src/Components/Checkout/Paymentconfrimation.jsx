/* eslint-disable react/prop-types */
import { useState } from "react";
import { Alert, Button, Input, Select } from "@nextui-org/react";
import { SelectItem } from "@heroui/react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
const PaymentConfirmation = ({placedOrdered,Paying ,setOrderhistory}) => {
  const [transactionID, setTransactionID] = useState("");
  const [mobileBank, setMobileBank] = useState("");
  const [transactionImage, setTransactionImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
const [Paid,setpaid] = useState(false)
const navigate = useNavigate()
  const handleImageUpload = (e) => {
    setTransactionImage(e.target.files[0]);
  };

  const mobileBankOptions = [
    { label: "Bkash 0123298320", key: "bkash" },
    { label: "Nagad 01623383555", key: "nagad" },

  ];

  // Collect input values into an object
  const handleSubmit = () => {
if(mobileBank && transactionID || transactionImage){
  const paymentData = {
    transactionID,
    mobileBank,
    transactionImage,
  };
  setpaid(true)
  setIsVisible(true)
  sendEmail(placedOrdered,paymentData)
  setTimeout(() => {
    setIsVisible(false)
  }, 2000);
  setOrderhistory((prev)=>
    prev.map((placedOrder)=>placedOrder.Id === placedOrdered.Id  ? {...placedOrder,status:placedOrdered.paymentMethod}:placedOrder))
  navigate('/cart')
}
else{
  alert('fill all datas')
}
    // You can send this object to an API or handle it as needed
  };
  const sendEmail = (placedOrdered, paymentData) => {
    const templateParams = {
      Order_id: placedOrdered.Id,
      full_name: placedOrdered.fullName,
      email: placedOrdered.email,
      phone_number: placedOrdered.phoneNumber,
      alt_phone: placedOrdered.altPhone,
      city: placedOrdered.city,
      address: placedOrdered.detailedAddress,
      coupon_code: placedOrdered.couponCode,
      payment_method: placedOrdered.paymentMethod,
      total_amount: placedOrdered.totalAmount,
      note: placedOrdered.note,
      agree_Terms: placedOrdered.agreeTerms,
      transactionID: transactionID,
      mobileBank: mobileBank,
      transactionImage: transactionImage ? transactionImage.name : 'No Image', // ফাইলের নাম পাঠানো
      products_list: placedOrdered.Products.map(
        (product) =>
          `${product.name} 
          Size: ${product.selectedsize}, 
          Quantity: ${product.quantity}, 
          URL: ${product.ProductAdress}, 
          Id: ${product.id}`
      ).join('\n'),
      // এখানে paymentData থেকে ডাটা পাঠাচ্ছেন
  
    };
  
    console.log('Email Template Params:', templateParams);  // চেক করুন সব ডাটা আসছে কিনা
  
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
        }
      );
  };
  
  const handlecanceled = ()=>{
    setOrderhistory((prev)=>
      prev.map((placedOrder)=>placedOrder.Id === placedOrdered.Id  ? {...placedOrder,status:'canceled'}:placedOrder))
  
  }
  const status = placedOrdered.status === 'canceled' || placedOrdered.status === 'Delivery Paid' || placedOrdered.status === 'Fully Paid';

  return (
    <div className=" w-full md:w-[55%] grid gap-2 p-0 sm:p-3  md:p-5 md:pt-0 lg:p-8 lg:pt-0 bg-white rounded-md">

<div className="flex justify-center text-center  h-20  text-xs md:text-sm lg:text-medium "><center className=" w-fit "><Alert   className=" text-center   h-full " variant={"flat"} color={status?placedOrdered.status ==='canceled' ? 'danger':'success':'primary'} ><p className={" pt-3 md:pt-1.5 "}>{status?placedOrdered.status ==='canceled' ? 'Order canceled':'Order requested':placedOrdered.status === 'canceled'?'Your Order has been canceled':`Payment is pending, Pay ${Paying}tk to confirm the order`}</p></Alert> </center></div>
 
   {!status && <>
    <div className="mb-3">
        <Select label="Select Mobile Bank" variant="flat" className="text-xs md:text-sm lg:text-medium " size="md" onChange={(e)=>{
          setMobileBank(e.target.value)
          console.log(mobileBank)
        }} isRequired     color={mobileBank!=''?'success':'danger'}>
          {mobileBankOptions.map((bank) => (
            <SelectItem color="success" key={bank.key} value={bank.key}>
              {bank.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="">
        <Input size="md"
          type="text"
          isClearable
          label="Transaction ID"
          variant="bordered"
          value={transactionID}
      isRequired
          onChange={(e) => setTransactionID(e.target.value)}
          onClear={()=>setTransactionID('')}
        />
           <center>or</center>
      </div>
   

 

      <div className="">

        <Input size="md" type="file" onChange={handleImageUpload}  className=" text-white" color="primary" label='Upload Transaction Screenshot' />
        {transactionImage && (
          <img
            src={URL.createObjectURL(transactionImage)}
            alt="Transaction Screenshot"
            className="mt-2 w-40 h-40 object-cover"
          />
        )}
      </div></>}
   

      <div className="flex justify-between">
        <Button onClick={()=>{
         status  ? navigate('/cart'):handlecanceled()
        }} className={` bg-red-500 text-center   text-md text-white ${
          status ?'w-full':'w-28 sm:w-40 mt-4'
        }`}>
        { status ?'Go Back':'Cancel'}
        </Button>
        <Button onClick={handleSubmit} className={` bg-green-500 text-center   text-md text-white ${

status?'hidden':'w-28 sm:w-40 mt-4'
}`}>
          Submit
        </Button>
      </div>
      

      {isVisible && (
   <div className=" z-50 fixed top-5  md:top-16 translate-y-4 md:translate-y-20 lg:translate-y-5  left-0   flex md:justify-end justify-center   w-full">
 <div className=" w-96 md:-translate-x-6">
 <Alert
          color="success"
 className="   "
 title='Order Requested'
          isVisible
          description={'You will a receive confirmation message'}
          variant="faded"
          onClose={() => setIsVisible(false)}
        />
 </div>
   </div>
      ) }

    </div>
  );
};

export default PaymentConfirmation;

