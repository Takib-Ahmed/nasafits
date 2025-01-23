/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoTrash } from "react-icons/io5";
import Cartcard from "./Cartcard";
import { Link } from "react-router-dom";
export default function Cartpage({cartedProduct,setcartedproduct}){

   

    
    return (
        <>
   <center className=" text-3xl  mt-20  ">Your Cart</center>  

  

   <div className={`grid items-start gap-0 ${cartedProduct.length<2 ? 'h-96':'h-full'} `}>
        {/* Table Header */}
        <div className="hidden md:flex justify-between items-center px-1 md:px-4 lg:mx-14 py-2 border-b bg-white font-semibold text-sm ">
          <div className="w-[20%] text-left break-words">Product</div>
          <div className="w-[15%] text-center break-words">Unit Price</div>
          <div className="w-[15%] text-center break-words">Size</div>
          <div className="w-[15%] text-center break-words">Quantity</div>
          <div className="w-[15%] text-center break-words">Subtotal</div>
          <div className="w-[20%] text-right break-words">Action</div>
        </div>
      
        {/* Table Content */}
        
<div className=" flex  flex-col-reverse gap-5  ">
  { cartedProduct.length > 0? 
  
  cartedProduct.map((product,key)=>(
    <Cartcard  product={product} type='maincart'  key={key}  position={key} cartedProduct={cartedProduct} setcartedproduct={setcartedproduct} />))
: <div className=" h-96 flex flex-col gap-2 justify-center items-center text-center">
<p>Your cart it empty</p>
<Link to='/shop' className=" bg-red-500 text-white p-3 rounded-lg">Start Shopping Now</Link>
</div>
}


</div>
      </div>

        </>
    );
}