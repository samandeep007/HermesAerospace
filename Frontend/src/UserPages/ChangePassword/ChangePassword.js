import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const username = useSelector((state) => state.user.username);
  const handleSubmit = (e) => {
    e.preventDefault();

    // perform validation
    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirm password do not match.");
      return;
    }

    // make API call to change password
    axios.post("http://localhost:5000/api/auth/change-password", {
      username: username,
      oldPassword,
      newPassword
    })
      .then((res) => {
        if (res.status === 200) {
          setSuccessMessage("Password changed successfully!");
        } else {
          setErrorMessage("Error changing password. Please try again.");
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Error changing password. Please try again.");
      });
  };

  return (
    <div className="flex justify-center">
      <div style={{height: "450px", width: "400px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} className="p-6  rounded-lg bg-white ">
        <h2 className="text-lg font-medium mb-4">Change Password</h2>
        <form onSubmit={handleSubmit}>
        {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {errorMessage}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="oldPassword" className="block text-gray-700 font-medium mb-2">
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-2">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={8}
              className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
              className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} 
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4
rounded focus:outline-none focus:shadow-outline"
>
Change Password
</button>
</form>
</div>
</div>
);
};

export default ChangePassword;