import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { ModalLogin } from "./ModalLogin";
import { ModalRegist } from "./ModalRegist";
import { useSelector } from "react-redux";

export function ModalLoginRegis({ isOpen, onClose }) {
  const isLogin = useSelector((state) => state.changeModal.modalUser);
  const closeModal = useSelector((state) => state.changeModal.closeModal);
  console.log(closeModal);
  return (
    <Modal isOpen={closeModal} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <Text>{isLogin}</Text>
        {isLogin ? <ModalLogin /> : <ModalRegist />}
      </ModalContent>
    </Modal>
  );
}
