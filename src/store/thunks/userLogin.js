import { createAsyncThunk } from '@reduxjs/toolkit';
import customAxios from '../../utils/customAxios';

const userLogin = createAsyncThunk('user/login', async (user, thunkAPI) => {
  try {
    const response = await customAxios.post('/auth/login', user);
    // the payload in case of fulfilled
    return response.data;
  } catch (error) {
    // the payload in case of rejected
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

export { userLogin };
