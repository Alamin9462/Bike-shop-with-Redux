/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { useGetAllSemestersQuery } from "../redux/features/Products/productApi";
import { useAppSelector } from "../redux/hook";


const AllProduct = () => {
  const { data: response, isLoading } = useGetAllSemestersQuery(undefined);
  const query = useAppSelector((state) => state.search.query.toLowerCase());

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const products = response?.data || [];

  const filtered = products.filter((product: any) => {
    const nameMatch = product.name.toLowerCase().includes(query);
    const brandMatch = product.brand.toLowerCase().includes(query);
    const categoryMatch = product.category?.toLowerCase().includes(query);
    return nameMatch || brandMatch || categoryMatch;
  });

  return (
    <div>
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {filtered.length > 0 ? (
          filtered.map((product: any) => (
            <ProductCard
             key={product._id} product={product}/>
          ))
        ) : (
          <p className="text-center col-span-3">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default AllProduct;
