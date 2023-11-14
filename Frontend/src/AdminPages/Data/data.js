import axios from 'axios';
import { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'

const Data = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];



  const [quotation, setQuotation] = useState([]);
  const [quote, setQuote] = useState(quotation.quote || null);
  const [paymentLink, setPaymentLink] = useState(quotation.paymentLink || '');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const getQuotation = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/data/${id}`, {
          key: '_id'
        });
        setQuotation(response.data);
        setQuote(response.data.quote)
        setPaymentLink(response.data.paymentLink);
      } catch (error) {
        console.error(error);
      }
    };
    getQuotation();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/data/${id}`, {
    quote,
    paymentLink
    })
    .then((response) => {
      console.log(response);
      setStatus("Quotation Sent")
    })
    .catch((error) => {
      console.error(error);
    });
  };


  return (
    <div style={{flex: "4"}} className="bg-black min-h-screen">
    <div style={{maxWidth: "95%"}} className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-xl px-6 py-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Quotation Request Details</h1>
    
        <div className="flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-10">
         
          <div className="flex-1 mr-2">
            <label htmlFor="firstName" className="font-medium text-gray-700 block mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={quotation.firstName}
              className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 bg-gray-200"
              disabled
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="font-medium text-gray-700 block">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={quotation.lastName}
              className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 bg-gray-200"
              disabled
            />
          </div>
          </div>
          <div className="flex flex-col mt-6 lg:flex-row  lg:space-y-0 lg:space-x-10">
          <div className="flex-1 mr-2">
            <label htmlFor="Email" className="font-medium text-gray-700 block mb-2">
              Email
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={quotation.email}
              className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 bg-gray-200"
              disabled
            />
          </div>
          <div className="flex-1 mr-2">
            <label htmlFor="companyName" className="font-medium text-gray-700 block mb-2">
              Mobile
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={quotation.mobile}
              className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 bg-gray-200"
              disabled
     
            />
          </div>
          <div className="flex-1">
            <label htmlFor="companyName" className="font-medium text-gray-700 block mb-2">
               Service
        </label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={quotation.service}
          className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 bg-gray-200"
          disabled
        />
      </div>
    </div>
    <label htmlFor="projectDescription" className="font-medium mt-6 text-gray-700 block mb-2">
          Additional Information
        </label>
        <textarea
          style={{height:"80px"}}
          name="endTime"
          id="endTime"
          value={quotation.additionalInfo}
          disabled
          className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
        />

    <label htmlFor="projectDescription" className="font-medium mt-6 text-gray-700 block mb-2">
          Project Description
        </label>
        <textarea
          style={{height:"150px"}}
          name="endTime"
          id="endTime"
          value={quotation.projectDescription}
          disabled
          className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
        />

<div className="flex flex-col lg:flex-row mt-6 lg:space-y-0 lg:space-x-6 mt-6">
      <div className="flex-1 mr-2">
        <label htmlFor="date" className="font-medium text-gray-700 block mb-2">
          Quotation Amount
        </label>
        <input
          type="text"
          name="date"
          id="date"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
          required
       />
      </div>
    </div>


 <label htmlFor="projectDescription" className="font-medium mt-6 text-gray-700 block mb-2">
          Payment Link
        </label>
        <textarea
          style={{height:"70px"}}
          name="endTime"
          id="endTime"
          value={paymentLink}
          onChange={(e)=>{setPaymentLink(e.target.value)}}
          className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
        />
 
   
    
         <div className="flex mt-8 space-x-4">
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                disabled={!quote}
                >
                 Send Quotation
               
                </button>
              </div>
              
              {status && (
                <div className='text-green-500 mt-4'>
                  {status}
                </div>
              )}
              
      </div>
  
  </div>
  
  
</div>
  );
};
export default Data;