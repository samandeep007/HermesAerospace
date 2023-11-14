import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import axios from "axios";

const Orders = () => {
  const username = useSelector((state) => state.user.username);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/orders/find/${username}`);
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, [username]);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4 text-white" >Your Orders</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
  {orders.map((order) => (
    <div key={order._id} style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="bg-white border border-gray-300 shadow-sm rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">{order.orderNo}</h3>
        <p className={`text-gray-600 font-medium ${order.status === 'Delivered' ? 'text-green-600' : 'text-red-600'} ${order.status === 'Shipped' ? 'text-yellow-600' : 'text-red-600'}`}>
          {order.status}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-700 font-medium">{order.products.length} Products</p>
        <p className="text-gray-700 font-bold">${order.amount}</p>
      </div>
      <Link to={`/order/${username}/${order.orderNo}`}>
      <button style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 mt-4 w-full">
        View Order
      </button>
      </Link>
    </div>
  ))}
</div>
</div>
  );
};

export default Orders;
