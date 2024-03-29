import React from "react";
import { createPortal } from "react-dom";
import CartImg from "../CartImg/CartImg";
import { ModalBody } from "./Modal.styles";
import { useModal } from "../../../providers/ModalContext";

const Modal = () => {
  const { modalState, modalMessage } = useModal();

  return createPortal(
    <ModalBody style={modalState ? { top: "2em" } : {}}>
      <CartImg />
      <p>{modalMessage}</p>
    </ModalBody>,
    document.getElementById("modal")
  );
};

export default Modal;
