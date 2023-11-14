import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethodsAdmin";
import { format } from "timeago.js";
import axios from 'axios';

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/orders/latest");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  
  const Button = ({ type }) => {
    return (
      <button
        className={`px-4 py-2 rounded-md ${
          type === "delivered"
            ? "bg-green-500 text-white"
            : type === "Pending"
            ? "bg-yellow-500 text-white"
            : "bg-red-500 text-white"
        }`}
      >
        {type}
      </button>
    );
  };

  return (
    <div style={{width: "48%", background: "black", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="shadow-lg rounded-md p-4">
      <h3 className="text-lg font-medium mb-4 text-white">Latest transactions</h3>
      <table className="w-full text-left text-white">
        <thead>
          <tr className="border-b">
            <th className="pb-2 font-medium">Customer</th>
            <th className="pb-2 font-medium">Date</th>
            <th className="pb-2 font-medium">Amount</th>
            <th className="pb-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="py-2">{order.username}</td>
              <td className="py-2">{format(order.createdAt)}</td>
              <td className="py-2">${order.amount}</td>
              <td className="py-2">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
