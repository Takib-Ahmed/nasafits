/* eslint-disable react/prop-types */
import { PiShoppingCartSimple } from "react-icons/pi";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import Mobilesearch from "../Mobilesearchbar";

export default function All({setproduct,productDetails,page,className,slice}){
  let Showproducts = productDetails.slice(0,slice)

    return (
        <>
            <div className={`collections text-center  p-0 sm:p-2 md:p-3 lg:p-5  py-5 md:pt-0  ${className}  `}>
     {
      page =='Shop' ?  <Mobilesearch className=' w-fit lg:w-full  gap-2  ' inputclass=' w-[86vw] sm:w-[88vw]  lg:w-[91vw]    p-2 shopsearchbar  '/>:
      <div className=" relative w-full  title text-2xl md:text-3xl lg:text-4xl font-semibold py-2 text-center border-gray border-b-2 flex items-center flex-col justify-center ">
      <h1 className="  ">{`All Collections`}</h1>
      <p className=" hovered absolute bottom-0.5 translate-y-1  border-black border-b-2 w-72 mx-20  transition-all duration-300" ></p>
    </div>
     }
        <div  className=" Cardcontainer    grid grid-cols-2 md:flex flex-wrap w-full justify-center gap-1.5 sm:gap-2 md:gap-4  py-10 pt-5">
          {Showproducts.map((product) => (

<ProductCard key={product.id}
  product={product}
  showSave={false} 

className={`All  pb-1 grid shadow-lg sm:w-60 md:w-auto lg:w-[22rem]  gap-1 saleproduct bg-white     border-1  rounded-lg  overflow-hidden`}
    type='ALL' 
/>

            
          ))}
        </div>
      </div>
        </>
    );
}