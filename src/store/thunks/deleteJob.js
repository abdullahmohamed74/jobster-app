import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllJobs } from './getAllJobs';
import { showLoading, hideLoading } from '../slices/allJobsSlice';
import customAxios, {
  checkForUnauthorizedResponse,
} from '../../utils/customAxios';

const deleteJob = createAsyncThunk('job/delete', async (jobId, thunkAPI) => {
  // show loading spinner in allJobs page after clicking on delete button
  // before delete request
  thunkAPI.dispatch(showLoading());
  try {
    // delete request
    const response = await customAxios.delete(`/jobs/${jobId}`, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    //after delete request do another get request to get updated jobs
    thunkAPI.dispatch(getAllJobs());
    // the payload in case of fulfilled
    return response.data.msg;
  } catch (error) {
    // in case of error hide loading spinner in allJobs page
    thunkAPI.dispatch(hideLoading());
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
});

export { deleteJob };
