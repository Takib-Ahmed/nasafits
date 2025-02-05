import { useState } from "react";
import { Alert, Button, Input, Select } from "@nextui-org/react";
import { SelectItem } from "@heroui/react";

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
    { label: "bKash", key: "bkash" },
    { label: "Nagad", key: "nagad" },
    { label: "Rocket", key: "rocket" },
    { label: "Other", key: "other" },
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
  setTimeout(() => {
    setIsVisible(false)
  }, 5000);
}
else{
  alert('fill all datas')
}
    // You can send this object to an API or handle it as needed
  };

  return (
    <div className="w-[55%]  p-8 bg-white rounded-md">

<div className="flex justify-center text-center h-20 "><center className=" w-fit "><Alert className=" text-center   h-full "  variant={"flat"} color={Paid?'success':'primary'} ><p className=" pt-1.5 ">{Paid?'Your Order Has been Confirmed':`Your Order is pending, Pay ${Paying} to confirm the order`}</p></Alert> </center></div>
 
   
      <div className="mb-4">
        <Select label="Select Mobile Bank" onChange={setMobileBank} isRequired     color={mobileBank!=''?'success':'danger'}>
          {mobileBankOptions.map((bank) => (
            <SelectItem key={bank.key} value={bank.key}>
              {bank.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="">
        <Input
          type="text"
          isClearable
          label="Transaction ID"
          variant="bordered"
          value={transactionID}
      isRequired
          onChange={(e) => setTransactionID(e.target.value)}
          onClear={()=>setTransactionID('')}
        />
      </div>
      <center>or</center>

 

      <div className="">

        <Input type="file" onChange={handleImageUpload} className="mt-2" color="primary" label='Upload Transaction Screenshot' />
        {transactionImage && (
          <img
            src={URL.createObjectURL(transactionImage)}
            alt="Transaction Screenshot"
            className="mt-2 w-40 h-40 object-cover"
          />
        )}
      </div>

      <div className="flex justify-between">
        <Button onClick={handleGoBack} className="mt-4 bg-red-500 text-center w-40 text-md text-white">
          Go Back
        </Button>
        <Button onClick={handleSubmit} className="mt-4 bg-green-500 text-center w-40 text-md text-white">
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

