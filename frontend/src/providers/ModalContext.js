import React, { useState, createContext } from "react";

export const Modals = createContext({
  modalState: false,
  handleModalState: () => {},
  modalMessage: "",
});

const ModalContext = ({ children }) => {
  const [modalState, setModalState] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleModalState = (message) => {
    setModalMessage(message);
    setModalState(true);
    setTimeout(() => {
      setModalState(false);
    }, 5000);
  };

  return (
    <Modals.Provider
      value={{
        modalState,
        handleModalState,
        modalMessage,
        setModalMessage,
      }}
    >
      {children}
    </Modals.Provider>
  );
};

export default ModalContext;
