import React, {useState, useEffect} from "react";
import Navbar from './StoreNavbar'
import Navbar2 from './storeNavbar2'
import Footer from './Footer'
import { MdStar, MdStarHalf,MdStarOutline } from "react-icons/md";
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from 'react-icons/io';
import { FaStar, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import {  FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import axios from 'axios'
import { render } from "react-dom";
export default function Product()
{

   const dispatch = useDispatch();
    
    const [product, setProduct] = useState({});


    const [quantity, setQuantity] = useState(1);
    const[reviews, setReviews] = useState([])
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[rating, setRating] = useState("");
    const[email, setEmail] = useState("");
    const[name, setName] = useState("");
   const[images, setImages]= useState("");
   const [activeImageIndex, setActiveImageIndex] = useState(0);

   const reviewData = {
    title: title,
    description: description,
    rating: rating,
    email: email,
    name: name
   }

   useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}/reviews`);
        setReviews(response.data);
       
      } catch (err) {
        console.error(err);
      }
    };
    fetchReviews();
  },);


  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("http://localhost:5000/api/products/find/" + id);
        setProduct(res.data);
        setImages(res.data.images);
      } catch {}
    };
    getProduct();
  }, [id]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}/reviews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        });
    
        const savedReview = await response.json();
        return savedReview;
      } catch (err) {
        console.error(err);
        console.error(err);
        throw new Error("Failed to create review");
      }
    };
  
  
  const fullStars = Math.floor(Number(product.rating));
  const halfStars = Number(product.rating) - fullStars >= 0.5 ? 1 : 0;
  
  
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= product.rating) {
        stars.push(<MdStar style={{fontSize: "2.0rem"}}  className="text-yellow-400 inline-block" key={i} />);
      } else if (i === Math.ceil(product.rating) && product.rating % 1 !== 0) {
        stars.push(<MdStarHalf  className="inline-block" style={{fontSize: "2.0rem"}} key={i} />);
      } else {
        stars.push(<MdStar className="inline-block" style={{fontSize: "2.0rem"}} key={i} color="lightgray" />);
      }
    }
    return stars;
  };
  
 

const handleDecrease = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};

const handleIncrease = () => {
  setQuantity(quantity + 1);
};



const averageRating = product.rating;

  return (
    <>
    <Navbar/>
    <Navbar2/>
    <div  style={{justifyContent: "space-between"}} className="flex">
      {product && (<><div className="bg-white shadow-lg overflow-hidden lg:flex lg:shadow-xl">
  <div className="w-1/2 mt-10 lg:w-1/2">
    <div className="h-96 overflow-hidden">
      <img
        className="w-full h-full object-cover object-center"
        src={images[activeImageIndex]}
        alt={product.name}
        style={{objectFit: "contain"}}
      />
    </div>
    {images.length > 1 && (
      <div className="flex mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            style={{width: "160px", height: "150px"}}
            className={` cursor-pointer mx-2 ${
              activeImageIndex === index ? "border-2 border-green-500" : ""
            }`}
            onClick={() => setActiveImageIndex(index)}
          >
            <img
              className="h-full w-full object-cover object-center"
              src={image}
              style={{objectFit: "contain"}}
              alt={product.name}
            />
          </div>
        ))}
      </div>
    )}
  </div>
  <div className="w-full lg:w-1/2 p-8">
    <h1 className="text-4xl font-bold mb-4 text-gray-800">
      {product.name}
    </h1>
   
    <p style={{fontSize: "17px"}} className="text-gray-700 leading-relaxed mb-6">
      {product.description}
    </p>
    <div className="flex items-center mb-4">
      <span className="text-gray-700  text-lg mr-4">Price:</span>
      <span className="text-green-500 text-2xl font-bold">
        ${product.price}
      </span>
    </div>
    <div className="flex items-center mb-4">
      <span className="text-gray-700 text-lg  mr-4">Availability:</span>
      <span className="text-green-500 font-bold">
        {product.availability}
      </span>
    </div>
    <div className="flex items-center mb-4">
      <span className="text-gray-700 text-lg mr-4">Quantity:</span>
      <div className="flex items-center">
        <button
          onClick={handleDecrease}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3.5 px-4 rounded-l focus:outline-none"
        >
          <FaMinusCircle />
        </button>
        <input
          id="quantitySelector"
          className="bg-gray-100 text-center w-16 py-2.5 px-4"
          style={{border: "none"}}
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          onClick={handleIncrease}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3.5 px-4 rounded-r focus:outline-none"
        >
          <FaPlusCircle />
        </button>
      </div>
    </div>
    <button
       onClick={() => dispatch(addProduct({
        id: product._id,
        name: product.name,
        price: product.price,
        quantity
      }))}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
    >
      Add to Cart
    </button>
  </div>
</div>

<div  className="bg-white shadow-md p-8 ">
  
<h2 className="text-2xl font-bold text-gray-800 mb-6">Product Reviews</h2>
  {reviews.length === 0 && (
    <p>No reviews yet</p>
  )}
  {reviews.length > 0 && (
    <div  style={{justifyContent: "space-between"}} >
      <div className="block mb-2">
        <div style={{marginTop: "-10px"}} className="font-medium text-8xl text-gray-800 mr-2">{averageRating.toFixed(1)}<span className="text-4xl">/ 5</span> </div>
        <div className="flex mt-3">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <div key={index}>
                {averageRating >= ratingValue ? (
                  <MdStar className="w-8 h-8 text-yellow-500" />
                ) : averageRating >= ratingValue - 0.5 ? (
                  <MdStarHalf className="w-8 h-8 text-yellow-500" />
                ) : (
                  <MdStarOutline className="w-8 h-8 text-yellow-500" />
                )}
              </div>
            );
          })}
        </div>
        <div className="text-sm mt-2 text-gray-600 ml-2">({reviews.length} reviews)</div>
      </div>
      <div>
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          const count = reviews.filter(review => Math.floor(review.rating) === ratingValue).length;
          return (
            <div key={index} className="flex items-center mb-2">
              <div className="w-6 font-medium text-gray-800 mr-2">{ratingValue} star{ratingValue > 1 && 's'}</div>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => {
                  return (
                    <div key={index}>
                      {ratingValue >= index + 1 ? (
                        <MdStar className="w-8 h-8 text-yellow-500" />
                      ) : (
                        <MdStarOutline className="w-8 h-8 text-yellow-500" />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="text-sm text-gray-600 ml-2">({count})</div>
            </div>
          );
        })}
      </div>
      <hr className="my-6" />
      </div>
       )}</div>
</>)}
</div>








{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}



<hr/>
<div className="flex content-between">
<div  style={{flex: "3"}} className="bg-white  shadow-md p-6 ">
<h2 className="text-2xl font-medium mb-4">Customer Reviews</h2>
{reviews.length === 0 && (
    <p>No reviews yet</p>
  )}
  {reviews.map((review, index) => (
    <div key={review._id} className="border-b pb-6 mb-6">
      <div className="flex items-center mb-2">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
          <img className="w-full h-full object-cover" src={`https://ui-avatars.com/api/?name=${review.user.name}`} />
        </div>
        <div>
         
          <h3 className="text-lg font-medium text-gray-800">{review.user.name}</h3>
          <h3 className="text-xl font-medium text-gray-800">{review.title}</h3>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <div key={index}>
                  {review.rating >= ratingValue ? (
                    <FaStar className="w-5 h-5 text-yellow-500" />
                  ) : review.rating >= ratingValue - 0.5 ? (
                    <FaStarHalfAlt className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <FaRegStar className="w-5 h-5 text-yellow-500" />
                  )}
                </div>
              );
            })}
            <span className="text-sm text-gray-600 ml-2">({review.rating})</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-justify mb-4">{review.description}</p>
    </div>
  ))}
