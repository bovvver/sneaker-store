import React from "react";
import SiteTitle from "../../atoms/SiteTitle/SiteTitle";
import { Wrapper, NavBlock, StyledNavLink } from "./DesktopNavigation.styles";
import NavBtns from "../../molecules/NavBtns/NavBtns";

const DesktopNavigation = () => {
  return (
    <Wrapper>
      <SiteTitle />
      <NavBlock>
        <StyledNavLink to="/sneaker-store/" exact={true} end>Main page</StyledNavLink>
        <StyledNavLink to="/sneaker-store/collection/men">Men</StyledNavLink>
        <StyledNavLink to="/sneaker-store/collection/women">Women</StyledNavLink>
        <StyledNavLink to="/sneaker-store/about">About Us</StyledNavLink>
      </NavBlock>
      <NavBtns />
    </Wrapper>
  );
};

export default DesktopNavigation;
