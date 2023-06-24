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
  const { state, handleNavClick, scrollTop } = useNav();
  const { handleLogin, isAuthenticated } = useAuth();

  let navStyles = {};

  navStyles = !state ? { right: "100%" } : {};

  const handleLoginClick = () => {
    handleNavClick();
    handleLogin();
  };

  const handleLinkClick = () => {
    handleNavClick();
    scrollTop();
  };

  return createPortal(
    <Wrapper style={navStyles}>
      <CloseButton />
      <Links>
        <StyledNavLink to="/sneaker-store/" onClick={handleLinkClick} end>
          Main
        </StyledNavLink>
        <StyledNavLink
          to="/sneaker-store/collection/men"
          onClick={handleLinkClick}
        >
          Men
        </StyledNavLink>
        <StyledNavLink
          to="/sneaker-store/collection/women"
          onClick={handleLinkClick}
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
