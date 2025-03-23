import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Paginate from '../components/Paginate';
import Container from '../components/Container';

const SingleCategory = () => {
  let { id } = useParams();
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchSingleCategory();
  }, [id]);
  
  const fetchSingleCategory = async () => {
    try {
      setLoading(true); 
      const response = await axios.get(`http://localhost:5000/api/v1/category/singleCategory/${id}`);
      setCategoryInfo(response.data.data); 
      setLoading(false); 
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Error fetching category data';
      setError(errorMsg); 
      setLoading(false); 
      console.error('Error fetching category:', error);
    }
  };

  if (loading) {
    return <div>
      <Container>
        <h4 className='mt-6'>Loading...</h4>
      </Container>
    </div>;
  }
  
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Container>
      <div>
      {categoryInfo ? (
        <div>
          <h1>{categoryInfo.name}</h1>
          <p>{categoryInfo.description}</p>
          <div>
            <h2>Products:</h2>
            {categoryInfo.products && categoryInfo.products.length > 0 ? (
              <ul>
                {categoryInfo.products.map((product) => (
                  <li key={product._id}>{product.name}</li>
                ))}
              </ul>
            ) : (
              <p>No products available for this category.</p>
            )}
          </div>
        </div>
      ) : (
        <div>No category data available</div>
      )}
      {categoryInfo?.products && (
        <Paginate allProducts={categoryInfo.products} itemsPerPage={8} />
      )}
    </div>
      </Container>
    </div>
  );
};

export default SingleCategory;
