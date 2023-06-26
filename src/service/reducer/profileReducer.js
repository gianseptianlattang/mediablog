import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataProfile: false,
};

export const ProfileReducer = createSlice({
  name: "ProfileReducer",
  initialState,
  reducers: {
    profileEdit: (state, action) => {
      state.dataProfile = action.payload;
    },
  },
});

export const { profileEdit } = ProfileReducer.actions;
export default ProfileReducer.reducer;
