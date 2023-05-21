import React, { useState, createContext, useContext } from "react";

export const Nav = createContext({
  state: false,
  handleNavClick: () => {},
});

export const useNav = () => useContext(Nav);

const NavContext = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(!open);
  };

  return (
    <Nav.Provider value={{ state: open, handleNavClick }}>
      {children}
    </Nav.Provider>
  );
};

export default NavContext;
