import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const registration = createAsyncThunk(
  "auth/reg",
  async (value, thunkAPI) => {
    try {
      console.log(value);
      const response = await axios.post("/users/signup", value);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
