import React, { useState, createContext } from "react";

export const Nav = createContext({
  state: false,
  handleNavClick: () => {},
});

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
