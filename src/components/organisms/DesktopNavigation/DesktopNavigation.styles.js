import styled from "styled-components";
import { NavLink } from "react-router-dom";
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

export const StyledNavLink = styled(NavLink).attrs({ activeclassname })`
  position: relative;
  padding: 0 0 0.5em;
  margin: 0 1em;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  font-weight: bold;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.orange};
    opacity: 0;
    border-radius: 30px;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }

  &.${activeclassname} {
    &::before {
      opacity: 1;
    }
  }
`;
