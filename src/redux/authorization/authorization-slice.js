import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  googleRegister,
  refreshTokens,
} from './authorization-operations';

const initialState = {
  user: { email: null },
  refreshToken: null,
  // accessToken: null,
  isFetchingCurrentUser: false,
  isLoggedIn: false,
  registerPending: false,
  registerError: null,
  logInPending: false,
  logInError: null,
  logOutPending: false,
  logOutError: null,
  refreshError: null,
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
      state.refreshToken = action.payload.data.refreshToken;
      // state.accessToken = action.payload.data.accessToken;
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
      state.user = { email: action.payload.email };
      state.refreshToken = action.payload.refreshToken;
      // state.accessToken = action.payload.accessToken;
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
      state.refreshToken = action.payload.data.refreshToken;
      // state.accessToken = action.payload.data.accessToken;
      state.isLoggedIn = true;
      state.logInPending = false;
    },
    [logIn.rejected](state, action) {
      state.logInPending = false;
      state.logInError = action.payload;
    },
    [logOut.pending](state) {
      state.logOutPending = true;
      state.logOutError = null;
    },
    [logOut.fulfilled](state) {
      state.user = { email: null };
      state.refreshToken = null;
      // state.accessToken = null;
      state.isLoggedIn = false;
      state.logOutPending = false;
    },
    [logOut.rejected](state, action) {
      state.logOutPending = false;
      state.logOutError = action.payload;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = { email: action.payload.email };
      state.refreshToken = action.payload.data.refreshToken;
      // state.accessToken = action.payload.data.accessToken;
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = true;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
    [refreshTokens.fulfilled](state, action) {
      state.refreshToken = action.payload.data.refreshToken;
      // state.accessToken = action.payload.data.accessToken;
    },
    [refreshTokens.rejected](state, action) {
      state.refreshError = action.payload;
    },
  },
});
