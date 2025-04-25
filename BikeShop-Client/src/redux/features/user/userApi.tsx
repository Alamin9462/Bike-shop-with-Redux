/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
      
    }),

    deleteUser: builder.mutation({
      query: (id:string) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
    
    }),
  }),
});

export const { useGetAllUsersQuery, useDeleteUserMutation } = productApi ;