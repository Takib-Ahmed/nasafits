/* eslint-disable react/prop-types */
import { Button } from '@nextui-org/react';
import { FaShoppingBag } from 'react-icons/fa';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { IoTrash } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { TbCoinTakaFilled } from "react-icons/tb";
const OrderSummary = ({ orderData ,setOrderhistory}) => {
  const navigate = useNavigate()

  const handledelete = ()=>{
    setOrderhistory((prev)=>prev.filter((order)=>
      order.Id !=orderData.Id
    ))
    navigate(-1)
  }
  const handlePay = ()=>{
    navigate(`/payment/${orderData.Id}`)
  }
  return (
    <div className=" bg-white p-5 rounded-lg  border  lg:w-auto">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-3">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <FaShoppingBag className="text-blue-600" />Nasa FIts
        </h2>
        <button className="text-blue-500 flex items-center gap-1 text-sm">
          <IoChatbubbleEllipsesOutline /> Chat with Seller
        </button>
      </div>

      {/* Product Details */}
      {orderData.Products.map((product, index) => (
        <div key={index} className="flex gap-4 pb-3 border-b">
          <img
            src={product.coverImage}
            alt="Product"
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-sm">
              {product.name}
            </h3>
            <p className="text-gray-500 text-xs">Qty: {product.quantity}</p>
            <p className="text-gray-500 text-xs">Size: {product.selectedsize}</p>
            
            <p className="text-red-500 text-xs font-semibold">{orderData.status}</p>
          </div>
          <div className="font-semibold grid"><p className=' w-full text-end'>৳{product.discountPrice}</p>
<div className="flex gap-2">        {orderData.status === 'pending' &&   <button  className='  flex justify-end items-center bg-green-500 text-white  text-sm h-fit p-1 mt-2 gap-1' onClick={handlePay} ><TbCoinTakaFilled size={16} className=' '/><font>Pay Now</font></button>}
<button  className='  flex justify-end items-center bg-red-500 text-white w-fit text-sm h-fit p-1 mt-2 gap-1 ' onClick={handledelete}><IoTrash size={14} className=' '/><font>Delete</font></button></div>
          
          </div>
        </div>
      ))}

      {/* Order Info */}
      <div className="py-3 border-b">
        <p className="text-sm text-gray-600">Order ID: <span className="font-medium">{orderData.Id}</span></p>
        <p className="text-sm text-gray-600">Placed on: {orderData.Date} | {orderData.Time}</p>
      </div>

      {/* Address */}
      <div className="py-3 border-b">
        <h4 className="text-sm font-semibold">Shipping Address:</h4>
        <p className="text-sm text-gray-600">
          {orderData.fullName}, {orderData.detailedAddress}, {orderData.city}, Bangladesh
        </p>
        <p className="text-sm text-gray-600">Phone: {orderData.phoneNumber}</p>
        {orderData.altPhone && <p className="text-sm text-gray-600">Alt Phone: {orderData.altPhone}</p>}
      </div>

      {/* Total Summary */}
      <div className="py-3">
        <h4 className="text-sm font-semibold">Total Summary</h4>
        <div className="flex justify-between text-sm text-gray-700">
          <p>Subtotal ({orderData.Products.length} Item{orderData.Products.length > 1 ? 's' : ''})</p>
          <p>৳{orderData.totalAmount}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-700">
          <p>Shipping Fee</p>
          <p>৳{orderData.shippingCost}</p>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between text-lg font-semibold">
          <p>Total</p>
          <p>৳{orderData.payableAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
