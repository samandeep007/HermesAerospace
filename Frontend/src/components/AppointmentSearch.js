import React, { useState } from 'react';
import { HiClock, HiSearch } from 'react-icons/hi';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer'

function AppointmentSearch() {
  const [token, setToken] = useState('');
  const [appointment, setAppointment] = useState(null);
  const [error, setError] = useState('');

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      axios.get(`http://localhost:5000/api/appointments/${token}`)
      .then(response => {
        console.log(response.data);
        setAppointment(response.data);
      })

      setError('');
    } catch (error) {
      setAppointment(null);
      setError('Appointment not found');
    }
  };

  return (
    <>
  <Navbar/>
  
    <div style={{height: "100vh"}} className="min-h-screen bg-gray-900 flex  flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div style={{ marginTop: "-100px", }} className="sm:mx-auto sm:w-full  sm:max-w-md">
   
        <h2 style={{justifyContent: "space-between", fontSize: "40px"}} className="mt-10 text-center flex items-center  font-bold text-white"> <HiClock className='text-6xl'/> <span style={{marginLeft: "10px"}}>  Check Your Appointment Status</span></h2>
      </div>

      <div  style={{width: "600px"}} className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div  style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="bg-white py-8 px-4">
          <form onSubmit={handleSearch}>
            <div className="mb-4">
              <label htmlFor="token" className="block text-gray-700 font-bold mb-2">
                Token
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="token"
                  id="token"
                  style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter your token"
                  value={token}
                  onChange={handleTokenChange}
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Check Status
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </div>
          )}

          {appointment && appointment.status === 'accepted' && (
            
            <div className="mt-3">
                <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}  className="mt-3 bg-green-200 border-l-4 border-yellow-500 text-gray-700 p-4" role="alert">
          <p className="font-bold">Status</p>
          <p>Your appointment has been Accepted.</p>
        </div>
              <h3 className="text-lg mt-3 font-medium text-gray-900">Appointment Details</h3>
              
              <dl style={{marginLeft: "35px"}} className="mt-1 grid grid-cols-3 gap-x-8 gap-y-8 sm:grid-cols-3">
                <div className="sm:col-span-
-1">
<dt style={{marginLeft: "15px"}} className="text-md font-medium text-gray-700">Appointment Date</dt>
<dd style={{marginLeft: "5px"}} className="mt-2 text-3xl font-semibold text-gray-900">{appointment.appointmentDate}</dd>
</div>
<div className="sm:col-span-1">
<dt style={{marginLeft: "15px"}} className="text-md font-medium text-gray-700">Appointment Start</dt>
<dd style={{marginLeft: "55px"}}  className="mt-2 text-3xl font-semibold text-gray-900">{appointment.appointmentStart}</dd>
</div>
<div className="sm:col-span-1">
<dt  style={{marginLeft: "10px"}}className="text-md font-medium text-gray-700">Appointment End</dt>
<dd style={{marginLeft: "45px"}} className="mt-2 text-3xl font-semibold text-gray-900">{appointment.appointmentEnd}</dd>
</div>
</dl>
</div>
)}
   {appointment && appointment.status === 'pending' && (
        <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}  className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
          <p className="font-bold">Status</p>
          <p>Your appointment request is pending for approval</p>
        </div>
      )}

{appointment && appointment.status === 'declined' && (
        <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}  className="mt-6 bg-red-100 border-l-4 border-red-500 text-yellow-700 p-4" role="alert">
          <p className="font-bold">Status</p>
          <p>Your appointment request is declined.</p>
        </div>
      )}
    </div>
  </div>
</div>

<Footer/>
</>
);
}

export default AppointmentSearch;