import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { Wrapper, Links, StyledLink } from "./ExtendedNav.styles";
import CloseButton from "../../atoms/CloseButton/CloseButton";
import { Nav } from "../../../providers/NavContext";

const ExtendedNav = () => {
  const { state, handleNavClick } = useContext(Nav);
  let navStyles = {};

  navStyles = !state ? { right: "100%" } : {};

  return createPortal(
    <Wrapper style={navStyles}>
      <CloseButton />
      <Links>
        <StyledLink to="/" onClick={handleNavClick}>
          Main page
        </StyledLink>
        <StyledLink to="/collection/men" onClick={handleNavClick}>
          Men
        </StyledLink>
        <StyledLink to="/collection/women" onClick={handleNavClick}>
          Women
        </StyledLink>
        <StyledLink to="/about" onClick={handleNavClick}>
          About Us
        </StyledLink>
      </Links>
    </Wrapper>,
    document.getElementById("navigation")
  );
};

export default ExtendedNav;
