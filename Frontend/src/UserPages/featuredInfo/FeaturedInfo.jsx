import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from 'axios'
import { FaDollarSign, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function FeaturedInfo() {
  const username = useSelector((state) => state.user.username);
  const [userOrders, setUserOrders] = useState([]);
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);

  useEffect(() => {
    // GET user orders
    axios.get(`http://localhost:5000/api/orders/find/${username}`)
      .then(res => {
        setUserOrders(res.data);
        setDeliveredOrders(res.data.filter(order => order.status === 'Delivered'));
        setPendingOrders(res.data.filter(order => order.status !== 'Delivered'));
      })
      .catch(err => console.log(err));
  }, [username]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="p-6 bg-blue-500 rounded-lg shadow-md text-white">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium uppercase">Total Orders</span>
          <FaShoppingCart className="w-6 h-6" />
        </div>
        <div className="flex items-center mt-2">
          <span className="text-3xl font-semibold">{userOrders.length}</span>
        </div>
        <span className="text-sm mt-2">All orders made by the user</span>
      </div>
      <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="p-6 bg-green-500 rounded-lg shadow-md text-white">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium uppercase">Delivered Orders</span>
          <FaMoneyBillWave className="w-6 h-6" />
        </div>
        <div  className="flex items-center mt-2">
          <span className="text-3xl font-semibold">{deliveredOrders.length}</span>
        </div>
        <span className="text-sm mt-2">Orders that have been delivered</span>
      </div>
      <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10,37, 64, 0.35) 0px -2px 6px 0px inset"}} className="p-6 bg-purple-500 rounded-lg shadow-md text-white">
<div className="flex items-center justify-between">
<span className="text-sm font-medium uppercase">Pending Orders</span>
<FaDollarSign className="w-6 h-6" />
</div>
<div className="flex items-center mt-2">
<span className="text-3xl font-semibold">{pendingOrders.length}</span>
</div>
<span className="text-sm mt-2">Total pending orders to be delivered</span>
</div>
</div>
);
}