import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  Settings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./user.css";
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ChangePassword from "../ChangePassword/ChangePassword";



export default function UserDetails() {
  const[id, setId] = useState("");
  const userId = useSelector((state)=>state.user.username);
  const[userData, setUserData] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        await axios.get(`http://localhost:5000/api/users/user/${userId}`, {
          key: '_id'
        },).then(response => {
          setUserData(response.data[0]);
          setId(response.data[0]._id);
      })
      } catch {}
    };
    getUser();
  }, []);
  
 
const[username, setUsername] = useState("");
const[name, setName] = useState("");
const[email, setEmail] = useState("");
const[address, setAddress]=useState("");
const[mobile, setMobile]=useState("");
const[dob, setDob] = useState("");

useEffect(() => {
  setUsername(userData.username);
  setName(userData.name);
  setEmail(userData.email);
  setAddress(userData.address);
  setMobile(userData.mobile);
  setDob(userData.dob);
}, [userData]);


const user = {
  id: id,
 username: username,
 name: name,
 email: email,
 address: address,
 mobile: mobile,
 dob:dob
}



const onSubmit = (e) => {
  e.preventDefault();
  console.log(user);

  axios.put(`http://localhost:5000/api/users/${id}`, user)
    .then(res => console.log(res.data));

    window.location.reload();
}



  return (
    <div class=" w-full p-8 rounded-lg" style={{  boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} >
<h1 className="text-3xl text-white font-semibold mb-6"> <Settings style={{height: "45px", width: "45px"}} /> User Settings</h1>
<div className="flex  pb-8 flex-col w-full">
  <div className="flex grid grid-cols-3 gap-6 mx-auto overflow-hidden">
   
    <div style={{ height: "450px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} className="p-6 w-full p-4 rounded-lg bg-white shadow-lg">
    <h2 className="text-lg font-medium mb-4">Personal Information</h2>
      <form className="flex flex-col">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="w-full px-3 py-2 border rounded bg-white text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full px-3 py-2 border rounded bg-white text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
<label className="block text-gray-700 font-medium mb-2" htmlFor="dob">
Date of Birth
</label>
<input
type="date"
id="dob"
onChange={(e) => setDob(e.target.value)}
value={dob}
className="w-full px-3 py-2 border rounded bg-white text-gray-700 focus:outline-none focus:shadow-outline"
/>
</div>
<button
 style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}
className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4
rounded focus:outline-none focus:shadow-outline"
 onClick={onSubmit}
>
 Save Changes
</button>
</form>
</div>
<div style={{ height: "450px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }} className="p-6 w-full   p-4 rounded-lg bg-white shadow-lg">
<h2 className="text-lg font-medium mb-4">Contact Details</h2>
  <form>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
id="email"
onChange={(e) => setEmail(e.target.value)}
value={email}
className="w-full px-3 py-2 border rounded bg-white text-gray-700 focus:outline-none focus:shadow-outline"
/>
</div>
<div className="mb-4">
<label className="block text-gray-700 font-medium mb-2" htmlFor="mobile">
Mobile
</label>
<input
type="tel"
id="mobile"
onChange={(e) => setMobile(e.target.value)}
value={mobile}
className="w-full px-3 py-2 border rounded bg-white text-gray-700 focus:outline-none focus:shadow-outline"
/>
</div>
<div className="mb-4">
<label className="block text-gray-700 font-medium mb-2" htmlFor="address">
Address
</label>
<input
type="text"
id="address"
onChange={(e) => setAddress(e.target.value)}
value={address}
className="w-full px-3 py-2 border rounded bg-white text-gray-700 focus:outline-none focus:shadow-outline"
/>
</div>

<button
       style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}
       className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4
       rounded focus:outline-none focus:shadow-outline"
        onClick={onSubmit}
      >
        Save Changes
      </button>
</form>
</div>
<div  className="border-gray-200">
      <div>
       <ChangePassword/>
      </div>
     
    </div>

  </div>
</div>
</div>
  );
}
