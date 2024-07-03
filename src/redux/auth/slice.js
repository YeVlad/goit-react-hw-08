import { createSlice } from "@reduxjs/toolkit";
import { registration } from "./operations";
registration;

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

      .addCase(registration.fulfilled, (state, action) => {
        state.token = action.token;
        state.user = action.user;
        state.isLoggedIn = true;
        console.log(action);
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.payload;
      });
    //       // POST
    //       .addCase(addContacts.pending, (state) => {
    //         state.error = null;
    //         state.loading = true;
    //       })
    //       .addCase(addContacts.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.items.push(action.payload);
    //       })
    //       .addCase(addContacts.rejected, (state, action) => {
    //         state.loading = false;
    //         state.error = action.payload;
    //       })
    //       // DELETE
    //       .addCase(deleteContacts.pending, (state) => {
    //         state.error = null;
    //         state.loading = true;
    //       })
    //       .addCase(deleteContacts.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.items = state.items.filter(
    //           (item) => item.id != action.payload.id
    //         );
    //       })
    //       .addCase(deleteContacts.rejected, (state, action) => {
    //         state.loading = false;
    //         state.error = action.payload;
    //       });
  },
});

export const authReducer = authSlice.reducer;
