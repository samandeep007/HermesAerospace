import React, { useState } from 'react'
import Navbar from './StoreNavbar'
import Navbar2 from './storeNavbar2'
import Footer from './Footer'
import Products from './Products'
import { useLocation } from 'react-router-dom'

export default function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  console.log(location.pathname)
  const [filter, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
  const value = e.target.value;
  setFilters({
    ...filter,
    [e.target.name]: value
  })
  }

  console.log(filter)
  console.log(sort)
  return (
    <>
    <Navbar/>
    <Navbar2/>
 <div style={{backgroundColor: "#f1f1f1"}}>
    <h1  className="Title text-black font-medium" >All<span className=''> Drones</span></h1>
    <div className="FilterContainer">
    <div className="Filter">
        <span className="FilterText">Filter : </span>
        <select className="FilterSelect" name='price' onChange={handleFilters}>
        <option className='FilterOption' value="">Price Range</option>
            <option className='FilterOption' value="under1K">$100 - $1000</option>
            <option className='FilterOption' value="under3K">$1000 - $3000</option>
            <option className='FilterOption' value="under5K">$3000 - $5000</option>
            <option className='FilterOption' value="under10K">$5000 - $10000</option>
        </select>
    </div>
    <div className="Filter">
        <span className="FilterText">Sort By: </span>
        <select className="FilterSelect" onChange={((e) => {setSort(e.target.value)})}>
        <option disabled className='FilterOption' value="under1K">Criteria</option>
            <option className='FilterOption' value="newest">Newest</option>
            <option className='FilterOption' value="ascending">Price (Asc)</option>
            <option className='FilterOption' value="descending">Price (Desc)</option>
        </select>
    </div>
   </div>
   <Products cat={cat} filters={filter} sort={sort}/>
   <div id="storeFooter">
<span style={{fontFamily: "Great Vibes", fontSize: "120px", color: "lightblue", display: "inline-block"}}>What</span>
<p  style={{display: "inline-block", marginLeft: "25px"}} className="text-5xl py-10  my-8 text-center  font-bold font-medium text-white "> <span style={{color: "lightblue"}}>YOU SEE </span>IS WHAT YOU GET</p>
<img src="medal.png" alt="" />
</div>
</div>
    <Footer/>
    </>
  )
}
