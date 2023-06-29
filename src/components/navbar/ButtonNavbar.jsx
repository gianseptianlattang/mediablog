import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { ModalLoginRegis } from "../modal/_ModalLoginRegist";
import { useDispatch, useSelector } from "react-redux";
import { closeFormModal, formModal } from "../../service/reducer/userReducer";
import { useNavigate } from "react-router-dom";

export const ButtonStartWriting = () => {
  const isLogin = useSelector((state) => state.authUser.isLogin);
  const { isOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function openModalSignIn() {
    dispatch(formModal(true));
    dispatch(closeFormModal());
  }

  function login() {
    navigate("/create");
  }
  return (
    <Box>
      <Button
        onClick={isLogin ? login : openModalSignIn}
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

export const ButtonLinkNavbar = () => {
  const { onClose } = useDisclosure();
  const dispatch = useDispatch();

  function openModalSignUp() {
    dispatch(formModal(false));
    dispatch(closeFormModal());
  }

  function openModalSignIn() {
    dispatch(formModal(true));
    dispatch(closeFormModal());
  }

  return (
    <Box>
      <Flex gap={5}>
        <Box>
          <Button onClick={openModalSignIn} color="black" variant="link">
            Sign In
          </Button>
          <ModalLoginRegis onClose={onClose} />
        </Box>
        <Box>
          <Button onClick={openModalSignUp} color="black" variant="link">
            Sign Up
          </Button>
          <ModalLoginRegis onClose={onClose} />
        </Box>
      </Flex>
    </Box>
  );
};
