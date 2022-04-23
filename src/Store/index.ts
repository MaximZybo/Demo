import {configureStore} from '@reduxjs/toolkit';
import {placeholderApi} from '@/Services/placeholder';
import authSlice from './Auth/authSlice';
import commonSlice from './Common/commonSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    common: commonSlice,
    [placeholderApi.reducerPath]: placeholderApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(placeholderApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
