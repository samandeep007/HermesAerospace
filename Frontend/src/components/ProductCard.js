import React, { useState} from "react";
import { HiOutlineShoppingCart, HiOutlineEye, HiOutlineHeart } from "react-icons/hi";
import { MdStar, MdStarHalf } from "react-icons/md";
import { Link } from "react-router-dom";


const ProductCard = (props) => {

  const [isHovered, setIsHovered] = useState(false);
  const [rating, setRating] = useState(0);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const fullStars = Math.floor(Number(props.rating));
  const halfStars = Number(props.rating) - fullStars >= 0.5 ? 1 : 0;
  
 

  const renderStars = () => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= props.rating) {
      stars.push(<MdStar style={{fontSize: "1.5rem"}}  className="text-yellow-400" key={i} />);
    } else if (i === Math.ceil(props.rating) && props.rating % 1 !== 0) {
      stars.push(<MdStarHalf key={i} />);
    } else {
      stars.push(<MdStar style={{fontSize: "1.5rem"}} key={i} color="lightgray" />);
    }
  }
  return stars;
};


 
  ;

  return (
    <div className="p-1 swiper-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div style={{backgroundColor: `${props.bgColor}`, boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="relative  dark:bg-gray-800   overflow-hidden transform transition-transform hover:scale-105">
        <div className="absolute top-0 right-0 px-2 py-1 bg-yellow-400 text-white font-semibold text-sm">Latest Product</div>
        <div style={{width: "100%", height: `${props.height}`, backgroundColor: "#efefef", objectFit: "contain"}}>
        <img style={{objectFit: "contain"}} src={props.image} alt={props.name} className="h-40 sm:h-36 w-full" />
        </div>
        {isHovered && (
         
            <div id="hoverCard" className="absolute inset-0 bg-black opacity-40 flex items-center justify-center">

               <Link to={`/product/${props._id}`}  rel="noopener noreferrer">
              <HiOutlineEye style={{ marginTop: "-100px", width: "40px", height: "40px",  backgroundColor: "white", borderRadius: "50%", padding: "10px"}} className="text-black text-4xl" />
              </Link>
              <Link to="/" target="_blank" rel="noopener noreferrer">
              <HiOutlineShoppingCart style={{ marginTop: "-100px", width: "40px", height: "40px", marginLeft: "20px", backgroundColor: "white", borderRadius: "50%", padding: "10px"}} className="text-black text-4xl" />
              </Link>
              <Link to="/" target="_blank" rel="noopener noreferrer">
              <HiOutlineHeart style={{ marginTop: "-100px", width: "40px", height: "40px", marginLeft: "20px", backgroundColor: "white", borderRadius: "50%", padding: "10px"}} className="text-black text-4xl" />
              </Link>
            </div>

        )}
        <div className="p-3">
        <h3 className={`text-${props.headingColor} text-center text-2xl font-bold`}>{props.name}</h3>
          <p className={`mt-2 text-${props.textColor} text-center text-md`}>  {props.description && props.description.slice(0, 120) + '...'}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center mr-2">
              {renderStars()}
              </div>
              <div className={`text-sm text-${props.textColor}`}>{props.reviews} reviews</div>
            </div>
            <div className="flex items-center">
              <div className={`text-${props.textColor} text-sm line-through mr-2`}>{props.regularPrice}</div>
              <div className="text-green-400 text-2xl font-semibold">${props.price}.00</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;



