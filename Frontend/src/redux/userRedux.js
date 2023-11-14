import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isAdmin: false, // new field added
    isFetching: false,
    username: null,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.username = action.payload.username;
      state.isAdmin = action.payload.isAdmin; // set isAdmin field
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
     logout: (state) => {
    state.currentUser = null;
    state.username = null;
    state.isAdmin = false; // reset isAdmin field
  },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
