import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Email,
  Create,
  Settings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Sidebar(props) {


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
    <aside
      style={{
        backgroundColor: "black",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          height: `${props.height}`
      }}
      className="flex-shrink-0 w-64" 
    >
         <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center p-4">
          <img  src={`https://ui-avatars.com/api/?name=${ user[0] && user[0].name }`} className="w-36 h-36 rounded-full bg-gray-400 mb-2" />
          <div className="text-white font-medium text-lg">{ user[0] && user[0].name }</div>
          <div className="text-gray-400 text-sm">@{username}</div>
        </div>
     
        <nav className="flex-1 px-4 py-4 space-y-2">
          <Link
            to="/dashboard"
            className="block p-2 text-sm font-medium text-white rounded-md hover:bg-gray-100 hover:text-gray-800"
          >
            <LineStyle className="mr-3 text-gray-400" />
            Home
          </Link>
          <Link
            to="/analytics"
            className="block p-2 text-sm font-medium text-white rounded-md hover:bg-gray-100 hover:text-gray-800"
          >
            <Timeline className="mr-3 text-gray-400" />
            Analytics
          </Link>
          <Link
            to="/edit"
            className="block p-2 text-sm font-medium text-white rounded-md hover:bg-gray-100 hover:text-gray-800"
          >
            <Settings className="mr-3 text-gray-400" />
            Settings
          </Link>
          <Link
            to="/orders"
            className="block p-2 text-sm font-medium text-white rounded-md hover:bg-gray-100 hover:text-gray-800"
          >
            <AttachMoney className="mr-3 text-gray-400" />
            Sales
          </Link>
          <Link
            to="/users"
            className="block p-2 text-sm font-medium text-white rounded-md hover:bg-gray-100 hover:text-gray-800"
          >
            <PermIdentity className="mr-3 text-gray-400" />
            Users
          </Link>
          <Link
            to="/newUser"
            className="block p-2 text-sm font-medium text-white rounded-md hover:bg-gray-100 hover:text-gray-800"
          >
            <Create className="mr-3 text-gray-400" />
            New
          </Link>
          <Link
            to="/allProducts"
            className="block p-2 text-sm font-medium text-white rounded-md hover:bg-gray-100 hover:text-gray-800"
          >
            <Storefront className="mr-3 text-gray-400" />
            Products
          </Link>
          <Link
            to="/appointments"
            className="block p-2 text-sm font-medium text-white rounded-md hover:bg-gray-100 hover:text-gray-800"
          >
            <MailOutline className="mr-3 text-gray-400" />
            Appointment Requests
          </Link>
          <Link
            to="/contacts"
            className="block p-2 text-sm font-medium text-white rounded-md hover:bg-gray-100 hover:text-gray-800"
          >
           <ChatBubbleOutline className="mr-3 text-gray-400" />
            Queries
          </Link>
          <Link
            to="/dataQuotes"
            className="block p-2 text-sm font-medium text-white rounded-md hover:bg-gray-100 hover:text-gray-800"
          >
           <DynamicFeed  className="mr-3 text-gray-400" />
            Data Collection
          </Link>
          <Link
            to="/Newsletter"
            className="block p-2 text-sm font-medium text-white rounded-md hover:bg-gray-100 hover:text-gray-800"
          >
            <Email className="mr-3 text-gray-400" />
            Newsletter
          </Link>
         
        </nav>
        </div>
        </aside>
  )}
