import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://safe-bayou-94848.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/register', credentials);

      if (response.status === 201) {
        return response.data;
      }

      return thunkAPI.rejectWithValue(response.statusText);
    } catch ({ response }) {
      toast.error(response.data.message, {
        position: 'top-center',
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return thunkAPI.rejectWithValue(response);
    }
  },
);

export const emailVerification = createAsyncThunk(
  'auth/emailVerify',
  async (verificationToken, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/verify', { verificationToken });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const googleRegister = createAsyncThunk(
  'auth/googleRegister',
  async (credentials, thunkAPI) => {
    token.set(credentials.access);
    try {
      const { data } = await axios.get('user/info');

      return {
        refreshToken: credentials.token,
        email: data.data.email,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('auth/login', credentials);

      if (response.status === 200) {
        token.set(response.data.data.accessToken);
        return response.data;
      }

      return thunkAPI.rejectWithValue({ response });
    } catch ({ response }) {
      toast.error(response.data.message, {
        position: 'top-center',
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return thunkAPI.rejectWithValue(response);
    }
  },
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.refreshToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('auth/refresh-token');

      token.set(data.data.accessToken);

      const response = await axios.get('user/info');

      return { ...data, email: response.data.data.email };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const refreshTokens = createAsyncThunk(
  'auth/tokens',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.refreshToken;

    if (persistedToken === null) {
      token.unset();
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('auth/refresh-token');

      token.set(data.data.accessToken);

      return { ...data };
    } catch (error) {
      token.unset();
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
