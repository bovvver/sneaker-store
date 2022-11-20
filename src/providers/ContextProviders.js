import React, { createContext, useState } from "react";

export const NavContext = createContext({
  state: false,
  handleNavClick: () => {},
});

export const CartContext = createContext({
  opacity: false,
  handleCartClick: () => {},
});

const ContextProviders = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [opacity, setOpacity] = useState(false);

  const handleNavClick = () => {
    setOpen(!open);
  };

  const handleCartClick = () => {
    setOpacity(!opacity);
  };

  return (
    <NavContext.Provider value={{ state: open, handleNavClick }}>
      <CartContext.Provider value={{ state: opacity, handleCartClick }}>
        {children}
      </CartContext.Provider>
    </NavContext.Provider>
  );
};

export default ContextProviders;
