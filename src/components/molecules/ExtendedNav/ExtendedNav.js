import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { Wrapper, Links, StyledLink } from "./ExtendedNav.styles";
import CloseButton from "../../atoms/CloseButton/CloseButton";
import { NavContext } from "../../../providers/ContextProviders";

const ExtendedNav = () => {
  const { state, handleClick } = useContext(NavContext);
  let navStyles = {};

  navStyles = !state ? { right: "100%" } : {};

  return createPortal(
    <Wrapper style={navStyles}>
      <CloseButton />
      <Links>
        <StyledLink to="/" onClick={handleClick}>
          Main page
        </StyledLink>
        <StyledLink to="/men" onClick={handleClick}>
          Men
        </StyledLink>
        <StyledLink to="/women" onClick={handleClick}>
          Women
        </StyledLink>
        <StyledLink to="/about" onClick={handleClick}>
          About Us
        </StyledLink>
      </Links>
    </Wrapper>,
    document.getElementById("navigation")
  );
};

export default ExtendedNav;
