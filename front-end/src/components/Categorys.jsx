import React, { useEffect, useState } from "react";
import Container from "./Container";
import axios from "axios";


const Categorys = () => {
  // let categoryData = [
  //   {
  //     id: 1,
  //     name: "Shirt",
  //     image:
  //       "https://img.drz.lazcdn.com/static/bd/p/3a8b2c2859bfed6b25c38079306df287.jpg_720x720q80.jpg_.webp",
  //   },
  //   {
  //     id: 2,
  //     name: "T-Shirt",
  //     image:
  //       "https://img.drz.lazcdn.com/static/bd/p/ef9220f603fbbab7c315ef538e0724f7.jpg_400x400q75.jpg_.webp",
  //   },
  //   {
  //     id: 3,
  //     name: "Laptop",
  //     image:
  //       "https://img.drz.lazcdn.com/static/bd/p/d18aa0baf101158c378653906a3f7f6f.jpg_400x400q75.jpg_.webp",
  //   },
  //   {
  //     id: 4,
  //     name: "Computer",
  //     image:
  //       "https://img.drz.lazcdn.com/static/bd/p/c95af7f8b71e8a44cf931cebf86d99aa.jpg_400x400q75.jpg_.webp",
  //   },
  // ];

  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/category/allCategory",
      );
      setAllCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  return (
    <section>
      <Container>
        <div className="py-6">
          <h2 className="mb-4 text-xl font-bold text-teal-600">Categories</h2>
          <div className="grid grid-cols-2 gap-4 px-1 md:grid-cols-3 lg:grid-cols-4">
            {allCategories.map((item) => (
              <div
                key={item.id}
                className="rounded-md border text-center shadow-md transition hover:shadow-lg"
              >
                <img
                  className="w-full object-cover sm:h-[150px] md:h-[250px] lg:h-[300px]"
                  src={item.image}
                  alt={item.name}
                />
                <h3 className="mt-2 text-lg font-semibold py-2">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Categorys;
