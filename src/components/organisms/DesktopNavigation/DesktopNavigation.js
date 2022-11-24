import React from "react";
import SiteTitle from "../../atoms/SiteTitle/SiteTitle";
import { Wrapper, NavBlock, StyledNavLink } from "./DesktopNavigation.styles";
import NavBtns from "../../molecules/NavBtns/NavBtns";

const DesktopNavigation = () => {
  return (
    <Wrapper>
      <SiteTitle />
      <NavBlock>
        <StyledNavLink to="/">Main page</StyledNavLink>
        <StyledNavLink to="/collection/men">Men</StyledNavLink>
        <StyledNavLink to="/collection/women">Women</StyledNavLink>
        <StyledNavLink to="/about">About Us</StyledNavLink>
      </NavBlock>
      <NavBtns />
    </Wrapper>
  );
};

export default DesktopNavigation;
