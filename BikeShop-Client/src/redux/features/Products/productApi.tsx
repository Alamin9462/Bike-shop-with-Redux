
import { baseApi } from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery } = productApi ;