import { PiShoppingCartSimple } from "react-icons/pi";
import Cartpage from "./Cartpage";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoTrash } from "react-icons/io5";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { MdOpenInFull } from "react-icons/md";
import { Link } from "react-router-dom";
export default function Sidecart(){
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
           const [selectedkey,setSelectedkey] = useState(null)
           const [quantity,setquantity] = useState(1);
           const [selectedSize, setSelectedSize] = useState("");
    const [showcart,setshowcart] = useState(false)
           const handleSizeChange = (event) => {
             setSelectedSize(event.target.value); // Update the selected size
           };
           
    return (
        <>
      
        <div className={` fixed  hidden right-0 top-[0rem] z-50 w-80 lg:w-[500px] h-[100%]   bg-white shadow-lg rounded-lg transition-all duration-300 ${showcart ?'translate-x-0':'translate-x-[100%]'}`}>
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
<div className="flex flex-col justify-start gap-2 py-2 h-[100%] overflow-scroll">
<div
    key={product.id}
    className="flex flex-wrap  w-full gap-1 justify-between items-center    px-4  border-b bg-white"
  >
    {/* Product Column */}
    <div className="w-full flex  items-center gap-2 lg:gap-4">
      <div className="cover">
        <img
          src={product.coverImage}
          alt={product.title}
          className="w-32  object-cover"
        />
      </div>
      <div className="title font-semibold  break-words w-full">
        <h3>{product.name}</h3>
      </div>
    </div>

    {/* Unit Price Column */}
    <div className="w-full flex   justify-end gap-2">
      <div className="mainprice text-red-500">
        <s>৳{product.mainPrice}</s>
      </div>
      <div className="discountprice text-lg text-green-400">৳{product.discountPrice}</div>
    </div>

    {/* Size Column */}
    <div className="w-full  flex justify-between ">
      <select
        id="size-selector"
        value={selectedSize}
        onChange={handleSizeChange}
        className="border border-gray-300 rounded-md p-1  lg:px-3 w-full md:w-auto"
      >
        {product.sizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>

    {/* Quantity Column */}
    <div className="w-full my-2 flex justify-between">
      <div className="flex gap-2 justify-around items-center">
        <FaMinus
          className="border border-black cursor-pointer w-6 h-6 p-1"
          onClick={() => {
            quantity > 1 && setquantity((prev) => prev - 1);
          }}
        />
        <p>{quantity}</p>
        <FaPlus
          className="p-1 w-6 h-6 cursor-pointer border border-black"
          onClick={() => {
            setquantity((prev) => prev + 1);
          }}
        />
      </div>
    </div>

    {/* Subtotal Column */}
    <div className="w-full  flex justify-end ">
    <div className="discountprice text-lg ">৳{product.discountPrice}</div>
    </div>

    {/* Action Column */}
    <div className="w-full  flex  gap-2 justify-between">
      <p className="bg-sky-500 px-2 py-1 cursor-pointer flex gap-2 justify-center text-white text-xs lg:text-sm items-center w-full  text-nowrap">
        <FaPlus />
        Add another Size
      </p>
      <p className="bg-red-600 cursor-pointer flex justify-center text-white w-full  overflow-hidden items-center">
        <IoTrash className="mt-0.5" size={20} />
      </p>
    </div>
  </div><div
    key={product.id}
    className="flex flex-wrap  w-full gap-1 justify-between items-center    px-4  border-b bg-white"
  >
    {/* Product Column */}
    <div className="w-full flex  items-center gap-2 lg:gap-4">
      <div className="cover">
        <img
          src={product.coverImage}
          alt={product.title}
          className="w-32  object-cover"
        />
      </div>
      <div className="title font-semibold  break-words w-full">
        <h3>{product.name}</h3>
      </div>
    </div>

    {/* Unit Price Column */}
    <div className="w-full flex   justify-end gap-2">
      <div className="mainprice text-red-500">
        <s>৳{product.mainPrice}</s>
      </div>
      <div className="discountprice text-lg text-green-400">৳{product.discountPrice}</div>
    </div>

    {/* Size Column */}
    <div className="w-full  flex justify-between ">
      <select
        id="size-selector"
        value={selectedSize}
        onChange={handleSizeChange}
        className="border border-gray-300 rounded-md p-1  lg:px-3 w-full md:w-auto"
      >
        {product.sizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>

    {/* Quantity Column */}
    <div className="w-full my-2 flex justify-between">
      <div className="flex gap-2 justify-around items-center">
        <FaMinus
          className="border border-black cursor-pointer w-6 h-6 p-1"
          onClick={() => {
            quantity > 1 && setquantity((prev) => prev - 1);
          }}
        />
        <p>{quantity}</p>
        <FaPlus
          className="p-1 w-6 h-6 cursor-pointer border border-black"
          onClick={() => {
            setquantity((prev) => prev + 1);
          }}
        />
      </div>
    </div>

    {/* Subtotal Column */}
    <div className="w-full  flex justify-end ">
    <div className="discountprice text-lg ">৳{product.discountPrice}</div>
    </div>

    {/* Action Column */}
    <div className="w-full  flex  gap-2 justify-between">
      <p className="bg-sky-500 px-2 py-1 cursor-pointer flex gap-2 justify-center text-white text-xs lg:text-sm items-center w-full  text-nowrap">
        <FaPlus />
        Add another Size
      </p>
      <p className="bg-red-600 cursor-pointer flex justify-center text-white w-full  overflow-hidden items-center">
        <IoTrash className="mt-0.5" size={20} />
      </p>
    </div>
  </div>
</div>
  
  <div className="grid  text-center absolute bottom-0 w-full text-lg ">
  <div  className=" border-t-1 border-gray-400 py-1 bg-white">Total 2500tk</div>
  <div className=" bg-green-600 text-white flex justify-center gap-2 items-center py-2 "><BsFillCartCheckFill className=""/>Checkout</div>
</div>
</div>


        
        </>
    );
}