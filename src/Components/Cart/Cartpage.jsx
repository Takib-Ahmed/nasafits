/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoTrash } from "react-icons/io5";
import Cartcard from "./Cartcard";
import { Link } from "react-router-dom";
import { BsBagCheckFill } from "react-icons/bs";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useLocalStorage as useSelectedCartsStorage } from "../hooks/useLocalStorage";
import { Button } from "@heroui/react";
import { Checkbox } from "@nextui-org/react";

export default function Cartpage({cartedProduct,setcartedproduct,setselectedcarts,SelectedCarts}){

   


const totalMainPrice = SelectedCarts.reduce((total, selectedcarts) => total + selectedcarts.mainPrice, 0);
const totalDiscountprice = SelectedCarts.reduce((total, selectedcarts) => total + selectedcarts.discountPrice, 0);
const totalQuantity = SelectedCarts.reduce((total, selectedcarts) => total + selectedcarts.quantity, 0);
const totalSubtotal = SelectedCarts.reduce((total, selectedcarts) => total + selectedcarts.subtotal, 0);
const {setItem} = useLocalStorage('cartedProduct')
const storedUser = JSON.parse(localStorage.getItem("userdata")) || {};       

const { setItem: setSelectedCartsItem } = useSelectedCartsStorage('selectedcarts')

useEffect(() => {

 if(SelectedCarts.length>0){
  setSelectedCartsItem(SelectedCarts)
 }
}, [cartedProduct, setItem,setSelectedCartsItem,SelectedCarts]);

useEffect(() => {
  const savedCartedProduct = JSON.parse(localStorage.getItem("cartedProduct") || "[]");
  
  // Only update cartedProduct if it's empty (prevents overwriting)

    setItem(cartedProduct);
  
}, [cartedProduct,setcartedproduct,setItem]); 



const handleAllCheckboxChange=(e)=>{
setcartedproduct((prev)=>
prev.map((carted)=>({...carted,Ischecked:e.target.checked})))
}


    return (
        <>
   <center className=" text-3xl  mt-20  ">Your Cart</center>  

  

   <div className={`grid items-start gap-0 `}>
        {/* Table Header */}
        <label className="hidden cursor-pointer md:flex justify-between items-center px-1 md:px-4 lg:mx-14 py-2 border-b bg-white font-semibold text-sm ">
    
          <div className="w-[20%] text-left break-words">    <Checkbox 
    
    size="sm" 
    type="checkbox" 
    id="checked"  
    className=" md:scale-125 me-2"  
    isSelected={cartedProduct.every(carted=>carted.Ischecked == true)}  
    onChange={(e) => handleAllCheckboxChange(e)
  
  
      
    }
  />Product</div>
          <div className="w-[15%] text-center break-words">Unit Price</div>
          <div className="w-[15%] text-center break-words">Size</div>
          <div className="w-[15%] text-center break-words pe-9 ">Quantity</div>
          <div className="w-[15%] text-center break-words">Subtotal</div>
          <div className="w-[20%] text-right break-words">Action</div>
        </label>
      
        <div className=" flex flex-row-reverse  md:hidden w-full justify-between  overflow-hidden  px-1  py-2  border-gray-500 border-b-2"><Checkbox 
    
    size="sm" 
    type="checkbox" 
    id="checked"  
    className=" md:scale-125"  
    isSelected={cartedProduct.every(carted=>carted.Ischecked == true)}  
    onChange={(e) => handleAllCheckboxChange(e)
  
  
      
    }
  /><div>Select ALL</div></div>
        {/* Table Content */}
        
<div className=" flex  flex-col-reverse gap-5  ">
  { cartedProduct.length > 0? 
  
  cartedProduct.map((product,key)=>(
    <Cartcard setselectedcarts={setselectedcarts}  product={product} type='maincart'  key={key}  position={key} cartedProduct={cartedProduct} setcartedproduct={setcartedproduct} />))
: <div className="h-96 flex flex-col gap-2 justify-center items-center text-center">

<p>Your cart it empty</p>
<Link to='/shop' className=" bg-red-500 text-white p-3 rounded-lg">Start Shopping Now</Link>
</div>
}


</div>
      </div>

      <div className={`grid items-start gap-0    h-full `}>
        {/* Table Header */}
        <div className="hidden md:flex justify-between items-center px-1 md:px-4 lg:mx-14 py-2 border-b bg-white font-semibold text-sm ">
          <div className="w-[16%] text-left break-words">Product Count</div>
          <div className="w-[15%] text-center break-words">Unit Total Price</div>
          <div className="w-[20%] text-center break-words">Total Quantity</div>
          <div className="w-[15%] text-end break-words">Subtotal Price</div>
          <div className="w-[20%] text-center break-words">Action</div>
        </div>
      
        {/* Table Content */}
        
<div className=" flex  flex-col-reverse gap-5  ">
{
   <div
   
   className={`flex flex-wrap justify-between items-center px-1 border-b bg-white md:flex-nowrap gap-1 md:gap-0 md:px-4 lg:mx-14 py-2 `}
 >
   {/* Product Column */}

   <div className={`hidden md:flex items-center gap-2 lg:gap-2.5 flex-row-reverse md:flex-row w-full md:w-[20%] md:flex-nowrap`}>
  
<div className={`flex items-center gap-2 lg:gap-4 w-full  md:flex-nowrap ps-10 `}> 
<div className="cover  text-center">
      
 
     {SelectedCarts.length}
    </div>
   

  </div>

</div>
 
   {/* Unit Price Column */}
   <div className={` hidden md:flex justify-start gap-2 w-full md:w-[20%] md:flex-col md:items-start  md:ps-4   lg:ps-12`}>
     <div className="mainprice text-red-500  ">
       <s>{totalMainPrice}৳</s>
     </div>
     <div className="discountprice text-lg text-green-400">{totalDiscountprice}৳</div>
   </div>
 
 
 
   {/* Quantity Column */}
   <div className={`hidden md:flex justify-between w-full md:w-[20%] md:justify-start  md:-translate-x-4 lg:translate-x-0`}>
     <div className="flex gap-2  md:w-28    md:justify-center ">
   
       <p className="  select-none ">{totalQuantity}</p>
  
     </div>
   </div>
 
   {/* Subtotal Column */}
   <div className={`flex  w-full md:w-[15%] justify-center  bg-red-500 text-white p-2 rounded-lg   `}>
     <div className="discountprice text-lg ">Total {totalSubtotal}৳</div>
   </div>
 
   {/* Action Column */}
   <div className={`flex gap-2 justify-center  w-full     md:flex-col md:items-center  md:w-[18%] `}>
  
<Button className={`bg-green-600 w-full p-2  rounded-lg flex gap-2 justify-center text-white items-center  text-nowrap  text-lg ${SelectedCarts.length>0 ?'cursor-pointer':'cursor-not-allowed'}`}>
<Link to={SelectedCarts.length > 0 ? (Object.keys(storedUser).length === 0 ? '/account' : '/checkout') : ''} 
      className={`bg-green-600 w-full p-2 rounded-lg flex gap-2 justify-center text-white items-center text-nowrap text-lg ${SelectedCarts.length > 0 ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
  Checkout <BsBagCheckFill className="pt-0 text-medium mb-0.5" />
</Link>

</Button>
    
   </div>
 </div>
}


</div>
      </div>
        </>
    );
}