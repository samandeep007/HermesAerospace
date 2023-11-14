import React, {useEffect, useState} from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "../../node_modules/swiper/modules/navigation/navigation.min.css";
import "../../node_modules/swiper/modules/pagination/pagination.min.css";
import StoreCard from "./ProductCard";
import axios from 'axios'

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ProductSlider = () => {

const[products, setProducts]=useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products`);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  },);



  return (
    <div style={{backgroundColor: "white"}} className="py-2 px-2 md:px-6">
      <div className="max-w-10xl mx-auto">
      <Swiper
  spaceBetween={5}
  slidesPerView={3}
  loop={true}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
  autoplay={{ delay: 5000 }}
  className="overflow-x-auto swiper-container"
>
  {products.map((item, index) => (
    <SwiperSlide key={index} className="swiper-slide">
    <StoreCard textColor="black" bgColor="white" name={item.name} height="300px" _id={item._id} description={item.description} image={item.images[1]} rating={item.rating} reviews={item.reviews.length} availability={item.availability} price={item.price} regularPrice={item.regularPrice} key={item._id} />
    </SwiperSlide>
  ))}
  <div className="swiper-button-next"></div>
  <div className="swiper-button-prev"></div>
</Swiper>


      </div>
    </div>
  );
};

export default ProductSlider;
