/* eslint-disable react/prop-types */
import { PiShoppingCartSimple } from "react-icons/pi";
import { useEffect, useState } from "react";
import {  BsFillCartCheckFill } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { MdOpenInFull } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Cartcard from "./Cartcard";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Badge, Checkbox } from "@nextui-org/react";
import axios from 'axios'
export default function Sidecart({cartedProduct,setcartedproduct,SelectedCarts,setselectedcarts}){
  const totalSubtotal = SelectedCarts.reduce((total, selectedcarts) => total + selectedcarts.subtotal, 0);
  const storedUser = JSON.parse(localStorage.getItem("userdata")) || {};   
    const [showcart,setshowcart] = useState(false)
    const location = useLocation();
    const {setItem} = useLocalStorage('cartedProduct')

  const fetchAPI = async()=>{
    const response = await axios.get("http://localhost:3000/api")
    console.log(response.data.numbers)
  }
    
    useEffect(() => {
      const savedCartedProduct = JSON.parse(localStorage.getItem("cartedProduct") || "[]");
      
      // Only update cartedProduct if it's empty (prevents overwriting)
  
        setItem(cartedProduct);
      
    }, [cartedProduct,setcartedproduct,setItem]); 
 // Removed dependency to run only on mount
    
 const handleAllCheckboxChange=(e)=>{
  setcartedproduct((prev)=>
  prev.map((carted)=>({...carted,Ischecked:e.target.checked})))
  }
  
    return (
        <>
      {
        !location.pathname.includes('/cart')  && 
        
        <div className={` fixed  right-0 top-[0rem] z-50 w-80 lg:w-[500px] h-[100%]   bg-white shadow-lg rounded-lg transition-all duration-300 ${showcart ?'translate-x-0':'translate-x-[100%]'}`}>
          <div className="absolute  w-fit right-80 lg:right-[32rem] top-[30rem] z-50  badgewrapper  hover:text-cyan-200 text-white  "
          onClick={()=>{
            setshowcart((prev)=>!prev)
            fetchAPI()
            }}
          >   <Badge color="white" content={cartedProduct.length}  isInvisible={false} shape="circle"  size='sm'  className={` ${cartedProduct.length <1000 && 'badge'} transition-all duration-300  outline-none border-none mt-[1.04rem] sm:mt-[1.1rem] lg:mt-[1.2rem] bg-slate-700   w-0.5 me-[1rem] sm:me-[1.1rem]  lg:me-[1.2rem]   text-xs`} onClick={()=>{
            setshowcart((prev)=>!prev)
            fetchAPI()
            }}>
     
     
        <PiShoppingCartSimple className="text-slate-700 bg-cyan-200  rounded-full cursor-pointer p-2  cart transition-all duration-300  text-[2.6rem] sm:text-5xl lg:text-[3.2rem]"   /></Badge></div> 

  {/* Floating Cart Icon */}


  {/* Cart Content */}

  <div className=" flex w-full   text-center bg-gray-600 text-white py-2 text-xl justify-between px-2 items-center"><IoCloseOutline className="text-2xl cursor-pointer" onClick={()=>{ setshowcart(false)}}/><p>Cart</p>
  <Link to='/cart' onClick={()=>{
    setshowcart(false)
  }}>  <MdOpenInFull/></Link>
  
</div>
<div className=" flex w-full justify-between px-4 bg-slate-400 py-2 text-white"><Checkbox 
    
    size="sm" 
    type="checkbox" 
    id="checked"  
    className=" md:scale-125"  
    isSelected={cartedProduct.every(carted=>carted.Ischecked == true)}  
    onChange={(e) => handleAllCheckboxChange(e)
  
  
      
    }
  /><div>Select ALL</div></div>
<div className={`flex flex-col-reverse justify-start gap-2 py-2     pt-0 ${cartedProduct.length > 2 && 'h-[85%] overflow-y-scroll'}`}>
 
 
 {
  cartedProduct.length > 0 ?
  cartedProduct.map((product,key)=>(
      <Cartcard setshowcart={setshowcart} product={product}   key={key} position={key} cartedProduct={cartedProduct} setcartedproduct={setcartedproduct} setselectedcarts={setselectedcarts} />
  
  )):<div className="h-96 flex flex-col gap-2 justify-center items-center text-center" onClick={()=>{
  setshowcart(false)
  }}>

  <p>Your cart it empty</p>
  <Link to='/shop' className=" bg-red-500 text-white p-3 rounded-lg">Start Shopping Now</Link>
  </div>
 }
</div>
  
  <div className="grid  text-center absolute bottom-0 w-full text-lg ">

  <div  className=" border-t-1 border-gray-400 py-1 bg-white">Total {totalSubtotal}</div>
  <Link to={SelectedCarts.length > 0 ? (Object.keys(storedUser).length === 0 ? '/account' : '/checkout') : ''}
  
  onClick={()=>{
    showcart(false)
  }}
  className={`bg-green-600 w-full p-2   flex gap-2 justify-center text-white items-center  text-nowrap  text-lg ${SelectedCarts.length>0 ?'cursor-pointer':'cursor-not-allowed'}`}>
  
    
  <BsFillCartCheckFill className=" text-xl  mb-1"/>Checkout
    </Link>

</div>
</div>

      }

        
        </>
    );
}