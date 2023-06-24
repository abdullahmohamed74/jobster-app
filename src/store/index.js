import { configureStore } from '@reduxjs/toolkit';
import userReducer, { toggleSidebar, logoutUser } from './slices/userSlice';
import jobReducer, {
  handleChange,
  clearValues,
  setEditJob,
} from './slices/jobSlice';

import allJobsReducer, {
  handleFiltersChange,
  clearFilters,
  changePageNum,
} from './slices/allJobsSlice';

export * from './thunks/userLogin';
export * from './thunks/userRegister';
export * from './thunks/userUpdate';
export * from './thunks/createJob';
export * from './thunks/getAllJobs';
export * from './thunks/deleteJob';
export * from './thunks/editJob';
export * from './thunks/getStats';
export * from './thunks/clearStore';

const store = configureStore({
  reducer: {
    user: userReducer,
    job: jobReducer,
    allJobs: allJobsReducer,
  },
});

export {
  store,
  toggleSidebar,
  logoutUser,
  handleChange,
  clearValues,
  setEditJob,
  handleFiltersChange,
  clearFilters,
  changePageNum,
};
