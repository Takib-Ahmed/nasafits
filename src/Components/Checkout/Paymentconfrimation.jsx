import { useState } from "react";
import { Alert, Button, Input, Select } from "@nextui-org/react";
import { SelectItem } from "@heroui/react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const PaymentConfirmation = ({ handleGoBack,placedOrder,Paying }) => {
  const [transactionID, setTransactionID] = useState("");
  const [mobileBank, setMobileBank] = useState("");
  const [transactionImage, setTransactionImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
const [Paid,setpaid] = useState(false)

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
  sendEmail(placedOrder,paymentData)
  setTimeout(() => {
    setIsVisible(false)
  }, 5000);
}
else{
  alert('fill all datas')
}
    // You can send this object to an API or handle it as needed
  };
  const sendEmail = (Placedorder, paymentData) => {
    const templateParams = {
      Order_id: Placedorder.Id,
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
      agree_Terms: Placedorder.agreeTerms,
      transactionID: transactionID,
      mobileBank: mobileBank,
      transactionImage: transactionImage ? transactionImage.name : 'No Image', // ফাইলের নাম পাঠানো
      products_list: Placedorder.Products.map(
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
  

  return (
    <div className=" w-full md:w-[55%] grid gap-2 p-0 sm:p-3  md:p-5 md:pt-0 lg:p-8 lg:pt-0 bg-white rounded-md">

<div className="flex justify-center text-center  h-20  text-xs md:text-sm lg:text-medium "><center className=" w-fit "><Alert   className=" text-center   h-full " variant={"flat"} color={Paid?'success':'primary'} ><p className=" pt-3 md:pt-1.5 ">{Paid?'Your Order Has been Confirmed':`Payment is pending, Pay ${Paying}tk to confirm the order`}</p></Alert> </center></div>
 
   
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
      </div>

      <div className="flex justify-between">
        <Button onClick={handleGoBack} className="mt-4 bg-red-500 text-center  w-28 sm:w-40 text-md text-white">
          Cancel
        </Button>
        <Button onClick={handleSubmit} className="mt-4 bg-green-500 text-center w-28  sm:w-40 text-md text-white">
          Submit
        </Button>
      </div>

      {isVisible && (
   <div className=" absolute  top-20   -translate-x-1/2 right-0">
         <Alert
          color="success"
 className="  "
 title='Payment Confirmation'
          isVisible={isVisible}
          description={'Your Order Has been Confirmed'}
          variant="faded"
          onClose={() => setIsVisible(false)}
        />
   </div>
      ) }

    </div>
  );
};

export default PaymentConfirmation;

