import React from 'react'
import Features from './Features'
import Navbar1 from './Navbar1'
import Slideshow from './Slideshow'
import Testimonials from './Testimonials'
import Landing from './Landing'
import Servicescard from './Servicescard'
import Abouttext from './Abouttext'
import Footer from './StoreFooter'
import Subscribe from './Subscribe'
import AboutPage from './AboutPage'
import Numbers from './Numbers'
import TestimonialSlider from './Testimonials'
import { FaCalendarCheck, FaPlane } from "react-icons/fa";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FiMap } from "react-icons/fi";
import ImageCarousel from './ImageCarousel'

export default function Main() {
  return (
    <>
    {/* <div id="header"></div> */}
   <Navbar1/>

<Landing/>






<AboutPage/>
<ImageCarousel/>
<div id="storeFooter2">
<span style={{fontFamily: "Great Vibes", fontSize: "100px", color: "lightblue", display: "inline-block"}}>Quality</span>
<p  style={{display: "inline-block", marginLeft: "25px"}} className="text-5xl py-10  my-8 text-center  font-bold font-medium text-white "> <span style={{color: "lightblue"}}>IS WHAT </span>MAKES US DIFFERENT</p>
<img src="premium-badge.png" alt="" />
</div>
<Servicescard/>
{/* <div style={{background: "rgb(12,12,12)"}} class="py-16 px-4 py-2 sm:px-6 lg:px-8">
  <div class="max-w-8xl mx-auto flex flex-col sm:flex-row items-center justify-between h-full">
    <div class="sm:w-1/2 flex items-center">

      <div>
        <h2 style={{fontSize: "45px"}} class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-bold mt-8 ml-3 tracking-tight  sm:text-4xl">
          Book an appointment with us!
        </h2>
        <p class="text-xl text-gray-300 ml-3 sm:text-left mb-8">
          Get in touch with us to schedule a drone flight today.
        </p>
      </div>
    </div>
    <a href="#" class="inline-block border border-gray-300 border-solid py-3 px-5 rounded-lg text-lg font-medium text-white font-bold  px-4 py-4 hover:bg-gray-100 hover:text-gray-900 sm:ml-4">
  Book now
</a>


  </div>
</div> */}






<div id="text2">
<section class="bg-gray-900 dark:bg-gray-900">
    <div class="gap-12 items-center py-2 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-white sm:text-lg dark:text-gray-400">
            <h2 style={{fontSize: "42px"}} class="mb-4 mr-6 text-white tracking-tight font-bold dark:text-white">We didn't reinvent the wheel</h2>
            <p class="mb-4 text-xl text-white text-justify mr-6" >We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p class="mb-4 text-xl mr-6 text-white text-justify" >We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img class="mt-7 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
    </div>
</section>
</div>
<Abouttext/>



{/* <Shorttext/> */}


{/* 
<Features/> */}

<Testimonials/>

<div id="whiteFooter">
    <div id="footerText">
    <p className="text-4xl font-bold font-medium text-white dark:text-white">Ready to get started?</p>
    <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-bold font-medium text-white dark:text-white">Get in touch or visit our drone store</p>
    <div id="footerButtons">
    <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-3 text-center mr-2 mb-2">Get a quote</button>
    <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-3 text-center mr-2 mb-2">Visit Store</button>
    </div>
    </div>
</div>


<Footer/>
    </>
  )
}
