import styled, { css } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { Selectable } from "../../atoms/ExtendingLink/ExtendingLink.styles";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.orange};
  transition: right 0.3s;
  overflow: hidden;
  z-index: 10;

  a {
    color: ${({ theme }) => theme.colors.white};
  }

  svg {
    position: absolute;
    top: 1.7em;
    right: 1.7em;
    font-size: 2.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > a:first-child {
    font-size: 4rem;
    padding: 3em 0;
    cursor: default;
  }
`;

const LinkStyles = css`
  position: relative;
  padding: 0.1em 0.3em;
  margin: 0.2em 0;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.3s;
  font-weight: bold;

  ${Selectable}

  &::before {
    left: -5%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  ${LinkStyles}
`;

export const StyledLink = styled(Link)`
  ${LinkStyles}
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
`;
