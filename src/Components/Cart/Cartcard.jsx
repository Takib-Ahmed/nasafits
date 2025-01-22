/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Cartcard({product,type,position,cartedProduct,setcartedproduct}){
    const [selectedkey,setSelectedkey] = useState(null)
    const [quantity,setquantity] = useState(product.quantity ? product.quantity:1);
    const [selectedSize, setSelectedSize] = useState("");
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value); // Update the selected size
      };
    return (
    
      <div
   
      className={`flex flex-wrap justify-between items-center px-1 border-b bg-white ${type === 'maincart' ? 'md:flex-nowrap gap-1 md:gap-0 md:px-4 lg:mx-14 py-2' : 'w-full gap-1 px-4 py-3'}`}
    >
      {/* Product Column */}
      <div className={`flex items-center gap-2 lg:gap-4 ${type === 'maincart' ? 'w-full md:w-[20%] md:flex-nowrap' : ''}`}>
        <div className="cover">
          <img
            src={product.coverImage}
            alt={product.title}
            className="w-32 object-cover"
          />
        </div>
        <div className="title font-semibold break-words w-full">
          <h3>{product.name}</h3>
        </div>
      </div>
    
      {/* Unit Price Column */}
      <div className={`flex justify-end gap-2 ${type === 'maincart' ? 'w-full md:w-[15%] md:flex-col md:items-center' : 'w-full'}`}>
        <div className="mainprice text-red-500">
          <s>৳{product.mainPrice}</s>
        </div>
        <div className="discountprice text-lg text-green-400">৳{product.discountPrice}</div>
      </div>
    
      {/* Size Column */}
      <div className={`flex justify-between ${type === 'maincart' ? 'w-full md:w-[15%] md:justify-center my-2' : 'w-full'}`}>
        <select
          id="size-selector"
         
          onChange={handleSizeChange}
          className="border border-gray-300 rounded-md p-1 lg:px-3 w-full md:w-auto"
       
       value={product.selectedsize}>
          {product.sizes.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    
      {/* Quantity Column */}
      <div className={`flex justify-between ${type === 'maincart' ? 'w-full md:w-[15%] md:justify-center' : 'w-full my-2 mb-0'}`}>
        <div className="flex gap-2 items-center md:w-28">
          <FaMinus
            className="border border-black cursor-pointer w-6 h-6 p-1"
            onClick={() => {
              quantity > 1 && setquantity((prev) => prev - 1)
            
            }}
          />
          <p>{product.quantity}</p>
          <FaPlus
            className="border border-black cursor-pointer w-6 h-6 p-1"
            onClick={() => {
              setquantity((prev) => prev + 1);
             console.log(product)
            }}
          />
        </div>
      </div>
    
      {/* Subtotal Column */}
      <div className={`flex justify-end ${type === 'maincart' ? 'w-full md:w-[15%] md:justify-center' : 'w-full'}`}>
        <div className="discountprice text-lg">৳{product.discountPrice}</div>
      </div>
    
      {/* Action Column */}
      <div className={`flex gap-2 justify-between ${type === 'maincart' ? 'w-full md:w-[20%] md:flex-col md:items-end' : 'w-full'}`}>
   <Link to={`/details/${product.id}`} className={`bg-sky-500 px-2 py-1 cursor-pointer flex gap-2 justify-center text-white text-xs lg:text-sm items-center w-full  text-nowrap ${type=='maincart' && 'md:w-auto'}`}>

          <FaPlus />
          Add another Size
     </Link>
        <p className={`bg-red-600 cursor-pointer flex justify-center text-white w-full  overflow-hidden items-center ${type=='maincart' && 'md:w-fit'}`} 
        onClick={()=>{
          const updatedCart = cartedProduct.filter(
            (_, index) => index !== position
          );
          setcartedproduct(updatedCart)

        }}>
          <IoTrash className="mt-0.5" size={20} />
        </p>
      </div>
    </div>
    
    );
}