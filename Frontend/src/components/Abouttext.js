import { FaTruck, FaCogs, FaCamera, FaBatteryFull, FaExpand, FaWrench, FaMapMarkerAlt, FaMicrochip } from 'react-icons/fa';

const FeatureCard = ({icon, title, description}) => (

<div className="rounded-lg p-6 hover:bg-gray-900 hover:text-black hover:shadow-xl transition duration-300 ease-in-out bg-gradient-to-br from-gray-800 to-gray-700">
  <span style={{width: "80px", height: "80px", margin: "0 auto", marginBottom: "25px"}} className="flex items-center justify-center mb-3 py-4 px-4 rounded-full shadow-lg ">
    {icon({size: 50, className: "text-white"})}
  </span>
  <h3 className="text-2xl font-bold text-center text-white mb-4">{title}</h3>
  <p className="text-lg text-gray-400">{description}</p>
</div>

);
const features = [
{
icon: FaTruck,
title: 'High-Performance Drones',
description: 'Our drones are built with cutting-edge technology to deliver superior performance and reliability, ensuring that you can always capture high-quality footage and data.'
},
{
icon: FaCogs,
title: 'Customizable Designs',
description: 'We offer a wide range of customization options for our drones, allowing you to create a unique design that reflects your personal style and preferences.'
},
{
icon: FaCamera,
title: 'Advanced Cameras',
description: 'Our drones are equipped with advanced cameras that deliver stunning visuals, allowing you to capture high-quality photos and videos from unique angles and perspectives.'
},
{
icon: FaBatteryFull,
title: 'Long Battery Life',
description: 'Our drones feature long-lasting batteries that provide extended flight time, allowing you to capture more footage and data without needing to recharge.'
},
{
icon: FaExpand,
title: 'Flexible Range',
description: 'Our drones have a flexible range and can operate in a wide variety of environments, making them ideal for a range of industries and applications.'
},
{
icon: FaWrench,
title: 'Easy Maintenance',
description: 'Our drones are designed for easy maintenance and repair, minimizing downtime and ensuring that your drone is always ready for your next mission.'
},
{
icon: FaMapMarkerAlt,
title: 'Precision Navigation',
description: 'Our drones are equipped with precision navigation systems that enable accurate and efficient operation in a variety of settings and scenarios.'
},
{
icon: FaMicrochip,
title: 'Cutting-Edge Technology',
description: 'Our drones are built with the latest technology to ensure that they can perform in even the most demanding environments and conditions.'
}
];

const AboutText = () => (

  <div className="bg-black py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl text-center font-bold text-white sm:text-4xl">Our Features</h2>
      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(feature => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  </div>
);
export default AboutText;