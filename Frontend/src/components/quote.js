import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link} from 'react-router-dom'

export default function quote() {
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
            <p style={{fontSize: "42px", lineHeight: "50px"}} className=" ml-4 pt-4 text-center text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400  font-bold font-medium text-gray-300 dark:text-white">Choose an option to continue</p>
            <p className="text-2xl ml-4 mt-3  text-center font-medium text-white dark:text-white">We'd love to help you with your drone needs</p>

              <div id="quote1">
               <img src="data-collection (2).png" alt="" />
             <Link to="/data"> <p style={{fontSize: "42px", lineHeight: "50px"}} className=" ml-4 pt-4 text-center text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400  font-bold font-medium text-gray-300 dark:text-white"><span className='text-white '>Data Collection</span> </p></Link>
             

              </div>
              <div id="quote2">
              <img src="smart-drone.png" alt="" />
              <Link to="/photography"> <p style={{fontSize: "42px", lineHeight: "50px"}} className=" ml-4 pt-4 text-center text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400  font-bold font-medium text-gray-300 dark:text-white"><span className='text-white '>Aerial Photography</span> </p></Link>

              </div>
            </div>
        </div>
    </div>
    <Footer/>      
    </>
  )
}
