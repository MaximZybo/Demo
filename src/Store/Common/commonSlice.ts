import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CommonState} from './types';

const initialState: CommonState = {
  pendingRequests: [],
  asyncError: '',
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    addRequest: (state, action: PayloadAction<string>) => {
      state.pendingRequests.push(action.payload);
    },
    removeRequest: (state, action: PayloadAction<string>) => {
      state.pendingRequests = state.pendingRequests.filter(
        value => action.payload !== value,
      );
    },
    addError: (state, action: PayloadAction<string>) => {
      state.asyncError = state.asyncError
        ? `${state.asyncError}\n- ${action.payload}`
        : `- ${action.payload}`;
    },
    clearError: state => {
      state.asyncError = '';
    },
    resetCommonSlice: () => initialState,
  },
});

export const {
  addRequest,
  removeRequest,
  addError,
  clearError,
  resetCommonSlice,
} = commonSlice.actions;

export default commonSlice.reducer;
