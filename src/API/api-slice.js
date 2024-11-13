import {createSlice} from '@reduxjs/toolkit';
import {
  checkSubscriptionStatus,
  get_home_contents,
  get_library_contents,
} from './api-thunk';

const initialState = {
  is_loading: false,
  is_error: false,
  message: '',
  error: null,
  home_data: [],
  library_data: [],
  theme_mode: 'light',
  is_subscribed: false,
};

const app_slice = createSlice({
  name: 'dice',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme_mode = state.theme_mode === 'light' ? 'dark' : 'light';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(get_home_contents.pending, state => {
        state.is_loading = true;
        state.error = null;
        state.is_error = false;
        state.message = '';
      })
      .addCase(get_home_contents.fulfilled, (state, action) => {
        state.is_loading = false;
        state.home_data = action.payload;
        state.message = action.payload.message;
      })
      .addCase(get_home_contents.rejected, (state, action) => {
        state.is_loading = false;
        state.is_error = true;
        state.error = action.error;
      })
      .addCase(get_library_contents.pending, state => {
        state.is_loading = true;
        state.error = null;
        state.is_error = false;
        state.message = '';
      })
      .addCase(get_library_contents.fulfilled, (state, action) => {
        state.is_loading = false;
        state.library_data = action.payload;
        state.message = action.payload.message;
      })
      .addCase(get_library_contents.rejected, (state, action) => {
        state.is_loading = false;
        state.is_error = true;
        state.error = action.error;
      })
      .addCase(checkSubscriptionStatus.pending, state => {
        state.is_loading = true;
        state.error = null;
        state.is_error = false;
        state.message = '';
      })
      .addCase(checkSubscriptionStatus.fulfilled, (state, action) => {
        state.is_loading = false;
        state.is_subscribed = action.payload;
      })
      .addCase(checkSubscriptionStatus.rejected, (state, action) => {
        state.is_loading = false;
        state.error = action.payload;
      });
  },
});

export const {toggleTheme} = app_slice.actions;
export default app_slice.reducer;
