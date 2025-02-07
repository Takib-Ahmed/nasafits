import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Orders = ({ Orderhistory ,show,orderData,Goto,setorderid}) => {


  const Filterhistory = show ? Orderhistory.filter((order)=>order.status === show):Orderhistory
  const navigate = useNavigate()
  return (
    <div className="bg-white p-4 rounded-lg Orderhistory ">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

      {/* Desktop View - Grid Layout */}
      <div className=" md:block   ">
        <div className="grid grid-cols-6 bg-gray-100 text-gray-700 font-semibold p-3 rounded-t-lg">
          <div className="">Order #</div>
          <div className="">Placed On</div>
          <div className="">Items</div>
          <div className="">Total</div>
          <div className="">Status</div>
          <div className="">Action</div>
        </div>

  <div className=" flex flex-col-reverse  ">
  { Filterhistory.length !=0? 
   Filterhistory.map((order,key) => (
     
     order.Products.map((Product)=>(
       <div
       key={key}
       className="grid grid-cols-6 items-center border-b p-3 hover:bg-gray-50 transition Orderhistory "
     >
       <div className="">{order.Id}</div>
       <div className=" flex flex-col-reverse"><font>{order.Date}</font>
         <font>{order.Time}</font>
       </div>
       <div>
         <img src={Product.coverImage}  alt="item" className=" w-10 h-12  lg:w-12 lg:h-14 rounded-md shadow-sm" />
       </div>
       <div className="text-green-600 font-semibold">৳{Product.discountPrice*Product.quantity}</div>
       <div className="">
         <button className={` font-medium  ${order.status === 'canceled' ? 'text-red-500':'text-green-500'} `}>{order.status}</button>
       </div>
       <div className="">
         <button className="text-blue-500 hover:text-blue-600 font-medium  " onClick={()=>{
      navigate(`/profile/${Goto}-${order.Id}`)
      setorderid(order.Id)
         }}>MANAGE</button>
       </div>
     </div>
     ))

       )): <div className="h-20 flex justify-center items-center text-xl text-blue-500">
        <p>
{`You haven't ${show?show:'ordered'} any product`}

        </p>
        </div>}
  </div>
      </div>

      {/* Mobile View - Card Layout */}
    
    </div>
  );
};

export default Orders;
