import { createSlice } from "@reduxjs/toolkit";
import { apiRegister, apiLogin, isRefresh, logOut } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiRegister.pending, (state) => {
        state.error = null;
      })
      .addCase(apiRegister.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiRegister.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(apiLogin.pending, (state) => {
        state.error = null;
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiLogin.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(isRefresh.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(isRefresh.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(isRefresh.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(logOut.pending, (state) => {
        state.error = null;
      })
      .addCase(logOut.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
