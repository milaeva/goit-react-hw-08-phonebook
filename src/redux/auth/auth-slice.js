import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isGetCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.getCurrentUser.pending](state, _) {
      state.isGetCurrentUser = true;
    },

    [authOperations.getCurrentUser.fulfilled](state, { payload }) {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.isLoggedIn = true;
      state.isGetCurrentUser = false;
    },

    [authOperations.getCurrentUser.rejected](state, _) {
      state.isGetCurrentUser = false;
    },

    [authOperations.logOut.fulfilled](state, _) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
