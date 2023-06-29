import React from "react";
import { createPortal } from "react-dom";
import {
  Wrapper,
  Links,
  StyledNavLink,
  StyledLink,
  NavContent,
} from "./ExtendedNav.styles";
import CloseButton from "../../atoms/CloseButton/CloseButton";
import { useNav } from "../../../providers/NavContext";
import { useAuth } from "../../../providers/AuthContext";
import ExtendingLink from "../../atoms/ExtendingLink/ExtendingLink";
import SiteTitle from "../../atoms/SiteTitle/SiteTitle";

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
      <NavContent>
        <SiteTitle />
        <Links>
          <ExtendingLink
            onClick={handleLinkClick}
            content="offer"
            links={[
              {
                name: "unisex",
                destination: "/sneaker-store/",
              },
              {
                name: "men",
                destination: "/sneaker-store/collection/men",
              },
              {
                name: "women",
                destination: "/sneaker-store/collection/women",
              },
            ]}
            isNavigation={true}
          />
          <ExtendingLink
            onClick={handleNavClick}
            content="user"
            links={[
              {
                name: "profile",
                destination: "/sneaker-store/profile",
              },
              {
                name: "history",
                destination: "/sneaker-store/history",
              },
            ]}
            isNavigation={true}
          />
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
      </NavContent>
    </Wrapper>,
    document.getElementById("navigation")
  );
};

export default ExtendedNav;
