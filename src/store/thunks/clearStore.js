import { createAsyncThunk } from '@reduxjs/toolkit';
import { logoutUser } from '../slices/userSlice';
import { clearValues } from '../slices/jobSlice';
import { clearAllJobsSlice } from '../slices/allJobsSlice';

const clearStore = createAsyncThunk('store/clear', async (msg, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(msg));
    thunkAPI.dispatch(clearValues());
    thunkAPI.dispatch(clearAllJobsSlice());

    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
});

export { clearStore };
