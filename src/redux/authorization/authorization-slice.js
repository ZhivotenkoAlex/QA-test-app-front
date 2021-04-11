import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  googleRegister,
} from './authorization-operations';

const initialState = {
  user: { email: null },
  token: null,
  isFetchingCurrentUser: false,
  isLoggedIn: false,
  registerPending: false,
  registerError: null,
  logInPending: false,
  logInError: null,
  logOutPending: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.registerPending = true;
      state.registerError = null;
    },
    [register.fulfilled](state, action) {
      state.user = { email: action.payload.data.user.email };
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
      state.registerPending = false;
    },
    [register.rejected](state, action) {
      state.registerPending = false;
      state.registerError = action.payload;
    },
    [googleRegister.pending](state) {
      state.registerPending = true;
      state.registerError = null;
    },
    [googleRegister.fulfilled](state, action) {
      state.user = { email: action.payload.data.email };
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.registerPending = false;
    },
    [googleRegister.rejected](state, action) {
      state.registerPending = false;
      state.registerError = action.payload;
    },

    [logIn.pending](state) {
      state.logInPending = true;
      state.logInError = null;
    },
    [logIn.fulfilled](state, action) {
      state.user = { email: action.payload.data.user.email };
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
      state.logInPending = false;
    },
    [logIn.rejected](state, action) {
      state.logInPending = false;
      state.logInError = action.payload;
    },
    [logOut.pending](state) {
      state.logOutPending = true;
    },
    [logOut.fulfilled](state) {
      state.user = { email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.logOutPending = false;
    },
    [logOut.rejected](state) {
      state.logOutPending = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = { email: action.payload.data.email };
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = true;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});
