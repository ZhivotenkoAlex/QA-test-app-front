export const getUserEmail = state => state.auth.user.email;

export const getIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getLogInPending = state => state.auth.logInPending;
export const getLogInError = state => state.auth.logInError;

export const getRegisterPending = state => state.auth.registerPending;
export const getRegisterSucceed = state => state.auth.registerSucceed;
export const getRegisterError = state => state.auth.registerError;

export const getLogOutPending = state => state.auth.logOutPending;

export const getEmailVerifyResponse = state => state.auth.emailVerifyResponse;
