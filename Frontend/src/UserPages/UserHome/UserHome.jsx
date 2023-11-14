import ChangePassword from '../ChangePassword/ChangePassword';
import Orders from '../Orders/Orders';
import FeaturedInfo from '../featuredInfo/FeaturedInfo';
import "./home.css";

import axios from 'axios';

export default function UserHome() {
 



  return (
    <div className="home">
      <span style={{marginTop: "150px"}}><FeaturedInfo/></span>
      <div className="mt-6">
      <Orders/>
      </div>
    
    </div>
  );
}
