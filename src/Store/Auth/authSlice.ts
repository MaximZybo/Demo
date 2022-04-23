import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from './types';

const initialState: AuthState = {
  isSignedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: state => {
      state.isSignedIn = true;
    },
    signOut: state => {
      state.isSignedIn = false;
    },
  },
});

export const {signIn, signOut} = authSlice.actions;

export default authSlice.reducer;
