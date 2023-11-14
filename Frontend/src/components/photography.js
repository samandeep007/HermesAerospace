import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react';

export default function Photography() {


  const[hours, setHours]=useState(0);
  const[equipments, setEquipments]=useState(0);


  return (
    <>
    
    <Navbar/>
    <div id="quote">
        <div id="quoteOptionsContainer">
            <div id="quoteOptions">
            <p style={{fontSize: "43px", lineHeight: "50px"}} className=" ml-4 pt-4 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400  font-bold font-medium text-gray-300 dark:text-white">Get a personalized quote tailored to your needs and budget today!</p>
        <p className="text-2xl ml-4 mt-3  font-medium text-white dark:text-white">We'd love to help you with your drone needs</p>
                <img src="droner.png" alt="" />
            </div>

        </div>
        <div id="quoteImgContainer">
            <div id="quoteImgPlaceholder">
            <form>
      <div id="inputFields">
      < div id="field1">
<label for="name" class="block mb-2 text-md font-medium text-white dark:text-white">First Name</label>
    <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Doe" required/>
    </div>
        <div id="field2">
      <label for="name" class="block mb-2 text-md font-medium text-white dark:text-white">Last Name</label>
    <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full inline p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Doe" required/>
</div>

      </div>
      <div id="inputFields2">
      < div id="field1">
      <label for="email" class="block mb-2 text-md font-medium text-white dark:text-white">Email</label>
    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
    </div>
        <div id="field2">
        <label for="name" class="block mb-2 text-md font-medium text-white dark:text-white">Phone Number</label>
    <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Doe" required/>
</div>

      </div>
    
      <div id="inputFields2">
      < div id="field1">
      <label for="name" class=" mr-2 block mb-2 text-md font-medium text-white dark:text-white">Number of Hours</label>
    <input type="number" id="name" onChange={(e)=>setHours(e.target.value)} class=" mr-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Doe" required/>
    </div>
        <div id="field2">
        <label for="name" class=" mr-2 block mb-2 text-md font-medium text-white dark:text-white">Number of Equipments needed</label>
    <input type="number" id="name" onChange={(e)=>setEquipments(e.target.value)} class=" mr-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Doe" required/>
</div>

      </div>
   

<div class="mb-6 mt-6 ">
 
<label for="projectDesc" class="block mb-2 text-md font-medium text-white dark:text-white">Project Description</label>
<textarea id="projectDesc" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>
</div>

<div id="costEstimation">
  <div id="estimation">
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
    </div>
    <label for="terms" class="ml-2 text-md  font-medium text-white dark:text-gray-300">I agree with the <a href="#" class="text-blue-400 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Proceed to checkout</button>
  </div>

  <div id="estimate">

  <p style={{fontSize: "43px", lineHeight: "50px"}} className=" ml-4 pt-4  font-bold font-medium text-white dark:text-white">{(1.13*40*hours*(1+0.5*equipments)).toFixed(2)} CAD</p>
  <p style={{fontSize: "20px", lineHeight: "10px"}} className=" ml-4 pt-4  font-bold font-medium text-white dark:text-white">including GST</p>
  </div>
  </div>


</form>

              
            </div>
        </div>
    </div>
    <Footer/>      
    </>
  )
}
