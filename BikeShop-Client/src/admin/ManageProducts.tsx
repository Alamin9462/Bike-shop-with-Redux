import { useGetAllSemestersQuery } from "../redux/features/Products/productApi";


const ManageProducts = () => {
   const {data} = useGetAllSemestersQuery(undefined)
    console.log(data);
    return (
        <div>
            <h3> this is manage product </h3> 
        </div>
    );
};

export default ManageProducts;