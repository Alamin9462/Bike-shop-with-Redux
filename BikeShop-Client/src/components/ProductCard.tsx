interface ProductCardProps {
  name: string;
  brand: string;
  price: number;
  photo: string;
}

const ProductCard = ({ name, brand, price, photo }: ProductCardProps) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
             <figure>
               <img src={photo} alt={name} className="h-48 w-full object-cover" />
             </figure>
             <div className="card-body">
               <h2 className="card-title">{name}</h2>
               <p className="text-sm text-gray-500">{brand}</p>
               <p className="text-lg font-semibold text-primary">${price}</p>
               <div className="card-actions justify-center gap-x-2">
                 <button className="btn btn-primary btn-sm">Add to Cart</button>
                 <button className="btn btn-primary btn-sm">Details</button>
               </div>
             </div>
           </div>
    );
};

export default ProductCard;