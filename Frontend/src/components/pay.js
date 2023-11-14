
import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from'axios';


export default function Pay() {

  const[stripeToken, setStripeToken] = useState(null);
  const history = useHistory();


    const KEY = "pk_live_51MlMxnFcHtUtur7mVjXtk0cVovUwPyXvvdZFG7a7nrfCqJqo21i6zlEoIHY2iWsOYEwofTQpXFlmjPV3SpgdqCT500bRujMfBH";

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
      const makeRequest = async () => {
        try {
          const res = await axios.post(
            "http://localhost:5000/api/checkout/payment",
            {
              tokenId: stripeToken.id,
              amount: 200,
            }
          );
          console.log(res.data);
          history.push("/success");
        } catch (error) {
          console.log(error);
        }
      };
      if (stripeToken) {
        makeRequest();
      }
    }, [stripeToken, history]);
    
  return (
    <>
    {stripeToken ? (
      <span style={{color: "white"}}>Processing. Please wait...</span>
    ) : (
   <StripeCheckout name="Hermes Aerospace"
   image="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
   billingAddress
   shippingAddress
   description = " Your total is $2"
   amount={200}
   token={onToken}
   stripeKey={KEY}>

<button className="w-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Pay Now
        </button>

   </StripeCheckout>
   )}
    </>
  )
}
