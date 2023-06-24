import { createAsyncThunk } from '@reduxjs/toolkit';
import customAxios, {
  checkForUnauthorizedResponse,
} from '../../utils/customAxios';

const getAllJobs = createAsyncThunk('get/allJobs', async (_, thunkAPI) => {
  const { searchTerm, searchStatus, searchType, sort, page } =
    thunkAPI.getState().allJobs;

  let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
  if (searchTerm) {
    url = url + `&search=${searchTerm}`;
  }

  try {
    const response = await customAxios.get(url, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    // the payload in case of fulfilled
    return response.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
});

export { getAllJobs };
