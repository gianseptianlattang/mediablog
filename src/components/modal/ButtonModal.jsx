import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { closeFormModal, formModal } from "../../service/reducer/userReducer";

export const ButtonModal = (props) => {
  const dispatch = useDispatch();

  function openModalSignIn() {
    dispatch(formModal(true));
  }

  function openModalSignUp() {
    dispatch(formModal(false));
  }

  if (props.modal === "Sign Up") {
    return (
      <Box>
        <Button variant={"link"} color={"blue.500"} onClick={openModalSignUp}>
          Create one
        </Button>
      </Box>
    );
  } else if (props.modal === "Sign In") {
    return (
      <Box>
        <Button variant={"link"} color={"blue.500"} onClick={openModalSignIn}>
          Login
        </Button>
      </Box>
    );
  }
};

export const ButtonClose = () => {
  const dispatch = useDispatch();
  const closeButton = () => {
    dispatch(closeFormModal());
  };
  return (
    <Box>
      <Button onClick={closeButton}>X</Button>
    </Box>
  );
};
