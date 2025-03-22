import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Paginate from '../components/Paginate';

const SingleCategory = () => {
  let { id } = useParams();
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  
  useEffect(() => {
    fetchSingleCategory();
  }, [id]); // Re-fetch when the category id changes
  
  const fetchSingleCategory = async () => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get(`http://localhost:5000/api/v1/category/singleCategory/${id}`);
      setCategoryInfo(response.data.data); 
      setLoading(false); // Stop loading
    } catch (error) {
      setError('Error fetching category data'); // Set error state
      setLoading(false); // Stop loading
      console.error('Error fetching category:', error);
    }
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>{error}</div>;
  }
  
  return (
    <div>
      {categoryInfo ? (
        <div>
          <h1>{categoryInfo.name}</h1>
          <p>{categoryInfo.description}</p>
          {/* Render products or other category-related info */}
          <div>
            <h2>Products:</h2>
            <ul>
              {categoryInfo.products?.map((product) => (
                <li key={product._id}>{product.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>No category data available</div>
      )}
      {/* Optionally, include pagination here if needed */}
      <Paginate allProducts={categoryInfo.products} itemsPerPage={8} />
    </div>
  );
};

export default SingleCategory;
