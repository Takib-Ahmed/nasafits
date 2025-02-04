/* eslint-disable react/prop-types */
import { Checkbox } from "@heroui/react";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Cartcard({product,type,position,cartedProduct,setcartedproduct,setselectedcarts,setshowcart}){

       useEffect(() => {
        setcartedproduct((prev) =>
          prev.map((carted) =>
            carted.id === product.id && carted.selectedsize === product.selectedsize
              ? { ...carted, subtotal:carted.quantity*carted.discountPrice , }:{
                ...carted,subtotal:carted.quantity*carted.discountPrice
              }
              
          ))
          
         
        }, [product.quantity,product.id,product.selectedsize,setcartedproduct])
        const handleCheckboxChange = (e) => {
          setcartedproduct((prev) =>
            prev.map((carted) =>
              carted.id === product.id && carted.selectedsize === product.selectedsize
                ? { ...carted, Ischecked: e.target.checked }
                : carted
            )
          );
      
         
        };
        useEffect(() => {
          const checkedProducts = cartedProduct.filter(
            (carted) => carted.Ischecked === true
          );
          setselectedcarts && setselectedcarts(checkedProducts);
        }, [cartedProduct, setselectedcarts]);
  




    return (
    
      <label
   
      className={`   cursor-pointer flex flex-wrap justify-between items-center px-1 border-b bg-white ${type === 'maincart' ? 'md:flex-nowrap gap-1 md:gap-0 md:px-4 lg:mx-14 py-2' : 'w-full gap-1 px-4 py-3'}` }
      onClick={(e)=>{
        e.stopPropagation()
      }} >
      {/* Product Column */}

      <div className={`flex items-center gap-2 lg:gap-2.5 flex-row-reverse md:flex-row ${type === 'maincart' ? '  w-[100%]  overflow-hidden md:overflow-visible  md:w-[20%] md:flex-nowrap' : ''}`}>

      <Checkbox 
    
  size="sm" 
  type="checkbox" 
  id="checked"  
  className=" md:scale-125"  
  isSelected={product.Ischecked ? true : false}  // ✅ Controlled component
  onChange={(e) => handleCheckboxChange(e)


    
  }
/>

        
    

  <div className={`flex items-center gap-2 lg:gap-4 ${type === 'maincart' ? 'w-full  md:flex-nowrap' : ''}`}> 
  <Link to={`/details/${product.id}`} className="cover " onClick={(e)=>{
    e.stopPropagation()
  }}>
         
         <img
           src={product.coverImage}
           alt={product.title}
           className="w-32 object-cover"
         />
       </Link>
       <Link to={`/details/${product.id}`} className="title font-semibold break-words w-full hover:text-blue-500 cursor-pointer" onClick={(e)=>{
    e.stopPropagation()
  }}>
         <h3>{product.name}</h3>
       </Link>

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
      <div className={`flex justify-between  ${type === 'maincart' ? 'w-full md:w-[15%] md:justify-center my-2' : 'w-full'}`}>
        <select
          id="size-selector"
         onChange={(e)=>{
          const newsize = e.target.value
          const dublicate = cartedProduct.some(carted=> carted.name == product.name && carted.selectedsize === newsize)
          if(dublicate){
            alert('Same size already exists')
          }
       else{
        setcartedproduct((prev) =>
          prev.map((carted) =>
            carted.id === product.id && carted.selectedsize === product.selectedsize
              ? { ...carted, selectedsize: newsize}:carted
              
          ))
       }
         }}
      
          className="border border-gray-300 rounded-md p-1 lg:px-3 w-full md:w-auto select-none"
       
       value={product.selectedsize}>
          { product.sizes && product.sizes.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    
      {/* Quantity Column */}
      <div className={`flex justify-between ${type === 'maincart' ? 'w-full md:w-[15%] md:justify-center' : 'w-full my-2 mb-0'}`}
      
      
      onClick={(e)=>{
        e.stopPropagation()
    }}>
        <div className="flex gap-2 items-center md:w-28"  >
          <FaMinus
            className="border border-black cursor-pointer w-6 h-6 p-1 hover:bg-black hover:text-white transition-all duration-300"
            onClick={(e) => {
    e.stopPropagation()
    e.preventDefault();
              setcartedproduct((prev) =>
                prev.map((carted) =>
                  carted.id === product.id && carted.selectedsize === product.selectedsize
                    ? { ...carted, quantity: carted.quantity>1 ? carted.quantity- 1 :carted.quantity , }:carted
                    
                ))
            }}
          />
          <p className="  select-none"
          onClick={(e)=>{
            e.stopPropagation()
            e.preventDefault()
        }}>{product.quantity}</p>
          <FaPlus
            className="border border-black cursor-pointer w-6 h-6 p-1 hover:bg-black hover:text-white transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation() 
              e.preventDefault()
              setcartedproduct((prev) =>
                prev.map((carted) =>
                  carted.id === product.id && carted.selectedsize === product.selectedsize
                    ? { ...carted, quantity: carted.quantity + 1  }:carted
                    
                ))
            }}
          />
        </div>
      </div>
    
      {/* Subtotal Column */}
      <div className={`flex justify-end ${type === 'maincart' ? 'w-full md:w-[15%] md:justify-center' : 'w-full'}`}>
        <div className="discountprice text-lg">৳{product.subtotal}</div>
      </div>
    
      {/* Action Column */}
      <div className={`flex gap-2 justify-between ${type === 'maincart' ? 'w-full md:w-[20%] md:flex-col md:items-end' : 'w-full'}`}>
   <Link  onClick={()=>{
    setshowcart(false)
   }} to={`/details/${product.id}`} className={`bg-sky-500 px-2 py-1 cursor-pointer flex gap-2 justify-center text-white text-xs lg:text-sm items-center w-full  text-nowrap ${type=='maincart' && 'md:w-auto'}`}>

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
    </label>
    
    );
}