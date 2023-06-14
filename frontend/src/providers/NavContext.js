import React, { useEffect, useState, createContext, useContext } from "react";

export const Nav = createContext({
  state: false,
  handleNavClick: () => {},
  scroll: 0,
});

export const useNav = () => useContext(Nav);

const NavContext = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        setLastScroll(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScroll]);

  const handleNavClick = () => {
    setOpen(!open);
  };

  return (
    <Nav.Provider
      value={{ scroll: lastScroll, state: open, handleNavClick }}
    >
      {children}
    </Nav.Provider>
  );
};

export default NavContext;
