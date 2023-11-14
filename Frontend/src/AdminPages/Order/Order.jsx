import React, { useState, useEffect } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom'
import DebitCard from "../../AdminComponents/Card/DebitCard";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaClipboardList, FaDollarSign, FaExclamationCircle, FaMoneyCheck } from "react-icons/fa";

function OrderDetails(props) {

  const location = useLocation();
  const orderNo = location.pathname.split("/")[3];
  const username = location.pathname.split("/")[2];
  let orderData = [];

  const [order, setOrder] = useState([]);
const [user, setUser] = useState([]);

  const [trackingNo, setTrackingNo] = useState("");
  const [status, setStatus] = useState("");


  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/orders/order/` + orderNo, {
          key: 'orderNo'
        });
        console.log(response.data[0])
        setOrder(response.data[0])
        setTrackingNo(response.data[0].trackingNo)
        setStatus(response.data[0].status)
        orderData = response.data[0]
      
      } catch (error) {
        console.error(error);
      }
    };
    getContacts();
  
  }, []);

  useEffect(() => { 
  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users/user/` + username, {
        key: '_id'
      });
      console.log(response.data)
      setUser(response.data[0])
      
    
    } catch (error) {
      console.error(error);
    }
  };
  getUser();
}, []);



  const handleTrackingNoChange = (e) => {
    setTrackingNo(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/api/orders/${order._id}`, {
        trackingNo,
        status,
      });
      setOrder(res.data);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="container mx-4 mt-2 px-4 py-4 bg-white rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-8">Order Details</h1>
    <div>
      <div className="space-y-6">


      <div className="bg-white w-full ">

      <div className="grid grid-cols-4 gap-4">
 

<div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="flex items-center justify-between bg-purple-500 py-3 px-4">
  <span className="text-sm font-medium uppercase text-white">Order Number</span>
  <FaClipboardList className="w-6 h-6 text-white" />
  </div>
  <div className="flex flex-col p-4">
  <span className="text-lg font-semibold text-gray-800 tracking-wider">{order.orderNo}</span>
  
  </div>
</div>


<div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="flex items-center justify-between bg-green-500 py-3 px-4">
    <span className="text-sm font-medium uppercase text-white">Amount Paid</span>
    <FaDollarSign className="w-6 h-6 text-white" />
  </div>
  <div className="flex flex-col p-4">
    <p className="text-lg font-medium text-gray-800 tracking-wider">${order.amount}</p>
  
  </div>
</div>

<div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="flex items-center justify-between bg-blue-500 py-3 px-4">
    <span className="text-sm font-medium uppercase text-white">Payment Status</span>
    <FaMoneyCheck className="w-6 h-6 text-white" />
  </div>
  <div className="flex flex-col p-4">
  <div className="flex items-center font-medium text-md text-gray-800">
            <span className={`mr-2 text-${order.paymentStatus === "succeeded" ? "green" : "orange"}-500`}>{order.paymentStatus}</span>
            {order.paymentStatus === 'succeeded' ? (
              <FaCheckCircle className={`text-${order.paymentStatus === "succeeded" ? "green" : "orange"}-500`} />
            ) : (
              <FaExclamationCircle className={`text-${order.paymentStatus === "succeeded" ? "green" : "orange"}-500`} />
            )}
          </div>
  
  </div>
</div>


<div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="flex items-center justify-between bg-pink-500 py-3 px-4">
    <span className="text-sm font-medium uppercase text-white">Payment Receipt</span>
    <FaDollarSign className="w-6 h-6 text-white" />
  </div>
  <div className="flex flex-col p-4">
    <p className="text-lg font-medium text-gray-800 tracking-wider"> {order.receipt && (
            <a href={order.receipt} className="text-sm font-medium text-blue-500 hover:underline">
              View Receipt
            </a>
          )}</p>
  
  </div>
</div>
    
      </div>


      <div  className="grid grid-cols-3 gap-4">
      <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}  className="mt-6 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-4">User Information</h3>
        <div className="flex flex-col">
          <div className="flex items-start mb-2">
            <div className="w-1/3 text-gray-600 font-medium">Name:</div>
            <div className="w-2/3 font-normal">{user?.name}</div>
          </div>
          <div className="flex items-start mb-2">
            <div className="w-1/3 text-gray-600 font-medium">Email:</div>
            <div className="w-2/3 font-normal">{user?.email}</div>
          </div>
          <div className="flex items-start">
            <div className="w-1/3 text-gray-600 font-medium">Mobile:</div>
            <div className="w-2/3 font-normal">{user?.mobile}</div>
          </div>
        </div>
      </div>
      {order.address && (
        <div  style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}  className="mt-6 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Address</h3>
          <div className="flex flex-col">
            <div className="flex items-start mb-2">
              <div className="w-1/3 text-gray-600 font-medium">Address line 1:</div>
              <div className="w-2/3 font-normal">{order.address.line1}</div>
            </div>
            <div
className="flex items-start mb-2">
<div className="w-1/3 text-gray-600 font-medium">Address line 2:</div>
<div className="w-2/3 font-normal">{order.address.line2}</div>
</div>
<div className="flex items-start mb-2">
<div className="w-1/3 text-gray-600 font-medium">City:</div>
<div className="w-2/3 font-normal">{order.address.city}</div>
</div>
<div className="flex items-start mb-2">
<div className="w-1/3 text-gray-600 font-medium">State:</div>
<div className="w-2/3 font-normal">{order.address.state}</div>
</div>
<div className="flex items-start">
<div className="w-1/3 text-gray-600 font-medium">Zip code:</div>
<div className="w-2/3 font-normal">{order.address.zipcode}</div>
</div>
</div>
</div>
)}
<div className="mt-6">
<DebitCard cardNumber={order.payment && order.payment.card.last4} expiryMonth = {order.payment && order.payment.card.exp_month} expiryYear={order.payment && order.payment.card.exp_year} brand={order.payment && order.payment.card.brand} cardHolder={user && user.name} />


<div  style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="bg-white p-6 mt-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-2">Shipping Information</h2>
          <div className="mb-4">
            <label htmlFor="trackingNo" className="block text-gray-600 font-bold mb-2">Tracking Number</label>
            <input
              type="text"
              name="trackingNo"
              value={trackingNo}
              onChange={handleTrackingNoChange}
              className="border border-gray-400 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-gray-600 font-bold mb-2">Status</label>
            <select
              name="status"
              value={status}
              onChange={handleStatusChange}
              className="border border-gray-400 p-2 w-full"
            >
              <option value="">Select Status</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
          <button onClick={handleUpdate} className="bg-blue-500 text-white py-2 px-4 rounded-lg">Update</button>
        </div>
</div>
</div>



</div>

      
      <div>
        <div  style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-2">Products</h2>
          {order.products && (
            <div className="space-y-4">
              {order.products.map((product) => (
                <div key={product.productId}>
                    <p className="text-gray-600 mb-2">
                    <span className="font-bold text-gray-800">Product Name:</span> {product.productName}
                    </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-bold text-gray-800">Product ID:</span> {product.productId}
                    </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-bold text-gray-800">Quantity:</span> {product.quantity}
                  </p>
                  <hr />
                </div>
              ))}
            </div>
          )}
        </div>
    
      </div>
    </div>
   
  </div>
    </div>
);
};
export default OrderDetails;

