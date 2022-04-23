import {createApi} from '@reduxjs/toolkit/query/react';
import {ENDPOINTS} from '@/Constants/endpoints';
import type * as Types from '@/Types/Placeholder';
import {baseQueryWithInterceptor} from './api';

export const placeholderApi = createApi({
  reducerPath: 'placeholderApi',
  baseQuery: baseQueryWithInterceptor,
  endpoints: builder => ({
    postsGet: builder.query<Types.TPost[], void>({
      query: () => ({
        url: ENDPOINTS.POSTS,
        method: 'GET',
      }),
    }),
    usersGet: builder.query<Types.TUser[], void>({
      query: () => ({
        url: ENDPOINTS.USERS,
        method: 'GET',
      }),
    }),
    usersPostsGet: builder.query<Types.TPost[], number>({
      query: userId => ({
        url: `${ENDPOINTS.USERS}/${userId}/posts`,
        method: 'GET',
      }),
    }),
  }),
});

export const {usePostsGetQuery, useUsersGetQuery, useUsersPostsGetQuery} =
  placeholderApi;
