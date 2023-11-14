import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Image from './Image'

export default function Media() {
  return (
    <>
    <Navbar/>
    <div id="media">
        <div id="mediaText">
        <div id="mediaHeading">
            <p className="text-7xl my-10 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-bold font-medium text-white dark:text-white">Know a little more about us</p>
        
        <p className="text-4xl font-bold font-medium text-white dark:text-white">Get actionable data that will help your business to grow.</p>
        <p className="my-4 text-xl text-gray-300">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma. Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma. Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</p>
        </div>
       
   
     
        </div>
        <div id="mediaPic"></div>
        
    </div>
    <div id="headingBanner">
    <h1 className="mb-4 text-6xl text-center my-10 font-bold text-white"><span id="name" className="text-7xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-teal-600 hover:bg-gradient-to-br rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700">Media</span> Showcase</h1>
    </div>
    <div id="mediaContainer">
  <Image imgLink="ufly.jpg"/>
  <Image imgLink="ufly.jpg"/>
  <Image imgLink="ufly.jpg"/>
  <Image imgLink="ufly.jpg"/>
  <Image imgLink="ufly.jpg"/>
  <Image imgLink="ufly.jpg"/>
  <Image imgLink="ufly.jpg"/>
  <Image imgLink="ufly.jpg"/>
  </div>
  <div style={{backgroundColor: "rgb(19, 19, 19)"}} class="w-full p-4 text-center  shadow sm:p-8 ">
    <h5 class="mb-2 text-4xl font-bold text-white dark:text-white"><span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>We hope you enjoyed </span>our Demonstrations</h5>
    <p class="mb-5 text-xl text-white  dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
        <svg aria-hidden="true" class="w-6 h-6 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
            <div class="text-left">
                <div class="mb-1 text-sm">Buy your drone now</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Visit Store</div>
            </div>
        </a>
        <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
        <svg aria-hidden="true" class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <div class="text-left">
                <div class="mb-1 text-sm">Learn More</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Click here</div>
            </div>
        </a>
    </div>
</div>
   <Footer/>
  
    </>
  )
}
