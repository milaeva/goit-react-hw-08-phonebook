import phoneBookApi from 'service/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    return await phoneBookApi.registerNewUser(credentials);
  } catch (error) {
    console.log(error);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    return await phoneBookApi.loginUser(credentials);
  } catch (error) {
    console.log(error);
  }
});

const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) {
        return thunkAPI.rejectWithValue();
      }
      return await phoneBookApi.getCurrentUser(token);
    } catch (error) {
      console.log(error);
    }
  },
);

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    return await phoneBookApi.logOutUser();
  } catch (error) {
    console.log(error);
  }
});

const authOperations = { register, logIn, getCurrentUser, logOut };

export default authOperations;
