import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";


// Initial state
const initialState = {};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload;
    },
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    setUserData(state, action) {
      state.user = action.payload;
    }

  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setAuthState, setAuthToken, setUserData } = authSlice.actions;

export const selectAuthState = (state) => state.auth.authState;

export default authSlice.reducer;