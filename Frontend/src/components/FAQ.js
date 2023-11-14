import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import Footer from "./Footer";
import Navbar from "./StoreNavbar";
import StoreNavbar2 from "./storeNavbar2";



const faqs = [
  {
    question: 'What is Hermes Corporation?',
    answer: 'Hermes Corporation is an ecommerce website that offers a wide range of products to customers. It is dedicated to providing an exceptional shopping experience to all its customers.'
  },
  {
    question: 'What kind of products does Hermes Corporation offer?',
    answer: 'Hermes Corporation offers a wide range of products, including but not limited to clothing, accessories, electronics, home appliances, beauty products, and much more.'
  },
  {
    question: 'How do I place an order on Hermes Corporation?',
    answer: 'To place an order on Hermes Corporation, follow these simple steps: a. Browse the products on the website and select the items you want to purchase. b. Add the items to your cart. c. Proceed to checkout and fill in your shipping and payment details. d. Review your order details and confirm your purchase.'
  },
  {
    question: 'How can I pay for my order on Hermes Corporation?',
    answer: 'Hermes Corporation accepts multiple payment options, including credit cards, debit cards, PayPal, and other online payment platforms. The available payment options will be displayed at checkout.'
  },
  {
    question: 'How long does it take to receive my order?',
    answer: 'The delivery time varies depending on your location and the shipping option you choose. Hermes Corporation provides estimated delivery times during the checkout process. Most orders are delivered within 5-7 business days.'
  },
  {
    question: "What is Hermes Corporation's return policy?",
    answer: "Hermes Corporation has a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a refund or exchange. However, some products may be exempted from this policy, such as final sale items or personalized products."
  },
  {
    question: 'How do I track my order?',
    answer: 'You can track your order by logging into your Hermes Corporation account and checking your order status. You will also receive a tracking number via email or text message once your order is shipped.'
  },
  {
    question: 'What if my order is damaged or defective?',
    answer: 'If your order arrives damaged or defective, please contact Hermes Corporation’s customer service team immediately. They will assist you in returning the item and getting a replacement or refund.'
  },
  {
    question: 'How can I contact Hermes Corporation’s customer service team?',
    answer: 'Hermes Corporation’s customer service team is available via email, phone, or live chat. You can find the contact information on the website’s "Contact Us" page.'
  },
  {
    question: 'Is my personal information safe with Hermes Corporation?',
    answer: 'Yes, Hermes Corporation takes the privacy and security of its customers seriously. All personal information is kept confidential and secure through the use of encryption technology and other security measures.'
  },
];


const FAQ = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    }
  
    return (
      <div className="border-b border-gray-200">
        <button 
          className="flex items-center justify-between w-full py-4 text-left focus:outline-none"
          onClick={handleToggle}
        >
          <h2 className="text-lg font-medium text-gray-900">{question}</h2>
          {isOpen ? <FaChevronUp className="w-6 h-6 text-gray-500" /> : <FaChevronDown className="w-6 h-6 text-gray-500" />}
        </button>
        {isOpen && <p className="py-2 text-md text-gray-700">{answer}</p>}
      </div>
    );
  };



export default function FAQPage() {
    

  return (
    <>
     <Navbar />
      <StoreNavbar2/>
      <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Frequently Asked Questions</h1>
        <div className="mt-8 space-y-6">
          {faqs.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
<Footer/>
    </>
   
   
  );



      }