import axios from 'axios';
import { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'

const AppointmentPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];



  const [contact, setContact] = useState([]);
  const [reply, setReply] = useState(contact.reply || null);
  const [name, setName] = useState(contact.name || null);
  const [email, setEmail] = useState(contact.email || null);
  const [mobile, setMobile] = useState(contact.mobile || null);
  const [message, setMessage] = useState(contact.message || null);
  const [subject, setSubject] = useState(contact.subject || null);


  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/contacts/${id}`, {
          key: '_id'
        });
        setContact(response.data);
        setReply(response.data.reply)
      } catch (error) {
        console.error(error);
      }
    };
    getContacts();
  }, []);

  const handleSubmit = async () => {
    axios.put(`http://localhost:5000/api/contacts/${contact._id}`, {
    reply
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  };


  return (
    <div style={{flex: "4"}} className="bg-black min-h-screen">
    <div style={{maxWidth: "95%"}} className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-xl px-6 py-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Query Details</h1>
        <div className="flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-10">
          <div className="flex-1 mr-2">
            <label htmlFor="firstName" className="font-medium text-gray-700 block mb-2">
              Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={contact.name}
              className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 bg-gray-200"
              disabled
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="font-medium text-gray-700 block">
              Email
            </label>
            <input
              type="text"
              name="Email"
              id="Email"
              value={contact.email}
              className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 bg-gray-200"
              disabled
            />
          </div>
          </div>
          <div className="flex flex-col mt-6 lg:flex-row  lg:space-y-0 lg:space-x-10">
          <div className="flex-1 mr-2">
            <label htmlFor="Mobile" className="font-medium text-gray-700 block mb-2">
              Mobile
            </label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              value={contact.mobile}
              className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 bg-gray-200"
              disabled
            />
          </div>
          <div className="flex-1 mr-2">
            <label htmlFor="companyName" className="font-medium text-gray-700 block mb-2">
              Subject
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={contact.subject}
              className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 bg-gray-200"
              disabled
            />
          </div>
    </div>
    <label htmlFor="projectDescription" className="font-medium mt-6 text-gray-700 block mb-2">
          Message
        </label>
        <textarea
          style={{height:"100px"}}
          name="endTime"
          id="endTime"
          value={contact.message}
          disabled
          className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
        />

 <label htmlFor="Reply" className="font-medium mt-6 text-gray-700 block mb-2">
          Your Reply
        </label>
        <textarea
          style={{height:"150px"}}
          name="endTime"
          id="endTime"
          value={contact.reply}
          onChange={(e)=>{setReply(e.target.value)}}
          className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
        />

    
         <div className="flex mt-8 space-x-4">
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Submit Reply
                </button>
              </div>
          
      </div>
     
  </div>
</div>
  );
};
export default AppointmentPage;