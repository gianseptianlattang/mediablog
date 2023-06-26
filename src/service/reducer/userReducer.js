import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalUser: false,
  closeModal: false,
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
  },
});

export const { formModal, closeFormModal } = UserReducer.actions;
export default UserReducer.reducer;
