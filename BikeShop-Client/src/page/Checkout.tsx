
// import { toast } from 'sonner';
// import { useInitiatePaymentMutation } from '../redux/features/orderAndPayment/paymentApi';
// import { useCreateOrderMutation } from '../redux/features/orderAndPayment/OrderApi';

// const Checkout = () => {
//   const [createOrder] = useCreateOrderMutation();
//   const [initiatePayment] = useInitiatePaymentMutation();

//   const handleCheckout = async () => {
//     try {
//       // Step 1: Create Order
//       const orderPayload = {
//         products: 'PRODUCT_ID',
//         quantity: 1,
//       };

//       const orderRes = await createOrder(orderPayload).unwrap();
//       toast.success('Order created!');

//       // Step 2: Initiate Payment
//       const paymentRes = await initiatePayment({
//         orderId: orderRes.data._id,
//         amount: orderRes.data.totalPrice,
//       }).unwrap();

//       // Redirect or show success
//       window.location.href = paymentRes.paymentUrl;
//     } catch (err: any) {
//       toast.error(err?.data?.message || 'Something went wrong!');
//     }
//   };

//   return (
//     <button onClick={handleCheckout} className="btn btn-primary">
//       Checkout Now
//     </button>
//   );
// };

// export default Checkout;
