
import { baseApi } from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),

    addProduct: builder.mutation({
      query: (data) => ({
        url: '/products/create-product',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery , useAddProductMutation} = productApi ;