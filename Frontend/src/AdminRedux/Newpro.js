import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/64169984ce07311b56e172d4/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="bg-white py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">Product Reviews</h2>
        {reviews.map((review) => (
          <div key={review._id} className="bg-white rounded-lg shadow-lg p-6 mb-4">
            <h3 className="text-lg font-bold mb-2">{review.title}</h3>
            <p className="text-gray-700 mb-2">{review.description}</p>
            <p className="text-gray-700 mb-2">Rating: {review.rating}</p>
            <p className="text-gray-700">User: {review.user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
