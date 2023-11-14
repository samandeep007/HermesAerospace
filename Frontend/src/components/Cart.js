import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./StoreNavbar";
import { useDispatch, useSelector } from "react-redux"; // Added useSelector import
import StoreNavbar2 from "./storeNavbar2";
import { Link, useHistory } from "react-router-dom"; // Added useHistory import
import { updateProductQuantity, removeProduct } from "../redux/cartRedux";
import { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { userRequest } from "../requestMethods";

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const[stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

    const KEY = "pk_live_51MlMxnFcHtUtur7mVjXtk0cVovUwPyXvvdZFG7a7nrfCqJqo21i6zlEoIHY2iWsOYEwofTQpXFlmjPV3SpgdqCT500bRujMfBH";

    const onToken = (token) => {
        setStripeToken(token)
    }
    const handleQuantityChange = (productId, newQuantity) => {
      if (newQuantity >= 1) {
        dispatch(updateProductQuantity({ id: productId, quantity: newQuantity }));
      }
      else {
        dispatch(removeProduct({ productId }));
      }
    };
    
    const handleRemoveProduct = (productId) => {
      dispatch(removeProduct({ productId }));
    };

    useEffect(() => {
      const makeRequest = async () => {
        try {
          const res = await userRequest.post(
            "/checkout/payment",
            {
              tokenId: stripeToken.id,
              amount: `${cart.total * 100}`
            }
          );
          console.log(res.data);
          history.push("/success", {
            stripeData: res.data,
            products: cart, });
        } catch (error) {
          console.log(error);
        }
      };
      if (stripeToken) {
        makeRequest();
      }
    }, [stripeToken, history, cart]);



  return (
    <div>
      <Navbar />
      <StoreNavbar2/>
   
       <div className="bg-gray-100 min-h-screen">
      <div className="max-w-9xl  mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>
        <div className="flex flex-col md:flex-row justify-between ">
          <div style={{margin: "10px", marginTop: "0px", flex: "3"}} className=" md:w-2/3">
            <div  style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="bg-white px-4">
              <div className="p-4 border-b border-gray-300">
                <h2 className="text-lg font-bold">Shopping Bag ({cart.totalItems})</h2>
              </div>
              <div className="px-4 py-6">
              {cart.products.map((product) => (
  product && (
    <div key={product.id} className="flex items-center my-6">
      <img className="w-36 h-24 object-cover mr-6" src={product.image} alt={product.name} />
      <div>
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-500 w-40">ID: {product.id}</p>
      </div>
      <div className="flex-1"></div>
      <div className="flex items-center">
        <button
          className="px-2 py-1 border border-gray-300 rounded-md"
          onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
        >
          -
        </button>
        <span className="px-4">{product.quantity}</span>
        <button
          className="px-2 py-1 border border-gray-300 rounded-md"
          onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
        >
          +
        </button>
        <button
          className="px-2 py-1 border border-gray-300 rounded-md ml-4"
          onClick={() => handleRemoveProduct(product.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="ml-4 font-bold">${product.price * product.quantity}</div>
    </div>
  )
))}

              </div>
            </div>
            <div className="mt-8">
              <Link to="/store" className="text-blue-500 hover:underline focus:outline-none">
                Continue Shopping
              </Link>
            </div>
          </div>
          <div style={{flex: "1.5"}} className=" md:w-1/3">
            <div  style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}  className="bg-white px-4 py-6">
              <h2 className="text-lg font-bold">Order Summary</h2>
              <div className="flex justify-between mt-4 mb-2">
                <span className="text-gray-500">Subtotal:</span>
                <span className="font-bold">${cart.subtotal}</span>
              </div>
              <div className="flex justify-between mt-2 mb-2">
                <span className="text-gray-500">Estimated Shipping:</span>
                <span className="font-bold">$80</span>
              </div>
              <div className="flex justify-between mt-2 mb-2">
                <span className="text-gray-500">Shipping Discount:</span>
                <span className="

font-bold">-$20</span>
</div>
<hr className="my-4" />
<div className="flex justify-between mt-2 mb-2">
<span className="text-gray-500">Total:</span>
<span className="font-bold">${cart.total}</span>
</div>
<StripeCheckout
   name="Hermes Aerospace"
   image="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
   billingAddress
   shippingAddress
   description={`Your total is $ ${cart.total}`}
   amount={cart.total * 100}
   token={onToken}
   stripeKey={KEY}
>
<button  style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}  className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
Checkout
</button>
</StripeCheckout>
</div>
</div>
</div>
</div>
</div>
      <Footer />
    </div>
  );
};

export default Cart;
