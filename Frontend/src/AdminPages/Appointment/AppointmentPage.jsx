import axios from 'axios';
import { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'

const AppointmentPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];



  const [appointment, setAppointment] = useState([]);
  const [status, setStatus] = useState(appointment.status || null);
  const [appointmentDate, setAppointmentDate] = useState(appointment.appointmentDate || '');
  const [appointmentStart, setAppointmentStart] = useState(appointment.appointmentStart || '');
  const [appointmentEnd, setAppointmentEnd] = useState(appointment.appointmentEnd || '');
  const [meetingLink, setMeetingLink] = useState(appointment.meetingLink || '');

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/appointments/${id}`, {
          key: '_id'
        });
        setAppointment(response.data);
        setAppointmentDate(response.data.appointmentDate)
        setAppointmentStart(response.data.appointmentStart)
        setAppointmentEnd(response.data.appointmentEnd)
        setMeetingLink(response.data.meetingLink);
      } catch (error) {
        console.error(error);
      }
    };
    getAppointments();
  }, []);

  const handleAccept = async () => {
    try {
      const updatedAppointment = await axios.put(`http://localhost:5000/api/appointments/${appointment._id}`, {
        status: 'accepted',
        appointmentDate,
        appointmentStart,
        appointmentEnd,
        meetingLink,
      });
      setStatus(updatedAppointment.data.status);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecline = async () => {
    try {
      const updatedAppointment = await axios.put(`http://localhost:5000/api/appointments/${appointment._id}`, {
        status: 'declined',
      });
      setStatus(updatedAppointment.data.status);
    } catch (error) {
      console.error(error);
    }
  };

  
  const handleComplete = async () => {
    try {
      const updatedAppointment = await axios.put(`http://localhost:5000/api/appointments/${appointment._id}`, {
        status: 'completed',
      });
      setStatus(updatedAppointment.data.status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{flex: "4"}} className="bg-black min-h-screen">
    <div style={{maxWidth: "95%"}} className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-xl px-6 py-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Appointment Details</h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Appointment Token</h2>
        <p className="text-3xl text-gray-700 font-semibold mb-6">{appointment.token}</p>
        <div className="flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-10">
          <div className="flex-1 mr-2">
            <label htmlFor="firstName" className="font-medium text-gray-700 block mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={appointment.firstName}
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
              value={appointment.lastName}
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
              value={appointment.email}
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
              value={appointment.mobile}
              className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 bg-gray-200"
              disabled
            />
          </div>
          <div className="flex-1">
            <label htmlFor="companyName" className="font-medium text-gray-700 block mb-2">
              Company Name
        </label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={appointment.companyName}
          className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 bg-gray-200"
          disabled
        />
      </div>
    </div>
    <label htmlFor="projectDescription" className="font-medium mt-6 text-gray-700 block mb-2">
          Project Description
        </label>
        <textarea
          style={{height:"150px"}}
          name="endTime"
          id="endTime"
          value={appointment.projectDescription}
          disabled
          className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
        />

 <label htmlFor="projectDescription" className="font-medium mt-6 text-gray-700 block mb-2">
          Meeting Link (Google Meet, MS Teams, Zoom)
        </label>
        <textarea
          style={{height:"70px"}}
          name="endTime"
          id="endTime"
          value={appointment.meetingLink}
          onChange={(e)=>{setMeetingLink(e.target.value)}}
          className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
        />
 
    <div className="flex flex-col lg:flex-row mt-6 lg:space-y-0 lg:space-x-6 mt-6">
      <div className="flex-1 mr-2">
        <label htmlFor="date" className="font-medium text-gray-700 block mb-2">
          Appointment Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
        />
      </div>
      <div className="flex-1 mr-2">
        <label htmlFor="startTime" className="font-medium text-gray-700 block mb-2">
          Start Time
        </label>
        <input
          type="time"
          name="startTime"
          id="startTime"
          value={appointmentStart}
          onChange={(e) => setAppointmentStart(e.target.value)}
          className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
        />
      </div>
      <div className="flex-1">
        <label htmlFor="endTime" className="font-medium text-gray-700 block mb-2">
          End Time
        </label>
        <input
          type="time"
          name="endTime"
          id="endTime"
          value={appointmentEnd}
          onChange={(e) => setAppointmentEnd(e.target.value)}
          className="mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
        />
      </div>
    </div>
    
         <div className="flex mt-8 space-x-4">
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Accept
                </button>
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Decline
                </button>
                <button
                  onClick={handleComplete}
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Complete
                </button>
              </div>
              {status && (
                <div className={`mt-4  pb-10 ${status === 'accepted' || status === 'completed'? 'text-green-500' : 'text-red-500'}`}>
                  Appointment {status}
                </div>
              )}
      </div>
     
  </div>
</div>
  );
};
export default AppointmentPage;