</div>
     
       
        <div className="bg-white w-1/4 shadow  p-8">
  <h2 className="text-2xl font-medium mb-4">Write a Review</h2>
  <form style={{width: "450px"}} onSubmit={handleSubmit} className=" gap-6">
  <span>
    <div className="block">  
      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
        Review Title
      </label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded-lg w-full py-2 px-3 text-sm text-gray-700 mb-2"
        placeholder="Enter a title for your review"
      />
    </div>
    <div className="col-span-4 sm:col-span-4">
      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
        Review Description
      </label>
      <textarea
        name="description"
        id="description"
        rows="4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{height: "200px"}}
        className="border border-gray-300 rounded-lg w-full py-2 px-3 text-sm text-gray-700 mb-2"
        placeholder="Enter a detailed description of your review"
      ></textarea>
    </div>
    </span>
    <div className="col-span-2 sm:col-span-1">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Your Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-lg w-full py-2 px-3 text-sm text-gray-700 mb-2"
        placeholder="Enter your name"
      />
    </div>
    <div className="col-span-2 sm:col-span-1">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
        Your Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-lg w-full py-2 px-3 text-sm text-gray-700 mb-2"
        placeholder="Enter your email address"
      />
    </div>
    <div className="col-span-2 sm:col-span-1">
      <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
        Rating
      </label>
      <div className="flex items-center">
        <input
          type="number"
          name="rating"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          step="0.5"
          className="border border-gray-300 rounded-lg w-16 py-2 px-3 text-sm text-gray-700 mr-2"
        />
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              {index < Math.floor(Number(rating)) ? (
                <MdStar className="text-yellow-400 w-8 h-8" />
) : index < Math.ceil(Number(rating)) ? (
<MdStarHalf className="text-yellow-400 w-8 h-8"  />
) : (
<MdStarOutline className="text-gray-500 w-8 h-8" />
)}
</span>
))}
</div>
</div>
</div>
<div className="col-span-2">
<button type="submit" className="bg-blue-500 mt-4 hover:bg-blue-600 text-white rounded-lg py-2 px-4 text-sm font-medium">
Submit Review
</button>
</div>

  </form>
</div>
</div>


<Footer/>

    </>
  )
}