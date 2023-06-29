import styled, { css } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import mq from "../../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  padding: 1.5em;
  margin-bottom: 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1300px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid
    ${({ theme, scroll }) => {
      if (scroll === 0) return "transparent";
      else return theme.colors.shadow;
    }};
  transition: transform 0.3s, border-bottom 0.1s;
  z-index: 5;

  div:last-of-type {
    width: auto;
  }

  ${mq[2]} {
    padding: 1.5em 8.8em;
  }

  ${mq[3]} {
    padding: 1.5em 9em;
  }
`;

export const NavBlock = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
`;

const activeclassname = "active";

const LinkStyles = css`
  position: relative;
  margin: 0 1em;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const StyledNavLink = styled(NavLink).attrs({ activeclassname })`
  ${LinkStyles}

  &.${activeclassname} {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const StyledLink = styled(Link)`
  ${LinkStyles}
`;
