/* eslint-disable react/prop-types */

import { PiShoppingCartSimple } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function ProductCard({className,product,showSave,type,setproduct}){
    return (

      <Link
      key={product.id}
      to={`/details/${product.id}`}
      className={type==='collection'?`Productcard pt-0.5 sm:pb-1 grid  lg:w-auto gap-0.5 saleproduct bg-white border-1 rounded-lg overflow-hidden text-center ${className}  `:` ${className} ` }
    
    >
      <div    onClick={()=>{
       console.log(`/details/${product.id}`)
      }}>
        <div className="cover p-1.5 sm:2 md:p-2.5 lg:p-3">
          <img
            src={product.coverImage}
            alt={product.name}
            className="w-full rounded-lg overflow-hidden"
          />
        </div>
        <div className="title font-semibold sm:font-bold  ">
          <h3>{product.name}</h3>
        </div>
        {/* Conditional Save Section */}
        {showSave && (
        <div className="  Save flex justify-center   py-0.5
        ">
          <div className="bg-gray-700 text-white w-20 sm:w-24  rounded overflow-hidden   font-sans text-xs  sm:text-sm md:text-medium">Save Tk.{product.save}</div>
        </div>
        )}
        <div className="amount flex justify-center gap-2">
          <div className="mainprice text-red-500 pt-0.5">
            <s>৳{product.mainPrice}</s>
          </div>
          <div className="discountprice text-lg text-green-400">
            ৳{product.discountPrice}
          </div>
        </div>
        <div className='buy pb-2 flex justify-center'>
          <p className="bg-black py-1 cursor-pointer flex gap-2 justify-center text-white w-32 rounded-lg">
            <PiShoppingCartSimple className="mt-0.5" size={20} />
            Buy Now
          </p>
        </div>
      </div>
    </Link>
    );
}