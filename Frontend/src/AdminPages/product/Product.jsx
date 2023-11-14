import { useState, useEffect } from 'react';
import { StarRate } from "@mui/icons-material";
import {useLocation} from 'react-router-dom';
import ImageUploadModal from "../product/ImageUploadModal";
import { useDispatch } from "react-redux";
import axios from 'axios'
import { MdDeleteOutline } from 'react-icons/md';
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from 'react-icons/io';



export default function Product() {
  const [productData, setProductData] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imageName, setImageName] = useState([]);
  const [images, setImages] = useState([]);
  const[rating,setRating]=useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllImagesBigger, setShowAllImagesBigger] = useState(true);
  const dispatch = useDispatch();
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:5000/api/products/find/${id}`);
      const data = await response.json();
      setProductData(data);
      setName(data.name);
      setDescription(data.description);
      setCategory(data.category);
      setPrice(data.price);
      setRegularPrice(data.regularPrice);
      setRating(data.rating)
      setStock(data.stock);
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchReviews();
  }, [id]);

  useEffect(() => {
    if (productData) {
      setName(productData.name);
      setDescription(productData.description);
      setCategory(productData.category);
      setPrice(productData.price);
      setRegularPrice(productData.regularPrice);
      setRating(productData.rating);
      setStock(productData.stock);
    }
  }, [productData]);
  
  async function handleImageDelete(index, image) {
    const newImages = [...images];
    const deletedImageName = imageName[index];
    newImages.splice(index, 1);
    setImageName([...imageName.slice(0, index), ...imageName.slice(index+1)]);
    setImages(newImages);
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/products/${id}/images/${index}`,
        {
          data: {
            imageName: deletedImageName,
            image: image
          },
        }
      );
      console.log("image deleted:", res.data);
      window.location.reload();
    } catch (err) {
      console.error("Failed to delete image:", err);
    }
  }
  
  

  function handleImageClick(index) {
    setSelectedImageIndex(index);
    setShowAllImagesBigger(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.reload();
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("regularPrice", regularPrice);
    formData.append("price", price);
    formData.append("stock", stock);

    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        formData.append("images[]", images[i]);
      }
    }
  
    try {
      const res = await axios.put(
        "http://localhost:5000/api/products/" + id,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      console.log("product updated:", res.data);
    } catch (err) {
      console.error("Failed to update product:", err);
    }
  };
  

  const handleImageSelect = (selectedImages) => {
    setImages(selectedImages);
    setImageName(selectedImages.name)
  };


  return (
    <div style={{flex: "4", backgroundColor: "#121212", padding: "0"}}>
      {productData && (
        <>
         <ImageUploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onImageSelect={handleImageSelect} />
       <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-full mx-auto">
      

<div className="bg-white shadow overflow-hidden">
  
  <div className="flex justify-between items-center border-b border-gray-200 px-4 py-5 sm:px-6">
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">{productData.name}</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">{productData._id}</p>
    </div>
    <div className="flex-shrink-0">
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
        Active
      </span>
    </div>
  </div>
  

  <div className="flex">
  <div style={{margin: "0 auto"}} className="p-4 w-1/2">
  {productData && (
    <>
      <div className="border-b border-gray-200">
        <h4 className="text-gray-600 font-medium">Product Information</h4>
      </div>
      <div className="mt-4">
        <div className="flex">
          <img
            src={productData.images[selectedImageIndex]}
            style={{ width: showAllImagesBigger ? "500px" : "250px" }}
            alt=""
            className="object-cover rounded-md"
          />
          <div 
            className="absolute right-0 top-0 -mt-2 -mr-2 flex items-center justify-center rounded-full h-6 w-6 bg-gray-900 text-white text-lg cursor-pointer"
            onClick={() => handleImageDelete(selectedImageIndex)}
          >
            <MdDeleteOutline/>
          </div>
        </div>
        <div className="flex mt-4 ">
  {productData.images.map((image, index) => (
    <div key={index} className="relative">
      <img
        src={image}
        style={{
          width: "120px",
          height: "100px",
          marginRight: "8px",
          cursor: "pointer",
        }}
        alt=""
        onClick={() => handleImageClick(index)}
      />
      <div 
        className="absolute right-0 top-0 -mt-2 -mr-2 flex items-center justify-center rounded-full h-6 w-6 bg-gray-900 text-white text-lg cursor-pointer"
        onClick={() => handleImageDelete(index, image)}
      >
        <MdDeleteOutline />
      </div>
    </div>
  ))}
</div>


            <div className="text-xl mt-6">
                <p className="font-semibold text-gray-700"><span className='font-normal'>Product Name: </span>{productData.name}</p>
                <p className="text-sm mt-1 text-gray-500">Category: {productData.category}</p>
                <p className="text-sm mt-1 text-gray-500">Product ID: {productData._id}</p>
              </div>
            <div className="flex mt-4">
              <div className="w-1/2">
                <p className="text-sm text-gray-500">Regular Price</p>
                <p className="text-lg font-medium text-gray-900">{productData.regularPrice}</p>
              </div>
              <div className="w-1/2">
                <p className="text-sm text-gray-500">Discounted Price</p>
                <p className="text-lg font-medium text-gray-900">{productData.price}</p>
              </div>
              <div className="w-1/2">
                <p className="text-sm text-gray-500">Ratings</p>
                <div className="flex items-center mt-1">
                <>
          {[...Array(Math.floor(rating))].map((_, index) => (
            <IoIosStar key={index} size={26} color="#f5b401" />
          ))}
          {[...Array(Math.ceil(rating - Math.floor(rating)))].map((_, index) => (
            <IoIosStarHalf key={index} size={26} color="#f5b401" />
          ))}
          {[...Array(5 - Math.ceil(rating))].map((_, index) => (
            <IoIosStarOutline key={index} size={26} color="#d2d6dc" />
          ))}
        </>
                  <span className="ml-2 text-gray-500">{productData.reviews.length}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
      <div className="p-4 w-1/2">
      <div className="border-b border-gray-200">
            <h4 className="text-gray-600 font-medium">Edit Product</h4>
          </div>
          <div className="mt-4">
            <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                <input type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                </div>
                <div className="col-span-2 sm:col-span-1">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Product Category</label>
                <input type="text"
                             id="category"
                             name="category"
                             value={category}
                             onChange={(e)=>{setCategory(e.target.value)}}
                             className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           />
                </div>
                <div className="col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Product Description</label>
                <textarea
                             id="description"
                             name="description"
                             value={description}
                             onChange={(e)=>{setDescription(e.target.value)}}
                             rows="8"
                             className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           ></textarea>
                </div>
                <div className="col-span-2 sm:col-span-1">
                <label htmlFor="regularPrice" className="block text-sm font-medium text-gray-700">Regular Price</label>
                <input type="number"
                             id="regularPrice"
                             name="regularPrice"
                             value={regularPrice}
                             onChange={(e)=>{setRegularPrice(e.target.value)}}
                             className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           />
                </div>
                <div className="col-span-2 sm:col-span-1">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Discounted Price</label>
                <input type="number"
                             id="price"
                             name="price"
                             value={price}
                             onChange={(e)=>{setPrice(e.target.value)}}
                             className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           />
                </div>

                <div className="col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Product Stock</label>
                <input type='number'
                             id="stock"
                             name="stock"
                             value={stock}
                             onChange={(e)=>{setStock(e.target.value)}}
                             rows="8"
                             className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                           ></input>
                </div>


            
                <div className="col-span-2 sm:col-span-1">
                <label htmlFor="images" className="block  mb-1 text-sm font-medium text-gray-700">Product Images</label>
                <button type="button" className="bg-gray-900 text-white inline py-2 px-4 rounded " onClick={() => setIsModalOpen(true)}>
          Upload Images
        </button>
                </div>
                <div className="col-span-2 sm:col-span-1">
                <button type="submit"
              
                className="inline-flex justify-center mt-6 py-2 px-4 border border-transparent shadow-sm  font-medium rounded text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              
               Update Product
                </button>
                </div>
              </form>
              </div>
              </div>
      </div>
      <div className="bg-white  p-6">
  <h2 className="text-2xl text-gray-700 font-bold mb-6">Product Reviews</h2>
  {reviews.map((review) => (
    <div key={review._id} className="border-b pb-6 mb-6">
      <h3 className="text-xl font-medium mb-2">{review.title}</h3>
      <p className="text-gray-600 text-justify mb-4">{review.description}</p>
      <div className="flex items-center mb-2">
        <p className="text-md font-medium text-gray-600 mr-2">Rating:</p>
        <>
          {[...Array(Math.floor(review.rating))].map((_, index) => (
            <IoIosStar key={index} size={22} color="#f5b401" />
          ))}
          {[...Array(Math.ceil(review.rating - Math.floor(review.rating)))].map((_, index) => (
            <IoIosStarHalf key={index} size={22} color="#f5b401" />
          ))}
          {[...Array(5 - Math.ceil(review.rating))].map((_, index) => (
            <IoIosStarOutline key={index} size={22} color="#d2d6dc" />
          ))}
        </>
      </div>
      <div className="flex items-center">
        <p className="text-md font-medium text-gray-600 mr-2">User:</p>
        <p className="text-md font-medium">{review.user.name}</p>
      </div>
    </div>
  ))}
</div>

      </div>
      
      </div>
      </>)}
     
      </div>
        
  );
}
