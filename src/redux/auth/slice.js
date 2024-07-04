import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";
import { useSelector } from "react-redux";
import { selectToken } from "./selectors";

const authInitialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
        state.user = {
          name: null,
          email: null,
        };
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(refreshUser.fulfilled, () => {
        console.log("All is ok");
      })
      .addCase(refreshUser.rejected, (state) => {
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
