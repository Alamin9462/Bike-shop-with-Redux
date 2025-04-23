/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../redux/features/Products/productApi";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id as any);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;

  const product = data?.data;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-white shadow-xl rounded-2xl">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    <div className="relative group">
      <img
        src={product.photo}
        alt={product.name}
        className="rounded-2xl w-full h-[420px] object-cover shadow-xl transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 rounded-full shadow-md text-sm font-medium">
        Featured
      </div>
    </div>

    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

      <div className="space-y-2 mb-4">
        <p className="text-gray-600">
          <span className="font-semibold text-gray-800">Brand:</span> {product.brand}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold text-gray-800">Model:</span> {product.model}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold text-gray-800">Category:</span> {product.category}
        </p>
      </div>

      <p className="text-3xl font-bold bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-500 text-transparent bg-clip-text mb-6">
        ${product.price}
      </p>

      <p className="text-gray-700 leading-relaxed border-l-4 border-indigo-500 pl-4 italic">
        {product.description}
      </p>

      <div className="mt-8">
        <button className="btn btn-primary rounded-full px-6">Add to Cart</button>
      </div>
    </div>
  </div>
</div>

  );
};

export default ProductDetails;
