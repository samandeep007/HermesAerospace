import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {FaCheckCircle, FaCross, FaTimes, FaTimesCircle, FaWindowClose} from 'react-icons/fa'

export default function Data() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const[loading, setLoading]=useState(false);
  const[errorMessage, setErrorMessage]=useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMobile('');
    setService('');
    setLocation('');
    setAdditionalInfo('');
    setProjectDescription('')
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
     
      const res = await axios.post('http://localhost:5000/api/data', {
        firstName,
        lastName,
        email,
        mobile,
        service,
        additionalInfo,
        location,
        projectDescription
      });
      
   
      setShowModal(true);
      setLoading(false);

     

      
    } catch (err) {
      console.error(err.message);
      setLoading(false);
      setErrorMessage('Could not submit quote request');
    }
  };


  return (
    <>
    
    <Navbar/>
    <div id="quote" style={{height:  "750px"}}>
        <div id="quoteOptionsContainer" >
            <div id="quoteOptions" style={{height:  "680px"}}>
            <p style={{fontSize: "43px", lineHeight: "50px"}} className=" ml-4 pt-4 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400  font-bold font-medium text-gray-300 dark:text-white">Get a personalized quote tailored to your needs and budget today!</p>
        <p className="text-2xl ml-4 mt-3  font-medium text-white dark:text-white">We'd love to help you with your drone needs</p>
                <img src="droner.png" alt="" />
            </div>

        </div>
        <div id="quoteImgContainer">
            <div id="quoteImgPlaceholder" style={{height:  "680px"}}>
            <form>
      <div id="inputFields">
      < div id="field1">
<label for="name" class="block mb-2 text-md font-medium text-white dark:text-white">First Name</label>
    <input type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Doe" required/>
    </div>
        <div id="field2">
      <label for="name" class="block mb-2 text-md font-medium text-white dark:text-white">Last Name</label>
    <input type="text" value={lastName} onChange={(e) => {setLastName(e.target.value)}} id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full inline p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Doe" required/>
</div>

      </div>
      <div id="inputFields2">
      < div id="field1">
      <label for="email" class="block mb-2 text-md font-medium text-white dark:text-white">Email</label>
    <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
    </div>
        <div id="field2">
        <label for="name" class="block mb-2 text-md font-medium text-white dark:text-white">Phone Number</label>
    <input type="text" value={mobile} onChange={(e) => {setMobile(e.target.value)}} id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Doe" required/>
</div>

      </div>
    
      <div id="inputFields2">
      < div id="field1">
      <label for="gender"  class="block mb-2 text-md font-medium text-white dark:text-white">Type of services</label>
<select id="gender" value={service} onChange={(e) => {setService(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose your Option</option>
  <option value="LTE/4G/5G Mapping (RSSI,RSRQ,RSRP)">LTE/4G/5G Mapping (RSSI,RSRQ,RSRP)</option>
  <option value="Environmental Mapping (Humidity, Temp, Moisture, Light Sensitivity)">Environmental Mapping (Humidity, Temp, Moisture, Light Sensitivity)</option>
  <option value="Photogrammetry (2D, 3D etc...)">Photogrammetry (2D, 3D etc...)</option>
  <option value="Noise Sensitivity (2D/3D)">Noise Sensitivity (2D/3D)</option>
  <option value="Other">Other</option>
  

</select>
   
    </div>
        <div id="field2">
        <label for="name" class=" mr-2 block mb-2 text-md font-medium text-white dark:text-white">Location (Geographical co-ordinates)</label>
    <input type="text" value={location} onChange={(e) => {setLocation(e.target.value)}} id="name" class=" mr-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Doe" required/>
</div>

      </div>
   
      <div class="mb-6 mt-6 ">
      <label for="name" class="block mb-2 text-md font-medium text-white dark:text-white">if other, mention the details of the sensor</label>
      <textarea id="projectDesc" value={additionalInfo} onChange={(e) => {setAdditionalInfo(e.target.value)}} rows="2" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>
</div>

<div class="mb-6 mt-6 ">
 
<label for="projectDesc" class="block mb-2 text-md font-medium text-white dark:text-white">Project Description</label>
<textarea id="projectDesc" value={projectDescription} onChange={(e) => {setProjectDescription(e.target.value)}}  rows="2" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>
</div>



  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
    </div>
    <label for="terms" class="ml-2 text-md  font-medium text-white dark:text-gray-300">I agree with the <a href="#" class="text-blue-400 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit" onClick={handleSubmit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Request Quote</button>
</form>
{errorMessage && <p>{errorMessage}</p>}
  {showModal && (
 
<div style={{backgroundColor: "rgb(0,0,0,0.7)"}} className="fixed inset-0 z-2 overflow-auto flex items-center justify-center">
  <div className="bg-white rounded-lg w-full max-w-lg mx-auto p-8">
  <button style={{float: "right"}} onClick={handleCloseModal}>
                < FaTimes/>
              </button>
    <div className="flex items-center justify-center mb-4">
      <FaCheckCircle className="text-green-500 mr-2 text-5xl" />
      <h2 className="text-gray-700 text-2xl font-bold mb-2">Thanks for contacting us</h2>
    </div>
    <div style={{marginTop: "-10px"}} className="text-center">
      <p className="text-gray-900 mb-4">
         We have received your query and will get back to you shortly with a reply.
      </p>
    </div>
   
  </div>
</div>
)}

              
            </div>
        </div>
    </div>
    <Footer/>      
    </>
  )
}
