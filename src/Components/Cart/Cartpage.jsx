import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoTrash } from "react-icons/io5";
export default function Cartpage(){
    const product = {
        id: 1,
        coverImage: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
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

       const handleSizeChange = (event) => {
         setSelectedSize(event.target.value); // Update the selected size
       };
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
  <div
    key={product.id}
    className="flex flex-wrap md:flex-nowrap gap-4 md:gap-0 justify-between items-center px-1 md:px-4 lg:mx-14 py-2 border-b bg-white"
  >
    {/* Product Column */}
    <div className="w-full md:w-[20%] flex md:flex-nowrap items-center gap-2 lg:gap-4">
      <div className="cover">
        <img
          src={product.coverImage}
          alt={product.title}
          className="w-32 md:w-32 object-cover"
        />
      </div>
      <div className="title font-semibold md:font-bold break-words w-full">
        <h3>{product.name}</h3>
      </div>
    </div>

    {/* Unit Price Column */}
    <div className="w-full md:w-[15%] flex md:flex-col md:items-center justify-between">
      <div className="mainprice text-red-500">
        <s>৳{product.mainPrice}</s>
      </div>
      <div className="discountprice text-lg text-green-400">৳{product.discountPrice}</div>
    </div>

    {/* Size Column */}
    <div className="w-full md:w-[15%] flex justify-between md:justify-center">
      <select
        id="size-selector"
        value={selectedSize}
        onChange={handleSizeChange}
        className="border border-gray-300 rounded-md p-1 md:p-2 lg:px-4 w-full md:w-auto"
      >
        {product.sizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>

    {/* Quantity Column */}
    <div className="w-full md:w-[15%] flex justify-between md:justify-center">
      <div className="flex gap-2 md:gap-0 md:w-28 justify-around items-center">
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
    <div className="w-full md:w-[15%] flex justify-between md:justify-center">
      <div className="mainprice text-red-500">
        <s>৳{product.mainPrice}</s>
      </div>
    </div>

    {/* Action Column */}
    <div className="w-full md:w-[20%] flex md:flex-col md:items-end gap-2 justify-between">
      <p className="bg-sky-500 px-2 py-1 cursor-pointer flex gap-2 justify-center text-white text-xs lg:text-sm items-center w-full md:w-auto text-nowrap">
        <FaPlus />
        Add another Size
      </p>
      <p className="bg-red-600 cursor-pointer flex justify-center text-white w-full md:w-fit overflow-hidden">
        <IoTrash className="mt-0.5" size={20} />
      </p>
    </div>
  </div>
</div>



                          
        </>
    );
}