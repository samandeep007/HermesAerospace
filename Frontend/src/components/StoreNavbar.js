import React from 'react'
import { Link } from 'react-router-dom'
import { HiShoppingCart, HiEye, HiLogin } from "react-icons/hi";
import { Badge, IconButton } from '@mui/material';
import {ShoppingCartIcon, ShoppingCartOutlined} from '@mui/icons-material';
import { useSelector } from 'react-redux';


import { useEffect, useState } from 'react';


export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const admin = useSelector((state) => state.user.currentUser);
  const quantity = useSelector(state=>state.cart.quantity);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <nav
    style={isSticky ?{backgroundColor: "black"} : {}}
      className={`${
        isSticky ? 'fixed top-0 z-10 left-0 right-0 shadow-md' : ''
      } bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900`}
    >

  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://flowbite.com/" className="flex items-center">
    
      <span className="self-center text-xl text-lg font-semibold whitespace-nowrap text-white">Hermes Aerospace | <span className='font-bold' style={{color: "rgb(109 205 104)"}}> DRONE STORE </span></span>
  </a>
  <div style={{marginLeft: "40px"}} className="flex md:order-2">
    <Link to="/signin">
      <button style={{width:"13s0px", fontSize: "15px"}}  type="button" className="text-white  text-md bg-transparent  rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg text-sm py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><HiLogin className="mr-1 inline-block" />{admin ? "User Dashboard" : "Login / Register" }</button>
      </Link>
      
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    </div>
  

    <div className="flex md:order-2">
      <Link to="/cart">
      <button style={{width:"150px", fontSize: "15px"}} type="button" className="text-white  bg-transparent  rounded-lg  dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">   <IconButton aria-label="cart">
  <Badge badgeContent={quantity} color="primary">
  
    <ShoppingCartOutlined style={{color: "white"}}/>
  </Badge>
</IconButton> My Cart</button>
</Link>
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    </div>
    
 
 
<form class="flex items-center py-15">   
    <label for="simple-search" class="sr-only text-white">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input style={{width: "700px", backgroundColor: "white"}} type="text" id="simple-search" class="border  border-gray-200 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
    </div>
    <button style={{background: "#4f8c4c", width: "110px", marginLeft: "-2px"}} type="submit" class="p-2.5 ml-2 text-sm font-medium text-white  rounded-lg border border-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      <p style={{fontSize: "14px", marginLeft: "5px"}} class= "inline-block">Search</p>
        <span class="sr-only ">Search</span>
    </button>
</form>

  </div>
</nav>
    </>
  )
}
