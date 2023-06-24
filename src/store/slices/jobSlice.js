import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { createJob } from '../thunks/createJob';
import { deleteJob } from '../thunks/deleteJob';
import { editJob } from '../thunks/editJob';

const initialState = {
  isLoading: false,
  // 5 state to control 5 inputs
  position: '',
  company: '',
  jobLocation: '',
  jobType: 'full-time',
  status: 'pending',
  // options for select inputs
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  statusOptions: ['interview', 'declined', 'pending'],
  isEditing: false,
  editJobId: '',
};

const jobSlice = createSlice({
  name: 'job',
  initialState,

  reducers: {
    // to control the inputs
    handleChange(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },

    // to reset form inputs
    clearValues(state, action) {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || '',
      };
    },

    setEditJob(state, action) {
      return { ...state, isEditing: true, ...action.payload };
    },
  },

  // add job functionality
  extraReducers(builder) {
    builder.addCase(createJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createJob.fulfilled, (state) => {
      state.isLoading = false;
      toast.success('Job Added');
    });
    builder.addCase(createJob.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });

    // delete job functionality
    builder.addCase(deleteJob.fulfilled, (_, action) => {
      toast.success(action.payload);
    });
    builder.addCase(deleteJob.rejected, (_, action) => {
      toast.error(action.payload);
    });

    // edit job functionality
    builder.addCase(editJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editJob.fulfilled, (state) => {
      state.isLoading = false;
      toast.success('Job Modified...');
    });
    builder.addCase(editJob.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });
  },
});

export const { handleChange, clearValues, setEditJob } = jobSlice.actions;
export default jobSlice.reducer;
