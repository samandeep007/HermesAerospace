import React, {useState} from 'react'
import Navbar from './StoreNavbar'
import Navbar2 from './storeNavbar2'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'

export default function StoreLogin() 



{
    const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const dispatch = useDispatch();
const {isFetching,error} = useSelector(state=> state.user)

const handleClick = (e) => {
  e.preventDefault();
  login(dispatch, {username, password});
}

  return (
    <>
    <Navbar/>
    <Navbar2/>
    <div id="sections">
    <div id="LoginImage">
        <div id="loginImageText"><p className="text-5xl  mt-4 text-center  font-bold font-medium text-white ">Welcome back!</p>
    <p className="text-xl  mt-4 text-center   font-medium text-white "> Login to access your saved items, exclusive deals, and seamless checkout process. "Experience seamless shopping at your fingertips - log in to unlock a world of exclusive deals and endless possibilities."</p>
    </div>
        <div id="LoginPhoto">
            <img src="Tablet login-amico.png" alt="" />
        </div>

        
{/* <h1 className="text-5xl font-extrabold text-white text-center dark:text-white">Elevate your perspective!</h1> */}


    </div>
  <div id="LoginArea">
 <img src="settings.png" alt="adminLogo" />
 <div className="text-5xl mt-8 text-center font-extrabold text-white dark:text-white">User<small className="ml-2 font-semibold text-white dark:text-gray-400">Login</small></div>

 <div style={{margin: "0 auto"}} className="w-full max-w-sm p-4 shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">
        <div>
            <label for="username" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
            <input type="text" onChange={(e)=> {setUsername(e.target.value)}} name="username" id="username" className="bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="john123" required/>
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
            <input type="password"  onChange={(e)=> {setPassword(e.target.value)}} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                </div>
                <label for="remember" className="ml-2 text-sm font-medium text-white dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="ml-auto text-sm text-white  hover:underline dark:text-white ">Lost Password?</a>
        </div>
        <button id="loginbtn" type="submit" onClick={handleClick} disabled={isFetching} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        {/* {error && <span className="error">
            Something went wrong....
        </span>} */}
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <Link to="/Register" className="text-white  hover:underline dark:text-white ">Create account</Link>
        </div>
    </form>
</div>


  </div>
  </div>
    <Footer/>
    </>
  )
}
