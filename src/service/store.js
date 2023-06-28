import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import profileReducer from "./reducer/profileReducer";
import authReducer from "./reducer/authReducer";
import blogReducer from "./reducer/blogReducer";

export const store = configureStore({
  reducer: {
    changeModal: userReducer,
    changeProfileEdit: profileReducer,
    authUser: authReducer,
    blogUser: blogReducer,
  },
});
