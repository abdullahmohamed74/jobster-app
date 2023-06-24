import { createAsyncThunk } from '@reduxjs/toolkit';
import customAxios, {
  checkForUnauthorizedResponse,
} from './../../utils/customAxios';
import { clearValues } from '../slices/jobSlice';

const editJob = createAsyncThunk(
  'job/edit',
  async ({ jobId, job }, thunkAPI) => {
    try {
      const response = await customAxios.patch(`/jobs/${jobId}`, job, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      // in case of success reset form inputs
      thunkAPI.dispatch(clearValues());
      // the payload in case of fulfilled
      return response.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error, thunkAPI);
    }
  }
);

export { editJob };
