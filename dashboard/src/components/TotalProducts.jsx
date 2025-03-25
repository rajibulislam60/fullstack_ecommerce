import React, { useEffect, useState } from 'react'
import axios from "axios";

const TotalProducts = () => {
    const [totalProducts, setTotalProducts] = useState(0);
    

    useEffect(() => {
      axios.get("http://localhost:5000/api/v1/dashboard/totalProducts")
        .then((res) => {
          setTotalProducts(res.data.totalProducts);
        })
        .catch((err) => console.error("Error fetching data:", err));
    }, []);
  
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <div className="mt-4 p-4 bg-blue-500 text-white rounded-lg">
            <h3 className="text-xl font-bold">Total Products</h3>
            <p className="text-3xl mt-2">{totalProducts}</p>
          </div>
        </div>
      </div>
    );
}

export default TotalProducts