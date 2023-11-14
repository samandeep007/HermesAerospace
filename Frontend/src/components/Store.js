import React , { useState, useEffect} from 'react'
import StoreNavbar from './StoreNavbar'
import Footer from './Footer'
import StoreNavbar2 from './storeNavbar2';
import OfferModal from './OfferModal'
import { Link } from 'react-router-dom';
const texts = ["BUILD", "FLY", "SELL",];


const Store = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const text = texts[currentTextIndex];
    const timeoutId = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(text.substring(0, currentText.length + 1));
      } else {
        setCurrentText(text.substring(0, currentText.length - 1));
      }
    }, typingSpeed);

    if (currentText === text && !isDeleting) {
      setTypingSpeed(500);
      setIsDeleting(true);
    } else if (currentText === '' && isDeleting) {
      setIsDeleting(false);
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      setTypingSpeed(200);
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentTextIndex, typingSpeed]);

  return (
    <>
    <StoreNavbar/>
    <OfferModal
        title="Special Offer"
        content="Get 20% off on your first purchase. Use code FIRST20 at checkout."
        show={showModal}
        onClose={handleCloseModal}
      />
    {/* <div id="Wrapper">
      <div id="textEffect">
    <p className="text-4xl my-1  font-bold font-medium text-white dark:text-white">{currentText}</p>
    
    </div>
      <div id="Cursor"/>

    
      </div> */}
      
      <div id="storeFront">
      <StoreNavbar2/>
        <div id="storeText">
        <p style={{fontSize: "85px", marginTop: "15px"}} className="text-7xl  px-5 font-bold font-medium text-white dark:text-white">EASY ONLINE</p>
        <p style={{color: "rgb(96 180 105)", fontSize: "65px"}} className="text-6xl ml-4 pt-3   font-bold font-medium">DRONE SHOPPING</p>
        <p className="text-xl my-4  px-5 font-bold font-medium text-white dark:text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa iure hic facere praesentium ipsam sint iusto laudantium debitis nobis unde.</p>
     
        <div className="triangle"></div>
        </div>

        <div id="storePic">
          <div className="slanted-container"></div>
          <img className='avatar' src="store4.png" alt="" />
     
          {/* <img className='d2' src="drone (19).png" alt="" /> */}
          <img className='d3' src="drone (17).png" alt="" />
          <img className='d4' src="drone (19).png" alt="" />
          <img className='d5' src="drone (18).png" alt="" />
          <img className='d6' src="drone (17).png" alt="" />
          {/* <img className='d7' src="highlight.png" alt="" /> */}
          <img className='d8' src="drone (18).png" alt="" />
          <img className='d12' src="drone (19).png" alt="" />
          {/* <img className='d9' src="cloud.png" alt="" /> */}
          {/* <img className='d10' src="highlight.png" alt="" />
          <img className='d11' src="highlight (1).png" alt="" />  */}
          {/* <img className='d12' src="cloud.png" alt="" /> */}
          <img className='d14' src="highlight.png" alt="" />
          <img className='d15' src="highlight (1).png" alt="" />
          <img className='d16' src="highlight (1).png" alt="" /> 
           {/* <img className='d9' src="highlight (1).png" alt="" /> */}
           <img className='d11' src="highlight.png" alt="" />
           {/*<img className='d9' src="highlight.png" alt="" /> */}
          {/* <img className='d7' src="cloud.png" alt="" />
        
          <img className='d10' src="cloud.png" alt="" />
          <img className='d11' src="cloud.png" alt="" /> */}
          {/* <img className='d12' src="highlight.png" alt="" />
        */}
        </div>
        
      </div>


      <section id="storeBanner">
  
      <p style={{position: "relative", margin: "0 auto", top: "-30px"}} className="text-5xl text-center  font-bold font-medium text-white dark:text-white">WE AT HERMES <span style={{color: "#4f8c4c"}}> {currentText} </span>WORLD-CLASS DRONES</p>
      </section>


<section id="banners">
  <div id="banner1">
    <p style={{fontSize: "25px"}}className="text-white text-3xl mt-10 pl-10 text-xl font-bold">GEOGRAPHICAL</p>
    <p style={{fontSize: "25px"}} className="text-white  text-3xl pl-10 text-xl font-bold">MAPPING</p>
  </div>
  <div id="banner2">
  <p style={{marginLeft: "260px", color: "rgb(15, 111, 42)"}} className="text-white text-3xl mt-10 pl-10 text-xl font-bold">AERIAL</p>
  <p style={{marginLeft: "260px", fontSize: "25px", color: "rgb(15, 111, 42)"}} className="text-white  text-3xl pl-10 text-xl font-bold">PHOTOGRAPHY</p>
  </div>
  <div id="banner3">
  <p style={{fontSize: "25px"}} className="text-white text-3xl mt-10 pl-10 text-xl font-bold">DRONE</p>
  <p style={{fontSize: "25px"}} className="text-white  text-3xl pl-10 text-xl font-bold">DELIVERY</p>
  </div>
</section>

<section id="featureBanners">
  <div id="featuresRow1">
  <div id="banner04">
  <p style={{fontSize: "25px", marginTop: "60px"}}className="text-white text-3xl mt-4 pl-10 text-xl font-bold">BEST PRICES,</p>
    <p style={{fontSize: "25px"}} className="text-white  text-3xl pl-10 text-xl font-bold">HAPPY CUSTOMERS</p>
    <p style={{width: "350px"}} className="text-white text-lg mt-4 pl-10 text-lg font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ad dolorum voluptate, enim ut magni error. Inventore quisquam nam vitae!</p>
  </div>
  <div id="banner05">
  <p style={{fontSize: "25px", marginTop: "60px"}}className="text-white text-3xl mt-4 pl-10 text-xl font-bold">FAST DELIVERY</p>
    <p style={{fontSize: "25px"}} className="text-white  text-3xl pl-10 text-xl font-bold">THROUGHOUT CANADA</p>
    <p style={{width: "350px"}} className="text-white text-lg mt-4 pl-10 text-lg font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ad dolorum voluptate, enim ut magni error. Inventore quisquam nam vitae!</p>
  </div>
  </div>

  <div id="featuresRow1">
  <div id="banner6">
  <p style={{fontSize: "25px", marginTop: "60px"}}className="text-white text-3xl mt-4 pl-10 text-xl font-bold">WIDE RANGE OF</p>
    <p style={{fontSize: "25px"}} className="text-white  text-3xl pl-10 text-xl font-bold">DRONES TO CHOOSE FROM</p>
    <p style={{width: "350px"}} className="text-white text-lg mt-4 pl-10 text-lg font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ad dolorum voluptate, enim ut magni error. Inventore quisquam nam vitae!</p>
  </div>
  <div id="banner7">
  <p style={{fontSize: "25px", marginTop: "60px"}}className="text-white text-3xl mt-4 pl-10 text-xl font-bold">SAFE AND SECURE</p>
    <p style={{fontSize: "25px"}} className="text-white  text-3xl pl-10 text-xl font-bold">PAYMENT OPTIONS</p>
    <p style={{width: "350px"}} className="text-white text-lg mt-4 pl-10 text-lg font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ad dolorum voluptate, enim ut magni error. Inventore quisquam nam vitae!</p>
  </div>
  </div>
</section>





{/* <section className="marqueeText">
<div className="marquee">

<div className="marquee-item">
<p className="text-2xl pt-10 text-center  font-bold font-medium text-white dark:text-white"> <span className='marqueeOffer'> BLACK FRIDAY SALE </span> IS LIVE NOW!! BUY YOUR DRONE TODAY AND GET 50% OFF </p>
</div>

<div className="marquee-item">
<p className="text-2xl pt-10 text-center  font-bold font-medium text-white dark:text-white"> <span className='marqueeOffer'> BLACK FRIDAY SALE </span> IS LIVE NOW!! BUY YOUR DRONE TODAY AND GET 50% OFF</p>
</div>

<div className="marquee-item">
<p className="text-2xl pt-10 text-center  font-bold font-medium text-white dark:text-white"><span className='marqueeOffer'> BLACK FRIDAY SALE </span> IS LIVE NOW!! BUY YOUR DRONE TODAY AND GET 50% OFF</p>
</div>


</div>
</section> */}


<section id="categories">
  <div id="banner8">
  <p style={{fontSize: "30px", marginTop: "150px", marginLeft: "-15px"}}className="text-white text-4xl mt-4 pl-10 text-xl font-bold">CATEGORY 1</p>
  <Link to="/products/cat1">
  <button type="button" class="focus:outline-none text-xl text-white bg-gray-900 hover:bg-gray-900 focus:ring-4 focus:ring-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">EXPLORE</button>
  </Link>
  </div>
  <div id="banner9">
  <p style={{fontSize: "30px", color: "#06253f", fontFamily: "#06253f", marginTop: "150px"}}className="text-white text-4xl mt-4 pl-10 text-xl font-bold">CATEGORY 2</p>
  <Link to="/products/cat2">
  <button type="button" class="focus:outline-none text-xl text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">EXPLORE</button>
  </Link>
  </div>
  <div id="banner10">
  <p style={{fontSize: "30px", marginTop: "150px"}}className="text-white text-4xl mt-4 pl-10 text-xl font-bold">CATEGORY 3</p>
  <Link to="/products/cat3">
  <button type="button" class="focus:outline-none text-xl text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-800 dark:hover:bg-blue-800 dark:focus:ring-blue-800">EXPLORE</button>
  </Link>
  </div>
</section>

<div id="storeFooter">
<span style={{fontFamily: "Great Vibes", fontSize: "120px", color: "lightblue", display: "inline-block"}}>What</span>
<p  style={{display: "inline-block", marginLeft: "25px"}} className="text-5xl py-10  my-8 text-center  font-bold font-medium text-white "> <span style={{color: "lightblue"}}>YOU SEE </span>IS WHAT YOU GET</p>
<img src="medal.png" alt="" />
</div>



    <Footer/>
    </>
  );
};

export default Store;