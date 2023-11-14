import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  autoplay: true,         // add autoplay prop
  autoplaySpeed: 3000, 
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const ImageCarousel = () => {
  const sliderRef = React.useRef(null);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };


  const images= [
    {
      "id": 1,
      "url": "https://picsum.photos/800/600?random=1",
      "alt": "Image 1"
    },
    {
      "id": 2,
      "url": "https://picsum.photos/800/600?random=2",
      "alt": "Image 2"
    },
    {
      "id": 3,
      "url": "https://picsum.photos/800/600?random=3",
      "alt": "Image 3"
    },
    {
      "id": 4,
      "url": "https://picsum.photos/800/600?random=4",
      "alt": "Image 4"
    },
    {
      "id": 5,
      "url": "https://picsum.photos/800/600?random=5",
      "alt": "Image 5"
    },
    {
      "id": 6,
      "url": "https://picsum.photos/800/600?random=6",
      "alt": "Image 6"
    }
  ]


  return (
    <div className="pt-2 pb-2 max-w-8xl mx-auto relative">
      <Slider {...settings} ref={sliderRef}>
        {images.map((img) => (
          <div key={img.id} className="p-2">
            <img
              className="h-64 rounded-lg shadow-md"
              src={img.url}
              alt={img.alt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;