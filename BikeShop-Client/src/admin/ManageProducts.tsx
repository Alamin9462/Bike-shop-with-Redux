import { useGetAllSemestersQuery } from "../redux/features/Products/productApi";
import ViewAllProductTable from "../components/ViewAllProductTable";

const ManageProducts = () => {
  const { data: products } = useGetAllSemestersQuery(undefined);

  return (
    <div className="p-4">
      {products ? (
        <ViewAllProductTable products={products} />
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ManageProducts;
