import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/features/cart/cartSlice";

interface ProductCardProps {
  photo: string | undefined;
  _id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  stock: number;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export function ProductCard ({product}: {product: ProductCardProps}) { 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: product._id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      quantity: 1,
      stock: product.stock,
      imageUrl: product.imageUrl as string
    }));
    navigate("/cart");
  };
  
  return (
        <div className="card w-full bg-base-100 shadow-xl">
             <figure>
               <img src={product.photo} alt={product?.name} className="h-48 w-full object-cover" />
             </figure>
             <div className="card-body">
               <h2 className="card-title">{product.name}</h2>
               <p className="text-sm text-gray-500">{product.brand}</p>
               <p className="text-lg font-semibold text-primary">${product.price}</p>
               <div className="card-actions justify-center gap-x-2">
                 <button onClick={handleAddToCart} className="btn btn-primary btn-sm">Add to Cart</button>
                 <button onClick={() => navigate(`/products/${product._id}`)} className="btn btn-primary btn-sm">Details</button>
               </div>
             </div>
           </div>
    );
};

export default ProductCard;