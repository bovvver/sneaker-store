import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 40%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  transition: right 0.3s;
  overflow: hidden;

  svg {
    position: absolute;
    top: 1em;
    right: 1em;
    cursor: pointer;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
`;

const activeclassname = "active";

export const StyledLink = styled(NavLink).attrs({ activeclassname })`
  position: relative;
  padding: 0.3em;
  margin: 0.5em 0;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    top: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    transition: top 0.3s;
    z-index: -1;
  }

  &:hover::before {
    top: 0;
  }

  &.${activeclassname} {
    color: ${({ theme }) => theme.colors.white};

    &::before {
      top: 0;
    }
  }
`;
