import React from "react";
import {
  Wrapper,
  Line,
  StyledNavLink,
  StyledLink,
} from "./DesktopNavigation.styles";
import SiteTitle from "../../atoms/SiteTitle/SiteTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChild,
  faChildDress,
  faChildren,
  faLandmark,
  faRightToBracket,
  faRightFromBracket,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../providers/AuthContext";
import { useNav } from "../../../providers/NavContext";
import { useCart } from "../../../providers/CartConext";

const DesktopNavigation = () => {
  const { handleLogin, isAuthenticated } = useAuth();
  const { scrollTop } = useNav();
  const { handleCartClick } = useCart();

  return (
    <Wrapper>
      <SiteTitle />
      <StyledNavLink to="/sneaker-store/" onClick={scrollTop} end>
        <FontAwesomeIcon icon={faChildren} />
        Unisex
      </StyledNavLink>
      <StyledNavLink to="/sneaker-store/collection/men" onClick={scrollTop}>
        <FontAwesomeIcon icon={faChild} />
        Men
      </StyledNavLink>
      <StyledNavLink to="/sneaker-store/collection/women" onClick={scrollTop}>
        <FontAwesomeIcon icon={faChildDress} />
        Women
      </StyledNavLink>
      <Line />
      {isAuthenticated ? (
        <>
          <StyledLink onClick={handleCartClick}>
            <FontAwesomeIcon icon={faCartShopping} />
            Cart
          </StyledLink>
          <StyledNavLink to="/sneaker-store/history">
            <FontAwesomeIcon icon={faLandmark} />
            History
          </StyledNavLink>
          <Line />
          <StyledLink to="/sneaker-store/" onClick={handleLogin}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
          </StyledLink>
        </>
      ) : (
        <StyledNavLink to="/sneaker-store/login">
          <FontAwesomeIcon icon={faRightToBracket} />
          Login
        </StyledNavLink>
      )}
    </Wrapper>
  );
};

export default DesktopNavigation;
