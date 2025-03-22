import React, { useEffect, useState } from "react";
import Container from "./Container";
import axios from "axios";
import { useNavigate } from "react-router";

const Categorys = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/category/allCategory",
      );
      setAllCategories(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching categories:", error);
    }
  };

 

  const handleCategoryClick=(id)=>{
    navigate(`/shop/${id}`)
  }

  const LoadingState = () => {
    return (
      <div className="flex gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            role="status"
            className="animate-pulse rounded-sm border border-gray-200 p-4 shadow-sm dark:border-gray-700 md:p-6"
          >
            <div className="mb-4 flex h-48 items-center justify-center rounded-sm bg-gray-300 dark:bg-gray-700">
              <svg
                className="h-10 w-[255px] text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
            <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
            <span className="sr-only">Loading...</span>
          </div>
        ))}
      </div>
    );
  }; 
  return (
    <section>
      <Container>
        <div className="py-6">
          <h2 className="mb-4 text-xl font-bold text-teal-600">Categories</h2>
          <div className="grid grid-cols-2 gap-4 px-1 md:grid-cols-3 lg:grid-cols-4">
            {loading ? (
              <LoadingState />
            ) : (
              allCategories.map((item) => (
                <div
                onClick={()=>handleCategoryClick(item._id)}
                  key={item.id}
                  className="rounded-md border text-center shadow-md transition hover:shadow-lg"
                >
                  <img
                    className="w-full object-cover sm:h-[150px] md:h-[250px] lg:h-[300px]"
                    src={item.image}
                    alt={item.name}
                  />
                  <h3 className="mt-2 py-2 text-lg font-semibold">
                    {item.name}
                  </h3>
                </div>
              ))
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Categorys;
