import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum massa vel velit faucibus, sit amet vulputate elit venenatis. Fusce venenatis lacinia enim, sed viverra elit pellentesque quis. Donec euismod mi vel leo elementum, ut gravida nisi dapibus.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    position: "CEO, XYZ Corporation",
    location: "Toronto, CA"
  },
  {
    id: 2,
    name: "Jane Doe",
    testimonial:
      "Praesent finibus enim id est faucibus blandit. Fusce eget eleifend justo. Ut in ipsum vel dolor consectetur bibendum vitae ac ante. Nulla ut quam a purus dictum iaculis vel at nulla. Sed commodo risus in sem bibendum, eget sagittis quam tristique. Nullam pharetra consequat mauris at convallis.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    position: "Marketing Director, ABC Inc.",
    location: "Toronto, CA"
  },
  {
    id: 3,
    name: "Bob Smith",
    testimonial:
      "Maecenas commodo nulla at vestibulum imperdiet. Proin malesuada leo enim, eu aliquet tellus commodo vitae. Nam ullamcorper feugiat leo, eu venenatis lectus dignissim vitae. Morbi interdum enim eu dolor hendrerit, vel venenatis eros feugiat. Ut eget bibendum libero. ",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    position: "CTO, Acme Corp.",
    location: "Toronto, CA"
  },
  {
    id: 4,
    name: "Alice Johnson",
    testimonial:
      "Suspendisse vitae arcu eget sapien pulvinar aliquam. Nam rutrum, felis ut finibus semper, arcu turpis volutpat mauris, et finibus arcu ipsum non urna. Etiam id ante nunc. Aliquam tristique ipsum quis lacus euismod, in hendrerit lectus vestibulum. Duis at maximus lectus. Donec auctor gravida nibh, in blandit nisi dictum in.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    position: "Creative Director, XYZ Corp.",
    location: "Toronto, CA"
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
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

  return (
    <section className="bg-gray-900 py-8">
      <div className="max-w-8xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white sm:text-4xl">
            What our customers are saying
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in, accusamus quisquam.
          </p>
        </div>
        <div className="mt-10">
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index}>
                <div className="mx-4">
                  <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium leading-6 text-gray-900">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm leading-5 text-gray-700">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 text-lg leading-7 text-gray-700">
                        <p>{testimonial.testimonial}</p>
                      </div>
                    </div>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        <a href={testimonial.avatar} className="hover:underline">
                          {testimonial.company}
                        </a>
                      </div>
                      <div className="text-sm leading-5 text-gray-700">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
