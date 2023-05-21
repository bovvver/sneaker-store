import React, { useState, createContext, useContext } from "react";

export const Modals = createContext({
  modalState: false,
  handleModalState: () => {},
  modalMessage: "",
});

export const useModal = () => useContext(Modals);

const ModalContext = ({ children }) => {
  const [modalState, setModalState] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleModalState = (message) => {
    setModalMessage(message);
    setModalState(true);
    setTimeout(() => {
      setModalState(false);
    }, 2000);
  };

  return (
    <Modals.Provider
      value={{
        modalState,
        handleModalState,
        modalMessage,
      }}
    >
      {children}
    </Modals.Provider>
  );
};

export default ModalContext;
