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
        <StyledLink to="/sneaker-store/" exact={true} onClick={handleNavClick} end>
          Main page
        </StyledLink>
        <StyledLink to="/sneaker-store/collection/men" onClick={handleNavClick}>
          Men
        </StyledLink>
        <StyledLink to="/sneaker-store/collection/women" onClick={handleNavClick}>
          Women
        </StyledLink>
        <StyledLink to="/sneaker-store/about" onClick={handleNavClick}>
          About Us
        </StyledLink>
      </Links>
    </Wrapper>,
    document.getElementById("navigation")
  );
};

export default ExtendedNav;
