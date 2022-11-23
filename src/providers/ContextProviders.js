import React, { createContext, useState } from "react";

export const NavContext = createContext({
  state: false,
  handleNavClick: () => {},
});

export const CartContext = createContext({
  opacity: false,
  handleCartClick: () => {},
  cart: [],
  handleButtonClick: () => {},
  deleteItem: () => {},
  clearCart: () => {},
});

export const ModalContext = createContext({
  modalState: false,
  handleModalState: () => {},
  modalMessage: "",
});

const ContextProviders = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [cart, setCart] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleNavClick = () => {
    setOpen(!open);
  };

  const handleCartClick = () => {
    setOpacity(!opacity);
  };

  const handleButtonClick = (pieces, item) => {
    const [checkItem] = cart.filter((el) => el.item.id === item.id);

    if (pieces !== 0) {
      if (checkItem) {
        const cartCopy = [...cart];
        cartCopy.forEach((el) => {
          if (el.item.id === checkItem.item.id) {
            el.pieces += pieces;
          }
          setCart(cartCopy);
        });
      } else {
        setCart((oldCart) => [...oldCart, { pieces, item }]);
      }
    }
  };

  const deleteItem = (id) => {
    const cartCopy = cart.filter((el) => el.item.id !== id);
    setCart(cartCopy);
  };

  const clearCart = () => setCart([]);

  const handleModalState = (message) => {
    setModalMessage(message);
    setModalState(true);
    setTimeout(() => {
      setModalState(false);
    }, 5000);
  };

  return (
    <NavContext.Provider value={{ state: open, handleNavClick }}>
      <CartContext.Provider
        value={{
          state: opacity,
          handleCartClick,
          cart,
          handleButtonClick,
          deleteItem,
          clearCart,
        }}
      >
        <ModalContext.Provider
          value={{
            modalState,
            handleModalState,
            modalMessage,
            setModalMessage,
          }}
        >
          {children}
        </ModalContext.Provider>
      </CartContext.Provider>
    </NavContext.Provider>
  );
};

export default ContextProviders;
