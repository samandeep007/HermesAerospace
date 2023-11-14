import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa';
import Navbar from '../components/StoreNavbar';
import Navbar2 from '../components/storeNavbar2';
import Footer from '../components/Footer';

export default function Error404() {
  return (
    <div>
      
      <div className="bg-gray-100">
    <div style={{height: "700px", paddingTop:"100px"}} className="flex flex-col items-center">
  <div className="text-center">
    <div style={{marginBottom: "-30px"}} className="flex items-center justify-center">
      <FaExclamationTriangle style={{fontSize: "120px"}} className="text-red-600 mr-6" />
      <h1 style={{fontSize: "180px"}} className=" font-bold">404</h1>
    </div>
    <h2 className="text-5xl font-bold mb-2">Oops! Page not found</h2>
    <p className="text-gray-600 text-lg mb-8">The page you are looking for does not exist.</p>
    <a href="/" className="text-white bg-red-600 py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300">Go back to home</a>
  </div>
</div>
</div>

    </div>
  )
}
