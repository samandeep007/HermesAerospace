import React, {useState, useEffect} from 'react'
import {products} from '../data';
import ProductCard from './ProductCard';
import axios from 'axios';
export default function Products({cat,filters,sort}) {
  
  const[products, setProducts]=useState([]);
  const[filteredProducts, setFilteredProducts] = useState([]);

  
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            if (key === "price") {
              switch (value) {
                case "under1K":
                  return item.price >= 100 && item.price <= 1000;
                case "under3K":
                  return item.price >= 1000 && item.price <= 3000;
                case "under5K":
                  return item.price >= 3000 && item.price <= 5000;
                case "under10K":
                  return item.price >= 5000 && item.price <= 10000;
                default:
                  return true;
              }
            }
            return item[key].includes(value);
          })
        )
      );
  }, [products, cat, filters]);
  
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "ascending") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (
    <>

<div className="ProductsContainer">


{filteredProducts.length > 0 && cat
  ? filteredProducts.map((item) =>  <div id="product"><ProductCard textColor="black" bgColor="white" name={item.name} height="300px" _id={item._id} description={item.description} image={item.images[1]} rating={item.rating} reviews={item.reviews.length} availability={item.availability} price={item.price} regularPrice={item.regularPrice} key={item._id} /> </div>)
  :  (
    <p style={{margin: "0 auto"}} className='text-white text-2xl'>No products found</p>
  )}

    

    
</div>
    </>
  )
}
