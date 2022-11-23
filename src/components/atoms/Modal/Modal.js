import React, { useContext } from "react";
import { createPortal } from "react-dom";
import CartImg from "../CartImg/CartImg";
import { ModalBody } from "./Modal.styles";
import { ModalContext } from "../../../providers/ContextProviders";

const Modal = () => {
  const { modalState, modalMessage } = useContext(ModalContext);

  return createPortal(
    <ModalBody style={modalState ? { top: "2em" } : {}}>
      <CartImg />
      <p>{modalMessage}</p>
    </ModalBody>,
    document.getElementById("modal")
  );
};

export default Modal;
