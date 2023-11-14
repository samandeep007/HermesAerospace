import React, { useState } from 'react'
import axios from 'axios'
import Navbar from './StoreNavbar'
import Navbar2 from './storeNavbar2'
import Footer from './Footer'

export default function StoreLogin() {

const[username, setUsername] = useState("");
const[name, setName] = useState("");
const[email, setEmail] = useState("");
const[password, setPassword] = useState("");


const user = {
  username: username,
  name: name,
  email: email,
  password: password
 }

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(user);

  axios.post(`http://localhost:5000/api/auth/register`, user)
    .then(res => console.log(res.data));

    window.location.location="/signin";
}


  return (
    <>
    <Navbar/>
    <Navbar2/>
    <div id="sections">
    <div id="SignupImage">
        <div id="SignupImageText"><p className="text-5xl  mt-4 text-center  font-bold font-medium text-white ">Register & shop with ease!</p>
    <p className="text-xl  mt-4 text-center   font-medium text-white "> "Unlock endless shopping possibilities - Register now and get exclusive access to our world of products and amazing deals!"</p>
    </div>
        <div id="SignupPhoto">
            <img src="Sign up-amico.png" alt="" />
        </div>

        
{/* <h1 className="text-5xl font-extrabold text-white text-center dark:text-white">Elevate your perspective!</h1> */}


    </div>
  <div id="SignupArea">
 <div className="text-5xl mt-8 text-center font-extrabold text-white dark:text-white">User<small className="ml-2 font-semibold text-white dark:text-gray-400">Signup</small></div>

 <div style={{margin: "0 auto"}} className="w-full max-w-sm p-4 shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">
    <div>
            <label for="fullname" className="block mb-2 text-sm font-medium text-white dark:text-white">Your full name</label>
            <input type="text" onChange={(e) => {setName(e.target.value)}} name="fullname" id="fullname" className="bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
        </div>
        <div>
            <label for="username" className="block mb-2 text-sm font-medium text-white dark:text-white">Your Username</label>
            <input type="text" onChange={(e) => {setUsername(e.target.value)}}  name="username" id="username" className="bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
        </div>
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
            <input type="email" onChange={(e) => {setEmail(e.target.value)}} name="email" id="email" className="bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
            <input type="password" onChange={(e) => {setPassword(e.target.value)}} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
        <div>
            <label for="confirm_password" className="block mb-2 text-sm font-medium text-white dark:text-white">Confirm your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                </div>
                <label for="remember" className="ml-2 text-sm font-medium text-white dark:text-gray-300">Remember me</label>
            </div>
          
        </div>
        <button type="submit" onClick={handleSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register your account</button>
        
    </form>
</div>


  </div>
  </div>
    <Footer/>
    </>
  )
}
