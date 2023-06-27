import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import profileReducer from "./reducer/profileReducer";
import authReducer from "./reducer/authReducer";

export const store = configureStore({
  reducer: {
    changeModal: userReducer,
    changeProfileEdit: profileReducer,
    authUser: authReducer,
  },
});
