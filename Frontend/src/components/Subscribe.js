import React, {useState} from 'react';
import axios from 'axios';

function Subscribe() {
  const[email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/newsletter/subscribe', {
        email
    
      });
    
      
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-lg font-medium mb-2">Subscribe to Our Newsletter</h2>
      <form className="flex flex-col sm:flex-row">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=> {setEmail(e.target.value)}}
          className="bg-white border border-gray-300 rounded-lg py-2 px-4 mb-2 sm:mr-2 sm:mb-0"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg py-2 px-4"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
