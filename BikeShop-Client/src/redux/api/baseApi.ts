import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { logout, setUser } from '../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api/v1',
  credentials: 'include', // set cookies in the browser
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token; // token from redux state

    if (token) {
      headers.set('authorization', `${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  // check if unauthorized
  if (result?.error?.status === 401) {
    console.log('sending refresh token');

    const res = await fetch(
      'http://localhost:5000/api/v1/authRouter/refresh-token',
      {
        method: 'POST',
        credentials: 'include',
      }
    );

    const data = await res.json();

    // check if refreshToken is expired, logout user
    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken, // set new accessToken
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
