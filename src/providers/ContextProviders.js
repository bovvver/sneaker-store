import React, { createContext, useState } from "react";

export const NavContext = createContext({
  state: false,
  handleClick: () => {},
});

const ContextProviders = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <NavContext.Provider value={{ state: open, handleClick }}>
      {children}
    </NavContext.Provider>
  );
};

export default ContextProviders;
