import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000/api';

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
        token.set(response.data.data.accessToken);
        return response.data;
      }

      return thunkAPI.rejectWithValue(response.statusText);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const googleRegister = createAsyncThunk(
  'auth/googleRegister',
  async (credentials, thunkAPI) => {
    token.set(credentials.token);
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

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('auth/login', credentials);

      if (response.status === 200) {
        token.set(response.data.data.accessToken);
        return response.data;
      }

      return thunkAPI.rejectWithValue(response.statusText);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (error) {}
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

      return { ...data, email: response.data.email };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
