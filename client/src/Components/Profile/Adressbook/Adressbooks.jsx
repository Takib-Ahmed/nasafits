/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/react";
import EditAddressForm from "./Adressbookform";
import Addresscard from "./Adresscard";
import { useNavigate } from "react-router-dom";

export default function Addressbooks({userAddresses,Goto,setAdressbook}){
  const navigate = useNavigate()
    return (
        <div className=" bg-white p-4">
         <h2 className="text-xl font-semibold w-full   p-4 pb-2 border-b-1 border-gray-200    " >Address Book</h2>
           <div className="flex  flex-col-reverse gap-4 w-full">
        {

       userAddresses.length>0? userAddresses.map((address,key)=>(
        <Addresscard setAdressbook={setAdressbook}  key={key} Goto={Goto}  {...address} className=' grid gap-1.5  border-b-1 border-gray-200  rounded-none' />
      )):<EditAddressForm setAdressbook={setAdressbook}/>
       } 

         </div>
         {userAddresses.length>0 && <Button className=" w-full"  color="primary"  onClick={()=>{
    
          navigate(`/profile/${Goto}/address`)
         }} >Add Adress</Button>}</div>
        
    );
}