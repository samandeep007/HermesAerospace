import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import axios from 'axios';
import Navbar from './StoreNavbar';
import Navbar2 from './storeNavbar2';
import Footer from './Footer';
import { useDispatch } from "react-redux";

export default function Greeting() {


  const location = useLocation();

  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/orders", {
          username: currentUser.username,
          products: cart.products.map((item) => ({
            productId: item.id,
            productName: item.name,
            quantity: item.quantity,
          })),
          payment: data.payment_method_details,
          paymentStatus: data.status,
          receipt: data.receipt_url,
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
        
      } catch (error) {
        console.log(error);
      }
    };
    data && createOrder();
  }, [cart, currentUser, data]);

  return (
<>
<Navbar />
<Navbar2 />
<div className="bg-white ">
<div className="flex flex-col h-screen bg-gray-100 py-12">
      <div className="flex-grow container mx-auto flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-green-600 mb-4">Order Successful!</h1>
          <p className="text-lg text-gray-700 mb-4">Thank you for your purchase. Your order has been confirmed and will be shipped soon.</p>
        {orderId && (<h1>{orderId}</h1>)}
          <p className="text-lg text-gray-700 mb-4">We hope you enjoy your new items. If you have any questions or concerns, please feel free to contact us.</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Shop More
          </button>
        </div>
      </div>
      <div className="text-center text-gray-600 py-4">&copy; 2023 Hermes Aerospace | Drone Store. All rights reserved.</div>
    </div>
</div>
<Footer />

</>
  )
}
