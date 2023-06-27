import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { keepLogin } from "../../service/reducer/authReducer";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.authUser.isLogin);

  useEffect(() => {
    dispatch(keepLogin());
    if (!isLogin) {
      navigate("/");
    }
  }, []);

  return <>{children}</>;
};

export default Auth;
