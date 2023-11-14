import { LineStyle, PermIdentity, AttachMoney, Create, Settings } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserSidebar(props) {

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
            to="/user"
            className="block p-2 text-sm font-medium text-white rounded-md hover:bg-gray-100 hover:text-gray-800"
          >
            <LineStyle className="mr-3 text-gray-400" />
            Home
          </Link>
          <Link
            to="/edit"
            className="block p-2 text-sm font-medium text-white rounded-md hover:bg-gray-100 hover:text-gray-800"
          >
            <Settings className="mr-3 text-gray-400" />
            Settings
          </Link>
        </nav>
      </div>
    </aside>
  );
}
