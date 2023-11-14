import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../AdminRedux/userRedux";
import { BellIcon, GlobeIcon, CogIcon } from "react-icons/hi";

export default function Topbar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());

  };

  return (
      <div style={{background: "black"}} className="shadow-md">
        <div className="mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-bold text-xl text-white">Hermes Aerospace</h1>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <button
              className="p-1 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-500"
              onClick={handleLogout}
            >
              <span className="sr-only">Logout</span>
              <span className="font-medium">Logout</span>
            </button>
            <img
              className="h-8 w-8 rounded-full ml-4"
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>
        </div>
      </div>
  );
}
