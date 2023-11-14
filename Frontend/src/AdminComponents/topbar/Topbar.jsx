import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../AdminRedux/userRedux";
import { BellIcon, GlobeIcon, CogIcon } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Topbar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const username = useSelector((state)=>state.user.username);
  const[user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users/user/" + username)
  .then(response => {
    console.log(response.data)
   setUser(response.data);
  })
  .catch(error => {
    console.log(error);
  });
  
  }, [username])


  return (
    <div style={{ background: "black" }} className="shadow-md">
      <div className="mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-bold text-xl text-white">Hermes Aerospace</h1>
        
        </div>
        <div className="ml-4 flex items-center md:ml-6">
        
        <Link to="/store" className="inline-block">
  <button className="ml-4 p-1 rounded-full text-gray-200 hover:text-gray-200 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-500 inline-flex items-center">
    <FaShoppingCart size={20} className="mr-2" />
    <span className="font-medium">Go to Store</span>
  </button>
</Link>

          <button
            className="p-1 rounded-full ml-4 text-gray-200 hover:text-green-500 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-500"
            onClick={handleLogout}
          >
            <span className="sr-only">Logout</span>
            <span className="font-medium">Logout</span>
          </button>
          <img
            className="h-8 w-8 rounded-full ml-4"
            src={`https://ui-avatars.com/api/?name=${ user[0] && user[0].name }`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
