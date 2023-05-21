import React from "react";
import { createPortal } from "react-dom";
import { Wrapper, Links, StyledLink } from "./ExtendedNav.styles";
import CloseButton from "../../atoms/CloseButton/CloseButton";
import { useNav } from "../../../providers/NavContext";

const ExtendedNav = () => {
  const { state, handleNavClick } = useNav();
  let navStyles = {};

  navStyles = !state ? { right: "100%" } : {};

  return createPortal(
    <Wrapper style={navStyles}>
      <CloseButton />
      <Links>
        <StyledLink to="/sneaker-store/" onClick={handleNavClick} end>
          Main page
        </StyledLink>
        <StyledLink to="/sneaker-store/collection/men" onClick={handleNavClick}>
          Men
        </StyledLink>
        <StyledLink
          to="/sneaker-store/collection/women"
          onClick={handleNavClick}
        >
          Women
        </StyledLink>
        {/* <StyledLink to="/sneaker-store/about" onClick={handleNavClick}>
          About Us
        </StyledLink> */}
      </Links>
    </Wrapper>,
    document.getElementById("navigation")
  );
};

export default ExtendedNav;
