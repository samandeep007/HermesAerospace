import { ShoppingBag } from '@mui/icons-material';
import React from 'react';
import { FaCogs, FaDrone, FaTruck, FaLaptopCode, FaShoppingCart } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaTruck class="h-12 w-12" />,
    title: 'Custom Drone Design',
    description: 'Let our team of experienced designers create a custom drone that meets your unique needs. From concept to prototype, we\'ll work with you every step of the way to deliver a product that exceeds your expectations.',
    link: '#',
  },
  {
    icon: <FaShoppingCart class="h-12 w-12" />,
    title: 'Drone Delivery',
    description: 'Our drone delivery service is fast, reliable, and affordable. We\'ll get your package where it needs to go in record time. From concept to prototype, we\'ll work with you every step of the way to deliver a product that exceeds your expectations.',
    link: '#',
  },
  {
    icon: <FaLaptopCode class="h-12 w-12" />,
    title: 'Drone Software Development',
    description: 'Our team of software developers can create custom software to help you get the most out of your drone. From flight planning to data analysis, we\'ve got you covered.',
    link: '#',
  },
  {
    icon: <FaCogs class="h-12 w-12" />,
    title: 'Drone Maintenance and Repair',
    description: 'Keeping your drone in top condition is essential for safe and effective operation. Let our team of experts handle your drone maintenance and repair needs.',
    link: '#',
  },
];

export default function Services() {
  return (
    <section className="pt-4 pb-8">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-6 text-xl leading-6 text-gray-300">
            We offer a range of drone services to meet your needs.
          </p>
        </div>
        <div className="mt-8">
          <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service, index) => (
             <div key={index} className="bg-gradient-to-br from-teal-500 to-green-500 rounded-lg shadow-lg p-6 transform hover:-translate-y-2 transition duration-500 hover:bg-gray-900 text-center">
             <div className=" bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-full h-24 w-24 flex items-center justify-center text-white animate-pulse mx-auto mb-6">
               {service.icon}
             </div>
             <h3 className="mt-6 text-2xl font-bold text-white">
               {service.title}
             </h3>
             <p className="mt-6 text-lg text-gray-200">
               {service.description}
             </p>
             <a href={service.link} className="inline-block mt-8 py-3 px-8 text-white bg-gradient-to-br from-teal-500 to-teal-400 rounded-lg hover:bg-opacity-80 transition duration-300">
               Learn More
             </a>
           </div>
           
            ))}
          </div>
        </div>
      </div>
      </section>
  )}
