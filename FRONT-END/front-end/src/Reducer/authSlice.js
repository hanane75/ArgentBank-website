import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// URL de l'API
const API_URL = 'http://localhost:3001/api/v1/user/login';

// Thunk pour gérer la connexion
export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }, thunkAPI) => {
    try {
      // Étape 1 : Faire la requête de login pour obtenir le token
      const response = await axios.post(API_URL, {
        email: username,
        password: password,
      });

      const token = response.data.body.token;

      // Étape 2 : Utiliser le token pour récupérer les infos du profil
      const profileResponse = await axios.post(
        'http://localhost:3001/api/v1/user/profile',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const userProfile = profileResponse.data.body;

      // Étape 3 : Retourner les informations utilisateur
      return { 
        token, 
        username: userProfile.email, 
        pseudo: userProfile.userName, 
        firstName: userProfile.firstName, 
        lastName: userProfile.lastName 
      };

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
    
      builder.addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = {
          token: action.payload.token,
          username: action.payload.username,
          pseudo: action.payload.pseudo,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName
        };
        state.error = null;
      });
  },
});

export const { logout, updatePseudo } = authSlice.actions;

export default authSlice.reducer;
