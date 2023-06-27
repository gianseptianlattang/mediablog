import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { ModalLogin } from "./ModalLogin";
import { ModalRegist } from "./ModalRegist";
import { useDispatch, useSelector } from "react-redux";
import { closeFormModal } from "../../service/reducer/userReducer";

export function ModalLoginRegis({ onClose }) {
  const modal = useSelector((state) => state.changeModal.modalUser);
  const closeModal = useSelector((state) => state.changeModal.closeModal);
  const dispatch = useDispatch();
  const closeButton = () => {
    dispatch(closeFormModal());
  };
  return (
    <Modal isOpen={closeModal} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton onClick={closeButton} />
        <Text>{modal}</Text>
        {modal ? <ModalLogin /> : <ModalRegist />}
      </ModalContent>
    </Modal>
  );
}
