import React, { useEffect, useState } from 'react'
import axios from "axios";

const TotalRevenue = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);
      
  
      useEffect(() => {
        axios.get("http://localhost:5000/api/v1/dashboard/totalRevenue")
          .then((response) => {
            setTotalRevenue(response.data.totalRevenue);
          })
          .catch((err) => console.error("Error fetching data:", err));
      }, []);
    
      return (
        <div className="">
          <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
            <div className="mt-4 p-4">
              <p className="text-3xl mt-2">{totalRevenue}</p>
              <h3 className="text-xl font-bold">Total Revenue</h3>
            </div>
          </div>
        </div>
      );
}

export default TotalRevenue