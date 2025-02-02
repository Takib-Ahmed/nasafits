/* eslint-disable react/prop-types */
import Addresscard from "./Adresscard";

export default function Addressbooks({userAddresses}){
    return (
        <div className=" bg-white px-4">
         <h2 className="text-xl font-semibold w-full   p-4 pb-2 border-b-1 border-gray-200    ">Address Book</h2>
           <div className="flex  flex-col gap-4 w-full">
        {
        userAddresses.map((address,key)=>(
          <Addresscard key={key} {...address} className=' grid gap-1.5  border-b-1 border-gray-200  rounded-none' />
        ))
       } 
        
         </div></div>
        
    );
}