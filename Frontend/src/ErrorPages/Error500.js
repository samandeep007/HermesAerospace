import React from 'react'
import { FaExclamationCircle } from 'react-icons/fa';
import Navbar from '../components/StoreNavbar';
import Navbar2 from '../components/storeNavbar2';
import Footer from '../components/Footer';

export default function Error500() {
  return (
    <div>
      <Navbar />
<Navbar2 />
 
 <div className="bg-gray-100">
  <div style={{height: "700px", paddingTop:"100px"}} className="flex flex-col items-center">
    <div className="text-center">
      <div style={{marginBottom: "-30px"}} className="flex items-center justify-center">
        <FaExclamationCircle style={{fontSize: "120px"}} className="text-yellow-500 mr-6" />
        <h1 style={{fontSize: "180px"}} className="font-bold">500</h1>
      </div>
      <h2 className="text-5xl font-bold mb-2">Internal Server Error</h2>
      <p className="text-gray-600 text-lg mb-8">Oops, something went wrong on our end. We're working on it!</p>
      <a href="/" className="text-white bg-yellow-500 py-3 px-6 rounded-lg hover:bg-yellow-700 transition duration-300">Go back to home</a>
    </div>
  </div>


</div>
<Footer/>
    </div>
  )
}
