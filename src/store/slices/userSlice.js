import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { userRegister } from '../thunks/userRegister';
import { userLogin } from '../thunks/userLogin';
import { userUpdate } from '../thunks/userUpdate';
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    user: getUserFromLocalStorage(),
    isSidebarOpen: false,
  },

  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    // log out functionality
    logoutUser(state, action) {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (action.payload) {
        toast.success(action.payload);
      }
    },
  },

  extraReducers(builder) {
    // register functionality
    builder.addCase(userRegister.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      const { user } = action.payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Hello there ${user.name}`);
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });

    // login functionality
    builder.addCase(userLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      const { user } = action.payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Welcom back ${user.name}`);
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });

    // update functionality
    builder.addCase(userUpdate.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userUpdate.fulfilled, (state, action) => {
      const { user } = action.payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`User Updated`);
    });
    builder.addCase(userUpdate.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
