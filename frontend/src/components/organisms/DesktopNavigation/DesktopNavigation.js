import React from "react";
import SiteTitle from "../../atoms/SiteTitle/SiteTitle";
import {
  Wrapper,
  NavBlock,
  StyledNavLink,
  StyledLink,
} from "./DesktopNavigation.styles";
import NavBtns from "../../molecules/NavBtns/NavBtns";
import { useAuth } from "../../../providers/AuthContext";

const DesktopNavigation = () => {
  const { handleLogin, isAuthenticated } = useAuth();

  return (
    <Wrapper>
      <SiteTitle />
      <NavBlock>
        <StyledNavLink to="/sneaker-store/" end>
          main page
        </StyledNavLink>
        <StyledNavLink to="/sneaker-store/collection/men">men</StyledNavLink>
        <StyledNavLink to="/sneaker-store/collection/women">
          women
        </StyledNavLink>
        {isAuthenticated ? (
          <StyledLink to="/sneaker-store/" onClick={handleLogin}>
            logout
          </StyledLink>
        ) : (
          <StyledNavLink to="/sneaker-store/login">login</StyledNavLink>
        )}
      </NavBlock>
      <NavBtns />
    </Wrapper>
  );
};

export default DesktopNavigation;
