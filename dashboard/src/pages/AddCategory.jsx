import axios from "axios";
import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";
import Cookies from "js-cookie";

const AddCategory = () => {
  const [formdata, setFormdata] = useState({ name: "", description: "" });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const token = Cookies.get("token");

    e.preventDefault();
    setLoading(true);

    let data = new FormData();
    data.append("name", formdata.name);
    data.append("description", formdata.description);
    if (image) {
      data.append("image", image);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/category/createCategory",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Cookie: `token=${token}`,
          },
          withCredentials: true,
        },
      );

      toast.success("Category Add Success", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      console.log(response.data);
      setFormdata({ name: "", description: "" }); // Clear form
      setImage(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add category. Please try again.", {
        position: "top-center",
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="mb-1 block font-medium">Image</label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            accept="image/*"
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="mb-1 block font-medium">Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={formdata.name}
            placeholder="Category name..."
            className="w-full rounded-lg border px-3 py-2 focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="mb-1 block font-medium">Description</label>
          <textarea
            onChange={handleChange}
            name="description"
            value={formdata.description}
            placeholder="Category details..."
            className="w-full rounded-lg border px-3 py-2 focus:ring focus:ring-blue-300"
            required
          ></textarea>
        </div>
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
            Add Category
          </button>
        )}
      </form>
    </div>
  );
};

export default AddCategory;
