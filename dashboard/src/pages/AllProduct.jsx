import axios from "axios";
import React, { useEffect, useState } from "react";

const AllProduct = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch products and categories from backend
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          axios.get("http://localhost:5000/api/v1/product/allproduct", {
            withCredentials: true,
          }),
          axios.get("http://localhost:5000/api/v1/category/allCategory", {
            withCredentials: true,
          }),
        ]);

        setProducts(productsRes.data.data);
        setCategories(categoriesRes.data.data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    setSearch(query);
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/product/deleteproduct/${productId}`,
        { withCredentials: true },
      );
      if (response.data.success) {
        setProducts(products.filter((p) => p._id !== productId));
      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      alert("Error deleting product");
    }
  };

  const getCategoryName = (categoryId) => {
    const id = Array.isArray(categoryId) ? categoryId[0] : categoryId;

    const category = categories.find((cate) => cate._id === id);

    return category ? category.name : "No Category";
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mx-auto w-full rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold">All Products</h2>
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-l-lg border px-3 py-2 focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleSearch}
          className="rounded-r-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : null}

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Image</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Selling Price</th>
            <th className="border p-2">Discount Price</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product._id} className="text-center">
                <td className="border p-2">
                  <img
                    src={
                      Array.isArray(product.image) && product.image.length > 0
                        ? product.image[0]
                        : product.image || "https://via.placeholder.com/100"
                    }
                    alt={product.name}
                    className="h-16 w-16 rounded object-cover"
                  />
                </td>
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">{product.stock}</td>
                <td className="border p-2">
                  {getCategoryName(product.category)}
                </td>
                <td className="border p-2">{product.sellingPrice} Tk</td>
                <td className="border p-2">{product.discountPrice} Tk</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="rounded bg-red-700 px-2 py-1 text-white transition hover:bg-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="border p-2 text-center">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllProduct;
