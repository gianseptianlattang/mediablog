import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import profileReducer from "./reducer/profileReducer";

export const store = configureStore({
  reducer: {
    changeModal: userReducer,
    changeProfileEdit: profileReducer,
  },
});
