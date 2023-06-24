import axios from 'axios';
import { clearStore } from '../store';

const customAxios = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

function checkForUnauthorizedResponse(error, thunkAPI) {
  // if the user is Unauthorized then log out
  if (error.response.status === 401) {
    setTimeout(() => {
      thunkAPI.dispatch(clearStore());
    }, 2000);
    // the payload in case of rejected
    return thunkAPI.rejectWithValue('Unauthorized! logging out...');
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
}

export { checkForUnauthorizedResponse };
export default customAxios;
