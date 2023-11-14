import "./newUser.css";
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ImageUploadModal from "./ImageUploadModal";
import { useDispatch } from "react-redux";


export default function NewUser() {

const[username, setUsername] = useState("");
const[name, setName] = useState("");
const[email, setEmail] = useState("");
const[password, setPassword] = useState("")
const[address, setAddress]=useState("");
const[mobile, setMobile]=useState("");
const[dob, setDob] = useState("");
const[isAdmin, setIsAdmin] = useState("");

const [productName, setProductName] = useState("");
const [description, setDescription] = useState("");
const [category, setCategory] = useState("");
const [regularPrice, setRegularPrice] = useState("");
const [price, setPrice] = useState("");
const [stock, setStock] = useState("");
const [imageName, setImageName] = useState([]);
const [images, setImages] = useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);
const dispatch = useDispatch();

const onSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", productName);
  formData.append("description", description);
  formData.append("category", category);
  formData.append("regularPrice", regularPrice);
  formData.append("stock", stock);
  formData.append("price", price);
  for (let i = 0; i < images.length; i++) {
    formData.append("images[]", images[i]);
  }


  try {
    const res = await axios.post("http://localhost:5000/api/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("New product created:", res.data);
  } catch (err) {
    console.error("Failed to create product:", err);
  }
};

const handleImageSelect = (selectedImages) => {
  setImages(selectedImages);
  setImageName(selectedImages.name)
};

const user = {
  username: username,
  name: name,
  email: email,
  address: address,
  mobile: mobile,
  dob:dob,
  password: password,
  isAdmin: isAdmin
 }

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(user);

  axios.post(`http://localhost:5000/api/auth/register`, user)
    .then(res => console.log(res.data));

    // window.location.reload();
}


 


  return (
    <div style={{flex: "4", display: "flex", justifyContent: "space-between"}}>
  
  <div className="bg-white flex w-1/2">

 <ImageUploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onImageSelect={handleImageSelect} />
 <h1 className="text-3xl font-semibold text-gray-800 py-6 px-6 bg-gray-100 border-b border-gray-200">
        New Product
      </h1>
  <div style={{width: "95%", margin:"0 auto"}} className="bg-white shadow-lg rounded-lg p-8 pt-10">

    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="description" className="block font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea

          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{height: "100px"}}
          className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full  shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="category" className="block font-medium text-gray-700 mb-2">
          Category
        </label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="category" className="block font-medium text-gray-700 mb-2">
          Stock Available
        </label>
        <input
          type="number"
          id="category"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label htmlFor="regular-price" className="block font-medium text-gray-700 mb-2">
            Regular Price
          </label>
          <input
            type="number"
            id="regular-price"
            value={regularPrice}
            onChange={(e) => setRegularPrice(e.target.value)}
            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="price" className="block font-medium text-gray-700 mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
    
      
      <div>
        <label htmlFor="image" className="block font-medium text-gray-700 mb-2">
          Image
        </label>
        <button type="button" className="bg-gray-900 text-white inline py-2 px-5 rounded" onClick={() => setIsModalOpen(true)}>
          Upload Image
        </button>
        <p className="inline ml-4">{imageName}</p>
    </div>
    <div class="">
      <button type="submit"  className=" py-2 px-4 border border-transparent shadow-sm  font-medium rounded text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        Create Product
      </button>
    </div>
  </form> 
</div>

  </div>

  <div className="flex w-1/2 bg-white">
  <h1 className="text-3xl font-semibold text-gray-800 py-6 px-6 bg-gray-100 border-b border-gray-200">
        New User
      </h1>
    <div style={{width: "100%", height: "100%"}} className="bg-black shadow-lg ">
   
    <div className="w-xl py-4 bg-white  overflow-hidden">
     
      <form className="px-6 py-4">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            name="username"
            placeholder="john"
            className="w-full px-3 py-2 placeholder border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="fullname"
            name="fullname"
            placeholder="John Smith"
            className="w-full px-3 py-2 placeholder border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="john@gmail.com"
            className="w-full px-3 py-2 placeholder border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="w-full px-3 py-2 placeholder border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone
          </label>
          <input
            onChange={(e) => setMobile(e.target.value)}
            type="text"
            id="phone"
            name="phone"
            placeholder="+1 123 456 78"
            className="w-full px-3 py-2 placeholder border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
  <label className="block text-gray-700 font-medium mb-2" htmlFor="selectOption">
    Select Role
  </label>
  <select
    id="selectOption"
    onChange={(e) => setIsAdmin(e.target.value)}
    className="w-full px-3 py-2 placeholder border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="true">Admin</option>
    <option value="false">Customer</option>
  </select>
</div>

        <div className="mb-4">
          <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">
            Date of Birth
          </label>
          <input
            onChange={(e) => setDob(e.target.value)}
            type="text"
            id="dob"
            name="dob"
            placeholder="DD-MM-YYYY"
            className="w-full px
  -3 py-2 placeholder border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  </div>
  <div className="mb-4">
  <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
  Address
  </label>
  <input
  onChange={(e) => setAddress(e.target.value)}
  type="text"
  id="address"
  name="address"
  placeholder="New York | USA"
  className="w-full px-3 py-2 placeholder border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  </div>
  <div className="mt-8">
  <button onClick={handleSubmit}  className=" py-2 px-4 border border-transparent shadow-sm  font-medium rounded text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
  Create
  </button>
  </div>
  </form>
  
    </div>
  </div> 
</div>

  </div> 
  
  );
}
