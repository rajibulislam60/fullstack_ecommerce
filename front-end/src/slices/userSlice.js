import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("userdata")
    ? JSON.parse(localStorage.getItem("userdata"))
    : null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoginInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userLoginInfo } = userSlice.actions;

export default userSlice.reducer;