import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Wrap,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profileEdit } from "../../service/reducer/profileReducer";
import { userLogin } from "../../service/reducer/authReducer";

const baseUrl = "https://minpro-blog.purwadhikabootcamp.com/";

export const ProfileNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const { imgProfile } = useSelector((state) => state.authUser.user);

  const handleLogoutToast = () => {
    toast({
      description: "Successfully logged out",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };
  const logout = () => {
    navigate("/");
    handleLogoutToast();
    localStorage.clear();
    dispatch(userLogin());
  };

  const editTrue = () => {
    dispatch(profileEdit(true));
  };
  const editFalse = () => {
    dispatch(profileEdit(false));
  };

  return (
    <Wrap>
      <Menu>
        <MenuButton
          as={"Button"}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
        >
          <Avatar src={`${baseUrl}${imgProfile}`} />
        </MenuButton>
        <MenuList>
          <MenuItem as="a" href="/profile" onClick={editFalse}>
            Profile
          </MenuItem>
          <MenuItem as="a" href="/profile" onClick={editTrue}>
            Edit Profile
          </MenuItem>
          <MenuItem as="a" href="/liked">
            Library
          </MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Wrap>
  );
};
