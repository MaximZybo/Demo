import {FetchArgs, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BaseQueryApi} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {addRequest, removeRequest} from '@/Store/Common/commonSlice';
import {navigate, goBack} from '@/Navigators/reference';
import {RootState} from '@/Store/index';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://jsonplaceholder.typicode.com/',
  prepareHeaders: async headers => {
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');

    return headers;
  },
});

export const baseQueryWithInterceptor = async (
  args: FetchArgs,
  api: BaseQueryApi,
  extraOptions: any,
) => {
  const {common: stateCommonInitial} = api.getState() as RootState;
  const pendingRequestsInitial = stateCommonInitial.pendingRequests;

  if (!pendingRequestsInitial.length) {
    navigate('Loader');
  }

  const requestId = Math.random().toString();

  api.dispatch(addRequest(requestId));

  const result = await baseQuery(args, api, extraOptions);

  api.dispatch(removeRequest(requestId));

  const {common: stateCommonResult} = api.getState() as RootState;
  const pendingRequestsResult = stateCommonResult.pendingRequests;

  if (!pendingRequestsResult.length) {
    goBack();
  }

  return result;
};
