import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

function setAuthHeader(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
function clearAuthHeader(token) {
  delete axios.defaults.headers.common["Authorization"];
}

export const register = createAsyncThunk(
  "auth/register",
  async (value, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", value);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (value, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", value);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logout = createAsyncThunk("auth/logout ", async (_, thunkAPI) => {
  try {
    const response = await axios.post("/users/logout ");
    clearAuthHeader();
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh ",
  async (_, { thunkAPI, getState }) => {
    try {
      const { auth } = getState();
      setAuthHeader(auth.token);
      const response = await axios("/users/current ");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();

      if (!state.auth.token) {
        return false;
      }
    },
  }
);
