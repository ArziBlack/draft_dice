import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://dice-draft-service.onrender.com/api/v1';

export const get_home_contents = createAsyncThunk(
  'dice/home',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/`);
      return response.data;
    } catch (err) {
      const error = err.response
        ? err.response.data
        : err.message || 'An unknown error occurred';
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const get_library_contents = createAsyncThunk(
  'dice/library',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/`);
      return response.data;
    } catch (err) {
      const error = err.response
        ? err.response.data
        : err.message || 'An unknown error occurred';
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const checkSubscriptionStatus = createAsyncThunk(
  'dice/checkSubscriptionStatus',
  async ({accessToken, channelId}, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${BASE_URL}/`, {
        accessToken,
        channelId,
      });
      return response.data.subscribed;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const thunks = {
  get_home_contents,
  get_library_contents,
  checkSubscriptionStatus,
};

export default thunks;
