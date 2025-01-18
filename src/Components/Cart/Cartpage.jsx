import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoTrash } from "react-icons/io5";
import Cartcard from "./Cartcard";
export default function Cartpage(){
    const product = {
        id: 1,
        coverImage: "/collections/itachi.png",
        name: "Mens Premium Hoodie Itachi - Tsukuyomi",
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        images: [
          "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
          "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
          "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png"
        ],
        sizes: ["M", "L", "XL", "2XL"]
      }
   

    
    return (
        <>
   <center className=" text-3xl  mt-20  ">Your Cart</center>  

  

   <div className="overflow-x-auto">
        {/* Table Header */}
        <div className="hidden md:flex justify-between items-center px-1 md:px-4 lg:mx-14 py-2 border-b bg-white font-semibold text-sm">
          <div className="w-[20%] text-left break-words">Product</div>
          <div className="w-[15%] text-center break-words">Unit Price</div>
          <div className="w-[15%] text-center break-words">Size</div>
          <div className="w-[15%] text-center break-words">Quantity</div>
          <div className="w-[15%] text-center break-words">Subtotal</div>
          <div className="w-[20%] text-right break-words">Action</div>
        </div>
      
        {/* Table Content */}
        
<div className=" flex flex-col gap-5">
<Cartcard product={product}  />
<Cartcard product={product}  />                      
<Cartcard product={product}  />
</div>
      </div>

        </>
    );
}