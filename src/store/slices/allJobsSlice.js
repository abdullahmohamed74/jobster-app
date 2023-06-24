import { createSlice } from '@reduxjs/toolkit';
import { getAllJobs } from '../thunks/getAllJobs';
import { getStats } from '../thunks/getStats';
import { toast } from 'react-toastify';

const initialFiltersState = {
  searchTerm: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
  // use them in get allJobs request
  isLoading: false,
  jobs: [],
  // use them in pagination
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  // use them in stats request
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,

  reducers: {
    showLoading(state) {
      state.isLoading = true;
    },
    hideLoading(state) {
      state.isLoading = true;
    },

    handleFiltersChange(state, action) {
      const { name, value } = action.payload;
      // every time we change filter value reset the page num to 1
      state.page = 1;
      state[name] = value;
    },

    clearFilters(state, action) {
      return { ...state, ...initialFiltersState };
    },

    changePageNum(state, action) {
      state.page = action.payload;
    },

    clearAllJobsSlice(state, action) {
      return initialState;
    },
  },

  extraReducers(builder) {
    // get all jobs functionality
    builder.addCase(getAllJobs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllJobs.fulfilled, (state, action) => {
      const { jobs, numOfPages, totalJobs } = action.payload;
      state.isLoading = false;
      state.jobs = jobs;
      state.numOfPages = numOfPages;
      state.totalJobs = totalJobs;
    });
    builder.addCase(getAllJobs.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });

    // get stats functionality
    builder.addCase(getStats.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getStats.fulfilled, (state, action) => {
      const { defaultStats, monthlyApplications } = action.payload;
      state.isLoading = false;
      state.stats = defaultStats;
      state.monthlyApplications = monthlyApplications;
    });
    builder.addCase(getStats.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });
  },
});

export const {
  hideLoading,
  showLoading,
  handleFiltersChange,
  clearFilters,
  changePageNum,
  clearAllJobsSlice,
} = allJobsSlice.actions;
export default allJobsSlice.reducer;
