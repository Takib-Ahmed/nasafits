const Orders = ({ orders }) => {
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

        {orders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-5 items-center border-b p-3 hover:bg-gray-50 transition"
          >
            <div>{order.id}</div>
            <div>{order.date}</div>
            <div>
              <img src={order.image} alt="item" className="w-12 h-12 mx-auto rounded-md shadow-sm" />
            </div>
            <div className="text-green-600 font-semibold">৳ {order.total}</div>
            <div className="">
              <button className="text-blue-500 hover:text-blue-600 font-medium  ">MANAGE</button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View - Card Layout */}
      <div className="md:hidden space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-lg p-3 sm:p-3.5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-semibold  text-sm sm:text-medium text-gray-700">Order #{order.id}</span>
              <span className=" text-gray-500 text-xs sm:text-sm">{order.date}</span>
            </div>
            <div className="flex items-center gap-4 mt-3">
              <img src={order.image} alt="item" className="w-12 h-12 rounded-md shadow-sm" />
              <div className=" flex justify-between w-full h-full items-end   translate-y-2">
                <p className="text-green-600 font-semibold text-sm sm:text-medium">৳ {order.total}</p>
                <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm ">MANAGE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
