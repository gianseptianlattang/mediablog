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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { profileEdit } from "../../service/reducer/profileReducer";
import { userLogin } from "../../service/reducer/authReducer";

export const ProfileNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

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
          <Avatar
            src={
              "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
          />
        </MenuButton>
        <MenuList>
          <MenuItem as="a" href="/profile" onClick={editFalse}>
            Profile
          </MenuItem>
          <MenuItem as="a" href="/profile" onClick={editTrue}>
            Edit Profile
          </MenuItem>
          <MenuItem as="a" href="#">
            Library
          </MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Wrap>
  );
};
