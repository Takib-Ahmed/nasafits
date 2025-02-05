const Orders = ({ Orderhistory }) => {
  return (
    <div className="bg-white p-4 rounded-lg  ">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

      {/* Desktop View - Grid Layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-5 bg-gray-100 text-gray-700 font-semibold p-3 rounded-t-lg">
          <div>Order #</div>
          <div>Placed On</div>
          <div>Items</div>
          <div>Total</div>
          <div>Action</div>
        </div>

        {Orderhistory.map((order) => (
          <div
            key={order.Id}
            className="grid grid-cols-5 items-center border-b p-3 hover:bg-gray-50 transition"
          >
            <div>{order.Id}</div>
            <div className=" flex flex-col-reverse"><font>{order.Date}</font>
              <font>{order.Time}</font>
            </div>
            <div>
              <img  alt="item" className="w-12 h-12 mx-auto rounded-md shadow-sm" />
            </div>
            <div className="text-green-600 font-semibold">৳ {order.totalAmount}</div>
            <div className="">
              <button className="text-blue-500 hover:text-blue-600 font-medium  ">MANAGE</button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View - Card Layout */}
    
    </div>
  );
};

export default Orders;
