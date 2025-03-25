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
      <div className='mt-8'>
      {categoryInfo?.products && (
        <Paginate allProducts={categoryInfo.products} itemsPerPage={8} />
      )}
    </div>
      </Container>
    </div>
  );
};

export default SingleCategory;
