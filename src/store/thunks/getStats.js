import { createAsyncThunk } from '@reduxjs/toolkit';
import customAxios, {
  checkForUnauthorizedResponse,
} from '../../utils/customAxios';

const getStats = createAsyncThunk('get/stats', async (_, thunkAPI) => {
  try {
    const response = await customAxios.get('/jobs/stats', {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
});

export { getStats };
