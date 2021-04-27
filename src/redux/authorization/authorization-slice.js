import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  googleRegister,
  refreshTokens,
  emailVerification,
} from './authorization-operations';

const initialState = {
  user: { email: null },
  refreshToken: null,
  isFetchingCurrentUser: false,
  isLoggedIn: false,
  registerPending: false,
  registerSucceed: null,
  registerError: null,
  logInPending: false,
  logInError: null,
  logOutPending: false,
  logOutError: null,
  refreshError: null,
  emailVerifyResponse: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.registerPending = true;
      state.registerError = null;
      state.registerSucceed = null;
    },
    [register.fulfilled](state, action) {
      state.user = { email: action.payload.data.user.email };
      state.registerPending = false;
      state.registerSucceed = true;
    },
    [register.rejected](state, action) {
      state.registerPending = false;
      state.registerSucceed = null;
      state.registerError = action.payload;
    },
    [emailVerification.pending](state) {
      state.registerSucceed = null;
      state.emailVerifyResponse = null;
    },
    [emailVerification.fulfilled](state, action) {
      state.emailVerifyResponse = action.payload.message;
    },
    [emailVerification.rejected](state, action) {
      state.emailVerifyResponse = action.payload.message;
    },
    [googleRegister.pending](state) {
      state.registerSucceed = null;
      state.registerPending = true;
      state.registerError = null;
    },
    [googleRegister.fulfilled](state, action) {
      state.user = { email: action.payload.email };
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
      state.registerPending = false;
    },
    [googleRegister.rejected](state, action) {
      state.registerPending = false;
      state.registerError = action.payload;
    },
    [logIn.pending](state) {
      state.registerSucceed = null;
      state.logInPending = true;
      state.logInError = null;
    },
    [logIn.fulfilled](state, action) {
      state.user = { email: action.payload.data.user.email };
      state.refreshToken = action.payload.data.refreshToken;
      state.isLoggedIn = true;
      state.logInPending = false;
    },
    [logIn.rejected](state, action) {
      state.logInPending = false;
      state.logInError = action.payload;
    },
    [logOut.pending](state) {
      state.registerSucceed = null;
      state.logOutPending = true;
      state.logOutError = null;
    },
    [logOut.fulfilled](state) {
      state.user = { email: null };
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.logOutPending = false;
    },
    [logOut.rejected](state, action) {
      state.logOutPending = false;
      state.logOutError = action.payload;
    },
    [fetchCurrentUser.pending](state) {
      state.registerSucceed = null;
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = { email: action.payload.email };
      state.refreshToken = action.payload.data.refreshToken;
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = true;
    },
    [fetchCurrentUser.rejected](state) {
      state.refreshToken = null;
      state.isFetchingCurrentUser = false;
    },
    [refreshTokens.fulfilled](state, action) {
      state.registerSucceed = null;
      state.refreshToken = action.payload.data.refreshToken;
    },
    [refreshTokens.rejected](state, action) {
      state.user = { email: null };
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.refreshError = action.payload;
    },
  },
});
