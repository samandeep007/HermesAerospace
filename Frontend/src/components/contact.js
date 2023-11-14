import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios';
import {FaCheckCircle, FaCross, FaTimes, FaTimesCircle, FaWindowClose} from 'react-icons/fa'

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const[loading, setLoading]=useState(false);
  const[errorMessage, setErrorMessage]=useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setName('');
    setEmail('');
    setMobile('');
    setMessage('');

  };



  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleMobile = (event) => {
    setMobile(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubject = (event) => {
    setSubject(event.target.value);
  }

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
     
      const res = await axios.post('http://localhost:5000/api/contacts', {
        name,
        email,
        mobile,
        subject,
        message
      });
      
   
      setShowModal(true);
      setLoading(false);

     

      
    } catch (err) {
      console.error(err.message);
      setLoading(false);
      setErrorMessage('Could not submit appointment request');
    }
  };

  return (
    <>
   <Navbar/>
<div id="contactContainer">
   
    <div id="contactPic">
        <div id="contactPromo">
        <p className=" text-5xl ml-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500  font-bold font-medium text-gray-300 dark:text-white">Have a question, comment, or just want to say hi?</p>
        <p className="text-2xl ml-4 mt-3  font-medium text-white dark:text-white">We'd love to hear from you - let's get in touch!</p>
        
    <img src="contact (1).png" />
    </div>
    <div id="contactDetails">
  
    </div>
    </div>
    <div id="contactForm">
    <div id="contactPromo2">
      <div id="contactInput">
        
<form onSubmit={handleSubmit}>
  <div class="mb-6">
     <label for="name" class="block mb-2 text-md font-medium text-white dark:text-white">Your name</label>
    <input type="text" value={name} onChange={handleName} id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John Doe" required/>
</div>
<div class="mb-6">
    <label for="email" class="block mb-2 text-md font-medium text-white dark:text-white">Your email</label>
    <input type="email" value={email} onChange={handleEmail} id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@xyz.com" required/>
  </div>
  <div class="mb-6">
     <label for="phone" class="block mb-2 text-md font-medium text-white dark:text-white">Your Phone Number</label>
    <input type="text" value={mobile} onChange={handleMobile} id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="+1 234-567-89" required/>
</div>
<div class="mb-6">
     <label for="phone" class="block mb-2 text-md font-medium text-white dark:text-white">Subject</label>
    <input type="text" value={subject} onChange={handleSubject} id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Refund Request" required/>
</div>
  <div class="mb-6">
 
<label for="message" class="block mb-2 text-md font-medium text-white dark:text-white">Your message</label>
<textarea id="message" value={message}  onChange={handleMessage} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>
</div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
    </div>
    <label for="terms" class="ml-2 text-md font-medium text-white dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send your message</button>
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
      <div id="contactNum">
        <div id="c1">
          <div id="c1pic">
            <img src="customer-service (2).png" alt="" />
          </div>
          <div id="c1Details">
          <p className="text-lg ml-4 font-medium text-white text-bold dark:text-white">Technical Support</p>
          <p className="text-md ml-4 font-medium text-white dark:text-white">tech@hermes.com</p>
          <p className="text-md ml-4 font-medium text-white dark:text-white">+1 234-567-89</p>
          </div>
        </div>

        <div id="c1">
          <div id="c1pic">
            <img src="dollar (1).png" alt="" />
          </div>
          <div id="c1Details">
          <p className="text-lg ml-4 font-medium text-white text-bold dark:text-white">Product Support</p>
          <p className="text-md ml-4 font-medium text-white dark:text-white">tech@hermes.com</p>
          <p className="text-md ml-4 font-medium text-white dark:text-white">+1 234-567-89</p>
          </div>
        </div>

        <div id="c1">
          <div id="c1pic">
            <img src="bug.png" alt="" />
          </div>
          <div id="c1Details">
          <p className="text-lg ml-4 font-medium text-white text-bold dark:text-white">Bug Reporting</p>
          <p className="text-md ml-4 font-medium text-white dark:text-white">tech@hermes.com</p>
          <p className="text-md ml-4 font-medium text-white dark:text-white">+1 234-567-89</p>
          </div>
        </div>

        <div id="c1">
          <div id="c1pic">
            <img src="direct-marketing.png" alt="" />
          </div>
          <div id="c1Details">
          <p className="text-lg ml-4 font-medium text-white text-bold dark:text-white">Sales Support</p>
          <p className="text-md ml-4 font-medium text-white dark:text-white">tech@hermes.com</p>
          <p className="text-md ml-4 font-medium text-white dark:text-white">+1 234-567-89</p>
          </div>
        </div>

        
        <div id="c1">
          <div id="c1pic">
            <img src="customer-service (2).png" alt="" />
          </div>
          <div id="c1Details">
          <p className="text-lg ml-4 font-medium text-white text-bold dark:text-white">General Queries</p>
          <p className="text-md ml-4 font-medium text-white dark:text-white">tech@hermes.com</p>
          <p className="text-md ml-4 font-medium text-white dark:text-white">+1 234-567-89</p>
          </div>
        </div>

        
    </div>
    </div>
    </div>

</div>
   <Footer/>
    </>
  )
}
