
// import React, { useState } from "react";

// export default function TextCard() {

    
//   const [isHovered, setIsHovered] = useState(false);

//     const handleMouseEnter = () => {
//         setIsHovered(true);
//       };
    
//       const handleMouseLeave = () => {
//         setIsHovered(false);
//       };

//   return (
//     <>
//     <div id="newProductCard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

//         <div id="productImgContainer">
//             <div id="imgPlaceholder"></div>
//         </div>

//         <div className="p-3">
//         <h3 className={`text-${props.headingColor} text-center text-2xl font-bold`}>{props.name}</h3>
//           <p className={`mt-2 text-${props.textColor} text-center text-md`}>  {props.description && props.description.slice(0, 120) + '...'}</p>
//           <div className="mt-4 flex items-center justify-between">
//             <div className="flex items-center">
//               <div className="flex items-center mr-2">
//               {renderStars()}
//               </div>
//               <div className={`text-sm text-${props.textColor}`}>{props.reviews} reviews</div>
//             </div>
//             <div className="flex items-center">
//               <div className={`text-${props.textColor} text-sm line-through mr-2`}>{props.regularPrice}</div>
//               <div className="text-green-400 text-2xl font-semibold">${props.price}.00</div>
//             </div>

//           </div>
//     </div>
    
//     </>
//   )
// }
