import { TResponseRedux } from '../../../types';
import { TBike } from '../../../types/bike.type';
import { baseApi } from '../../api/baseApi';

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<TBike[]>) => {
        return {
          data: response.data,
        };
      },
    }),
    addBike: builder.mutation({
      query: (data) => ({
        url: '/products/create-product',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetAllBikesQuery, useAddBikeMutation } = bikeApi;
