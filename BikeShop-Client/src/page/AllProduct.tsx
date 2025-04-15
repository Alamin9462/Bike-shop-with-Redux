/* eslint-disable @typescript-eslint/no-explicit-any */
// ViewAllProductTable.tsx
import ProductCard from "../components/ProductCard";
import { useGetAllSemestersQuery } from "../redux/features/Products/productApi";


const AllProduct = () => {
    const { data: response, isLoading } = useGetAllSemestersQuery(undefined);

    if (isLoading) {
      return <div className="text-center py-10">Loading...</div>;
    }
  
    const products = response?.data || [];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    {products.map((product: any) => (
      <ProductCard
        key={product._id}
        name={product.name}
        brand={product.brand}
        price={product.price}
        photo={product.photo}
      />
    ))}
  </div>
   
  );
};

export default AllProduct;
