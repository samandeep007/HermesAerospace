import React, {useState} from 'react';
import axios from 'axios';

export default function Landing() {
  const[email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/newsletter/subscribe', {
        email
    
      });
    
      
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>

    <div id="banner5">
    <div id="landingPic"><div id="landingBackground"></div></div>
    <div id="landing">
    <div id="landingText">
        <div id="slide">
        <button type="button" id="aboutPage" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5   text-center  mb-2">Know about us</button>
       <div id="slideText">
       <a href="/store" className="font-medium inline-flex text-gray-400 dark:text-blue-400 hover:underline">Visit Store<svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
       </div>
        </div>
    <h1 className="text-7xl text-white font-bold dark:text-white">Discover the world</h1>
    <h1 className="text-7xl text-transparent font-bold bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">From new Perspective</h1>
    <p className="my-6 text-2xl text-gray-300">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</p>
   
    
    <div className="mt-10">
   
    <input type="email" onChange={(e)=> {setEmail(e.target.value)}}  id="large-input" placeholder="Enter your Email" className="block p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    <button type="button"   onClick={handleSubmit} id="subscribe" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-lg px-5 py-3  text-center mx-4 mb-2">Subscribe</button>
</div>
<p className="my-4 text-lg text-gray-300">By clicking on the subscribe button you agree to receive the promotional messages and updates from the company.</p>
</div>
    </div>
</div>
  
    </>
  )
}
