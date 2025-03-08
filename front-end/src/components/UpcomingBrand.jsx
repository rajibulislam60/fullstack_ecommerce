import React from "react";
import { Link } from "react-router-dom";

const UpcomingBrand = () => {
  const brands = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Nike Shoe",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Adidas Sneakers",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Puma Sportswear",
    },
  ];

  return (
    <div className="h-[500px] w-full rounded-lg border bg-white p-4 shadow-lg md:w-[40%]">
      <h3 className="mb-4 text-xl font-bold text-teal-600">Upcoming Brands & Products</h3>
      <div className="grid grid-cols-2 gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="rounded-md border bg-gray-50 shadow-sm"
          >
            <Link to={`/brand/${brand.id}`}>
              <img
                className="h-40 w-full rounded-t-md object-cover"
                src={brand.image}
                alt={brand.name}
              />
            </Link>
            <div className="p-3 text-center">
              <Link to={`/brand/${brand.id}`}>
                <h5 className="text-sm font-medium text-gray-800 transition hover:text-blue-500">
                  {brand.name}
                </h5>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingBrand;
