import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import Cookies from "js-cookie";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    stock: "",
    sellingPrice: "",
    discountPrice: "",
  });

  const [images, setImages] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/category/allCategory",
        );
        setAllCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]); // Allow multiple images
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = Cookies.get("token");

    let formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("category", product.category);
    formData.append("stock", product.stock);
    formData.append("sellingPrice", product.sellingPrice);
    formData.append("discountPrice", product.discountPrice);
    images.forEach((image) => {
      formData.append("image", image);
    });

    try {
      await axios.post(
        "http://localhost:5000/api/v1/product/addProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        },
      );

      toast.success("Product added successfully!", {
        position: "top-center",
        autoClose: 1000,
        transition: Bounce,
      });

      setProduct({
        name: "",
        description: "",
        category: "",
        stock: "",
        sellingPrice: "",
        discountPrice: "",
      });
      setImages([]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product. Please try again.", {
        position: "top-center",
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="mb-4">
            <label className="mb-1 block font-medium">Product Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full rounded-lg border px-3 py-2 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block font-medium">
              Product Description
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Enter product description"
              rows="4"
              className="w-full rounded-lg border px-3 py-2 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block font-medium">Product Category</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:ring focus:ring-blue-300"
              required
            >
              <option value="">Select Category</option>
              {allCategories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-1 block font-medium">Stock Quantity</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              placeholder="Enter stock quantity"
              className="w-full rounded-lg border px-3 py-2 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block font-medium">Selling Price</label>
            <input
              type="number"
              name="sellingPrice"
              value={product.sellingPrice}
              onChange={handleChange}
              placeholder="Enter selling price"
              className="w-full rounded-lg border px-3 py-2 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block font-medium">Discount Price</label>
            <input
              type="number"
              name="discountPrice"
              value={product.discountPrice}
              onChange={handleChange}
              placeholder="Enter discount price"
              className="w-full rounded-lg border px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          {loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 py-2 text-white transition hover:bg-blue-600"
            >
              Add Product
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
