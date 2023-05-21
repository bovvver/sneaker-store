import React from "react";
import { createPortal } from "react-dom";
import {
  Wrapper,
  Links,
  StyledNavLink,
  StyledLink,
} from "./ExtendedNav.styles";
import CloseButton from "../../atoms/CloseButton/CloseButton";
import { useNav } from "../../../providers/NavContext";
import { useAuth } from "../../../providers/AuthContext";

const ExtendedNav = () => {
  const { state, handleNavClick } = useNav();
  const { handleLogin, isAuthenticated } = useAuth();

  let navStyles = {};

  navStyles = !state ? { right: "100%" } : {};

  const handleLoginClick = () => {
    handleNavClick();
    handleLogin();
  };

  return createPortal(
    <Wrapper style={navStyles}>
      <CloseButton />
      <Links>
        <StyledNavLink to="/sneaker-store/" onClick={handleNavClick} end>
          Main
        </StyledNavLink>
        <StyledNavLink
          to="/sneaker-store/collection/men"
          onClick={handleNavClick}
        >
          Men
        </StyledNavLink>
        <StyledNavLink
          to="/sneaker-store/collection/women"
          onClick={handleNavClick}
        >
          Women
        </StyledNavLink>
        {isAuthenticated ? (
          <StyledLink to="/sneaker-store/" onClick={handleLoginClick}>
            logout
          </StyledLink>
        ) : (
          <StyledNavLink to="/sneaker-store/login" onClick={handleNavClick}>
            login
          </StyledNavLink>
        )}
      </Links>
    </Wrapper>,
    document.getElementById("navigation")
  );
};

export default ExtendedNav;
