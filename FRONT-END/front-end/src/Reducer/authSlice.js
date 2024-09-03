import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// URL de l'API
const API_URL = 'http://localhost:3001/api/v1/user/login';

// Thunk pour gérer la connexion
export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, {
        email: username,
        password: password,
      });

      const data = response.data.body;
      return { token: data.token, username: data.email, pseudo: 'Tony', firstName: 'Tony', lastName: 'Jarvis' };
    } catch (error) {
      return thunkAPI.rejectWithValue('Invalid credentials or network error');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    updatePseudo: (state, action) => {
      if (state.user) {
        state.user.pseudo = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const { logout, updatePseudo } = authSlice.actions;

export default authSlice.reducer;
