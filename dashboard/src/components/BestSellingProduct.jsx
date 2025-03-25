import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BestSellingProduct = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/dashboard/bestSellingProducts')
      .then((response) => {
        setBestSellingProducts(response.data.bestSelling);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="h-[150px]">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
        <div className="mt-4 p-4">
          <p className="text-3xl mt-2">
            {bestSellingProducts.length > 0
              ? bestSellingProducts[0]?.sales || 0 
              : 0} 
          </p>
          <h3 className="text-xl font-bold">Best Selling Products</h3>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProduct;
