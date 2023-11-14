import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";


const about = {
  title: "About Us",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, saepe eaque? Exercitationem soluta temporibus aut pariatur et animi quisquam molestias perspiciatis modi laboriosam natus culpa architecto officia cupiditate ea nihil reiciendis, iste voluptatum sapiente velit deleniti? Accusamus explicabo consectetur nostrum, rem omnis placeat, architecto ducimus dolorum repellat, veritatis esse doloribus. Odio, nam rerum perferendis beatae deserunt sint rem odit, obcaecati exercitationem, nulla perspiciatis? Sapiente accusamus aut officiis quo, earum nihil ex explicabo labore voluptatibus modi eaque corporis cum.",
  address: "123 Main St, Anytown USA",
  phone: "123-456-7890",
  email: "info@company.com",
};

const AboutPage = () => {
  return (
    <div style={{background: "black"}}>
    <div style={{margin: "0 auto"}} className="max-w-8xl  py-8  text-white">
      <div className="container mx-auto py-20 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2">
            <h2 className="text-5xl text-center  font-bold mb-8">{about.title}</h2>
            <p className="text-lg mb-6">{about.description}</p>
           
          </div>
          {/* background: linear-gradient(180deg,#091d4280 50%,var(--navy) 100%),url(/static/media/banner.6d34f24….jpg) no-repeat;
    bac
    background: linear-gradient(180deg,#091d4280 50%,var(--navy) 100%),url(/static/media/about_banner.b98445f….jpg) no-repeat; */}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-16 md:mb-0 pb-8">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
          <div className="md:w-1/2 pb-8">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
