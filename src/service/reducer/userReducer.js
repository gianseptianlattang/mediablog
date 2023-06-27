import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalUser: false,
  closeModal: false,
  isLogin: localStorage.getItem("tokenLogin"),
};

export const UserReducer = createSlice({
  name: "UserReducer",
  initialState,
  reducers: {
    formModal: (state, action) => {
      state.modalUser = action.payload;
    },
    closeFormModal: (state, action) => {
      state.closeModal = !state.closeModal;
    },
    userLogin: (state, action) => {
      localStorage.getItem("tokenLogin")
        ? (state.isLogin = true)
        : (state.isLogin = false);
    },
  },
});

export const { formModal, closeFormModal, userLogin } = UserReducer.actions;
export default UserReducer.reducer;
