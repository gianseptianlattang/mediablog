import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataProfile: localStorage.getItem("profileEdit"),
};

export const ProfileReducer = createSlice({
  name: "ProfileReducer",
  initialState,
  reducers: {
    profileEdit: (state, action) => {
      localStorage.setItem("profileEdit", action.payload);
      state.dataProfile = action.payload;
    },
  },
});

export const { profileEdit } = ProfileReducer.actions;
export default ProfileReducer.reducer;
