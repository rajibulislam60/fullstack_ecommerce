import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const CategoryList = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [editCategory, setEditCategory] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/category/allCategory",
        { withCredentials: true },
      );
      setAllCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleDelete = async (id) => {
    const token = Cookies.get("token");
    if (!token) {
      alert("Unauthorized! Please log in.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this category?")) {
      return;
    }

    try {
      await axios.delete(
        `http://localhost:5000/api/v1/category/deleteCategory/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        },
      );

      setAllCategories((prev) => prev.filter((cat) => cat._id !== id));
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Failed to delete category. Please try again.");
    }
  };

  // Open edit modal
  const handleEdit = (category) => {
    setEditCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
      image: null, // Default to no change
    });
    setModalOpen(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Update category
  const handleUpdate = async () => {
    const token = Cookies.get("token");
    if (!token) {
      alert("Unauthorized! Please log in.");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      await axios.patch(
        `http://localhost:5000/api/v1/category/updateCategory/${editCategory._id}`,
        formDataToSend,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        },
      );

      fetchCategories(); // Refresh list
      setModalOpen(false);
    } catch (error) {
      console.error("Error updating category:", error);
      alert("Failed to update category. Please try again.");
    }
  };

  return (
    <div className="mx-auto w-full p-6">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Categories</h2>
      <div className="overflow-x-auto rounded-lg bg-white shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Image
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Description
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {allCategories.map((category) => (
              <tr key={category._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                </td>
                <td className="px-4 py-2 text-sm font-medium text-gray-800">
                  {category.name}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  {category.description}
                </td>
                <td className="flex gap-2 px-4 py-6">
                  <button
                    onClick={() => handleEdit(category)}
                    className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category._id)}
                    className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for updating category */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="w-1/3 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">Edit Category</h2>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mb-3 w-full rounded border p-2"
            />
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mb-3 w-full rounded border p-2"
            ></textarea>
            <label className="block text-sm font-medium">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleInputChange}
              className="mb-3 w-full rounded border p-2"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setModalOpen(false)}
                className="rounded bg-gray-500 px-3 py-1 text-white hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
