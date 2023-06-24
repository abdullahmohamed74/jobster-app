import { createAsyncThunk } from '@reduxjs/toolkit';
import customAxios, {
  checkForUnauthorizedResponse,
} from '../../utils/customAxios';
import { clearValues } from '../slices/jobSlice';

const createJob = createAsyncThunk('job/create', async (job, thunkAPI) => {
  try {
    const response = await customAxios.post('/jobs', job, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    // reset the inputs after the request
    thunkAPI.dispatch(clearValues());
    // the payload in case of fulfilled
    return response.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
});

export { createJob };
