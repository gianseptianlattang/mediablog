import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {
    id: null,
    username: "",
    email: "",
    phone: "",
    imgProfile: "",
    isVerified: false,
    role: false,
  },
  isLogin: localStorage.getItem("tokenLogin"),
};

export const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, username, email, phone, imgProfile, isVerified, role } =
        action.payload;
      state.user = {
        id,
        username,
        email,
        phone,
        imgProfile,
        isVerified,
        role,
      };
    },
    userLogin: (state, action) => {
      localStorage.getItem("tokenLogin")
        ? (state.isLogin = true)
        : (state.isLogin = false);
    },
  },
});

export const keepLogin = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("tokenLogin");

    if (token) {
      try {
        const res = await axios.get(
          "https://minpro-blog.purwadhikabootcamp.com/api/auth/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(setUser(res.data));
        dispatch(userLogin());
      } catch (err) {
        console.log(err);
        localStorage.clear();
      }
    }
  };
};

export const { loginSuccess, setUser, userLogin } = AuthReducer.actions;

export default AuthReducer.reducer;
