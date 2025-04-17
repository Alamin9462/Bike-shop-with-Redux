import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // You can call your ShurjoPay API here
    alert("Redirecting to ShurjoPay...");
    navigate("/payment"); // or trigger a payment gateway flow
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-5 font-semibold p-3 border-b border-gray-300">
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Action</p>
          </div>

          <ul className="divide-y divide-base-300">
            {cartItems.map((item) => (
              <li key={item.productId} className="grid grid-cols-5 items-center p-3">
                <p>{item.name}</p>
                <p>৳{item.price}</p>
                <div className="flex items-center gap-2">
                  <button onClick={() => dispatch(decreaseQuantity(item.productId))} className="btn btn-xs btn-outline">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.productId))} className="btn btn-xs btn-outline">+</button>
                </div>
                <p className="font-medium">৳{item.price * item.quantity}</p>
                <button onClick={() => dispatch(removeFromCart(item.productId))} className="btn btn-sm btn-error text-white">🗑️</button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-6">
            <p className="text-lg font-bold">Total: ৳{total}</p>
            <div className="flex gap-4">
              <button onClick={() => dispatch(clearCart())} className="btn btn-outline btn-warning">Clear Cart</button>
              <button onClick={handleCheckout} className="btn btn-primary">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
