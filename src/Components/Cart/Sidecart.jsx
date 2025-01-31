/* eslint-disable react/prop-types */
import { PiShoppingCartSimple } from "react-icons/pi";
import Cartpage from "./Cartpage";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoTrash } from "react-icons/io5";
import { BsBagCheckFill, BsFillCartCheckFill } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { MdOpenInFull } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Cartcard from "./Cartcard";
import { useLocalStorage } from "../hooks/useLocalStorage";
export default function Sidecart({cartedProduct,setcartedproduct,SelectedCarts}){
  const totalSubtotal = SelectedCarts.reduce((total, selectedcarts) => total + selectedcarts.subtotal, 0);

    const [showcart,setshowcart] = useState(false)
    const location = useLocation();
    const {setItem} = useLocalStorage('cartedProduct')

    return (
        <>
      {
        !location.pathname.includes('/cart') && 
        
        <div className={` fixed  right-0 top-[0rem] z-50 w-80 lg:w-[500px] h-[100%]   bg-white shadow-lg rounded-lg transition-all duration-300 ${showcart ?'translate-x-0':'translate-x-[100%]'}`}>
        <PiShoppingCartSimple className=" absolute  right-80 lg:right-[32rem] top-[30rem] z-50 text-4xl text-slate-700 bg-cyan-200 p-2 rounded-full cursor-pointer"  onClick={()=>{
          setshowcart((prev)=>!prev)
          }}/>

  {/* Floating Cart Icon */}


  {/* Cart Content */}
  <div className=" flex w-full   text-center bg-gray-600 text-white py-2 text-xl justify-between px-2 items-center"><IoCloseOutline className="text-2xl cursor-pointer" onClick={()=>{ setshowcart(false)}}/><p>Cart</p>
  <Link to='/cart' onClick={()=>{
    setshowcart(false)
  }}>  <MdOpenInFull/></Link>
  
</div>
<div className="flex flex-col-reverse justify-start gap-2 py-2    overflow-y-scroll pt-0">
 
 
 {
  cartedProduct.length > 0 ?
  cartedProduct.map((product,key)=>(
      <Cartcard product={product}   key={key} position={key} cartedProduct={cartedProduct} setcartedproduct={setcartedproduct} />
  
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
  <Link to={SelectedCarts.length > 0 && '/account'} className={`bg-green-600 w-full p-2   flex gap-2 justify-center text-white items-center  text-nowrap  text-lg ${SelectedCarts.length>0 ?'cursor-pointer':'cursor-not-allowed'}`}>
  
    
  <BsFillCartCheckFill className=" text-xl  mb-1"/>Checkout
    </Link>

</div>
</div>

      }

        
        </>
    );
}