import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { ModalLoginRegis } from "../modal/_ModalLoginRegist";
import { useDispatch } from "react-redux";
import { closeFormModal, formModal } from "../../service/reducer/userReducer";

export const ButtonSolidNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  function openModalSignIn() {
    onOpen();
    dispatch(formModal(true));
    dispatch(closeFormModal());
  }
  return (
    <Box>
      <Button
        onClick={openModalSignIn}
        borderRadius="full"
        colorScheme="blackAlpha"
        size="md"
      >
        Start Writing
      </Button>
      <ModalLoginRegis isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export const ButtonLinkNavbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  function openModalSignUp() {
    onOpen();
    dispatch(formModal(false));
    dispatch(closeFormModal());
  }

  function openModalSignIn() {
    onOpen();
    dispatch(formModal(true));
    dispatch(closeFormModal());
  }

  if (props.modal === "Sign Up") {
    return (
      <Box>
        <Button onClick={openModalSignUp} color="black" variant="link">
          {props.modal}
        </Button>
        <ModalLoginRegis isOpen={isOpen} onClose={onClose} />
      </Box>
    );
  } else if (props.modal === "Sign In") {
    return (
      <Box>
        <Button onClick={openModalSignIn} color="black" variant="link">
          {props.modal}
        </Button>
        <ModalLoginRegis isOpen={isOpen} onClose={onClose} />
      </Box>
    );
  }
};
