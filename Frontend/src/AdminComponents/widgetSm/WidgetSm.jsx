import { useState, useEffect } from "react";
import axios from "axios";
import { HiEye } from "react-icons/hi";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/users/?new=true",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div
      className="p-6 rounded-lg w-1/2 overflow-hidden ml-10"
      style={{
        background: "black",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      <div className="px-4 py-3 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-white">
          Newly Joined Members
        </h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <li key={user._id}>
            <a
              href="#"
              className="block hover:bg-gray-900 Xtransition duration-150 ease-in-out"
            >
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={
                      user.img ||
                      "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                    }
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm leading-5 font-medium text-white">
                    {user.username}
                  </p>
                </div>
                <div className="ml-auto flex items-center">
                  <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <HiEye
                      className="-ml-0.5 mr-2 h-4 w-4"
                      aria-hidden="true"
                    />
                    <span>Display</span>
                  </button>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
