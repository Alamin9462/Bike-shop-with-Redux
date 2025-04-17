// /* eslint-disable @typescript-eslint/no-explicit-any */

// import { baseApi } from "../../api/baseApi";



// export const paymentApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     initiatePayment: builder.mutation({
//       query: (paymentData) => ({
//         url: '/payment/initiate',
//         method: 'POST',
//         body: paymentData,
//       }),
//     }),
//     confirmPayment: builder.query({
//       query: (trxId) => `/payment/confirm/${trxId}`,
//     }),
//   }),
// });

// export const { useInitiatePaymentMutation, useConfirmPaymentQuery } = paymentApi;
