import { useGetAllProductsQuery } from "../redux/features/Products/productApi";

const ManageProducts = () => {

    
    const {data} = useGetAllProductsQuery(undefined)
    console.log(data);
    return (
        <div>
            <h3> this is manage product </h3>
        </div>
    );
};

export default ManageProducts;