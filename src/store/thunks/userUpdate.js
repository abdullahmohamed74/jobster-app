import { createAsyncThunk } from '@reduxjs/toolkit';
import customAxios, {
  checkForUnauthorizedResponse,
} from '../../utils/customAxios';

const userUpdate = createAsyncThunk('user/update', async (user, thunkAPI) => {
  try {
    const response = await customAxios.patch('/auth/updateUser', user, {
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

export { userUpdate };
