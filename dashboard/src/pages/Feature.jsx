import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(null);

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/product/allproduct");
      setProducts(data.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Failed to load products!");
    }
    setLoading(false);
  };

  // Toggle "Featured" status
  const toggleFeatured = async (id) => {
    try {
      const { data } = await axios.put(`http://localhost:5000/api/v1/product/isFeature/${id}`);
      alert(data.msg);
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error.response?.data || error);
      alert(error.response?.data?.msg || "Failed to update Featured status!");
    }
  };
  

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 w-full mx-auto">
      <h2 className="text-3xl font-bold mb-4">Feature Products Select Area</h2>
      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Product Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
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
                  <td className="border p-2">{product.discountPrice} Tk</td>
                  <td className="border p-2">
                    {product.isFeature ? (
                      <span className="text-green-600 font-semibold">Featured</span>
                    ) : (
                      <span className="text-gray-500">Not Featured</span>
                    )}
                  </td>
                  <td className="border p-2">
                    <button
                      className={`px-3 py-1 rounded ${
                        updating === product._id
                          ? "bg-gray-400 cursor-not-allowed"
                          : product.isFeature
                          ? "bg-red-500 hover:bg-red-700"
                          : "bg-blue-500 hover:bg-blue-700"
                      } text-white`}
                      onClick={() => toggleFeatured(product._id)}
                      disabled={updating === product._id}
                    >
                      {updating === product._id
                        ? "Updating..."
                        : product.isFeature
                        ? "Remove Featured"
                        : "Mark as Featured"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
