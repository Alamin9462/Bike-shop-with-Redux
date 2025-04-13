import { useState } from "react";
import { useAddProductMutation } from "../redux/features/Products/productApi";

const CreateProduct = () => {
    const [addProduct] = useAddProductMutation;
    
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    model: "",
    stock: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can send formData to your backend
  };

  return (
    <div className="p-6 rounded-xl shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Bike</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="AVS SF"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Brand</label>
          <input
            type="text"
            name="brand"
            placeholder="Suzuki"
            value={formData.brand}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            name="price"
            placeholder="10020"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Model</label>
          <input
            type="text"
            name="model"
            placeholder="2023"
            value={formData.model}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="md:col-span-2 flex justify-center">
          <div className="w-full md:w-1/2">
            <label className="block mb-1 font-medium text-center">Stock</label>
            <input
              type="number"
              name="stock"
              placeholder="12"
              value={formData.stock}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Submit Bike
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
