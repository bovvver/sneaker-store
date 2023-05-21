import styled, { css } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import mq from "../../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div:last-of-type {
    width: auto;
  }
`;

export const NavBlock = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  ${mq[2]} {
    font-size: 1.8rem;
  }
`;

const activeclassname = "active";

const LinkStyles = css`
  position: relative;
  margin: 0 1em;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  transition: transform 0.1s, color 0.3s;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const StyledNavLink = styled(NavLink).attrs({ activeclassname })`
  ${LinkStyles}

  &.${activeclassname} {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const StyledLink = styled(Link)`
  ${LinkStyles}
`;
