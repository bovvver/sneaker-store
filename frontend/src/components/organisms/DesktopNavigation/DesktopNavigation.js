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
import { useNav } from "../../../providers/NavContext";

const DesktopNavigation = () => {
  const { handleLogin, isAuthenticated } = useAuth();
  const { scroll, scrollTop } = useNav();

  return (
    <Wrapper scroll={scroll}>
      <SiteTitle />
      <NavBlock>
        <StyledNavLink to="/sneaker-store/" onClick={scrollTop} end>
          main page
        </StyledNavLink>
        <StyledNavLink to="/sneaker-store/collection/men" onClick={scrollTop}>
          men
        </StyledNavLink>
        <StyledNavLink to="/sneaker-store/collection/women" onClick={scrollTop}>
          women
        </StyledNavLink>
        {isAuthenticated ? (
          <StyledLink to="/sneaker-store/" onClick={handleLogin}>
            logout
          </StyledLink>
        ) : (
          <StyledNavLink to="/sneaker-store/login">login</StyledNavLink>
        )}
        <NavBtns />
      </NavBlock>
    </Wrapper>
  );
};

export default DesktopNavigation;
