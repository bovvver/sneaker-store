import styled, { css } from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.orange};
  height: 100vh;
  width: 20vw;
  box-shadow: 0px 8px 24px 0px ${({ theme }) => theme.colors.shadow};

  & > a:first-child {
    padding: 3em 0;
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Line = styled.div`
  margin: 2em 0;
  width: 65%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50px;
`;

const activeclassname = "active";

export const LinkStyles = css`
  padding: 0.5em 1em;
  margin: 0.1em 0;
  width: 70%;
  font-size: 1.8rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightOrange};
  }

  svg {
    margin-right: 0.5em;
  }
`;

export const StyledNavLink = styled(NavLink).attrs({ activeclassname })`
  ${LinkStyles}

  &.${activeclassname} {
    background-color: ${({ theme }) => theme.colors.lightOrange};
  }
`;

export const StyledLink = styled(Link)`
  ${LinkStyles}
`;
