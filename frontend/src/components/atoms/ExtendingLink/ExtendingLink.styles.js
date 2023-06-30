import styled, { css } from "styled-components";

export const Selectable = css`
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    height: 50%;
    width: 4px;
    background-color: ${({ theme }) => theme.colors.white};
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.1s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const ExtendButton = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.1em 0.3em;
  margin: 0.2em 0;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  user-select: none;

  & svg {
    margin-left: 0.4em;
    font-size: 1.5rem;
    transform: ${({ extend }) => {
      if (extend) return "rotate(180deg);";
      else return "rotate(0deg);";
    }};
    transition: transform 0.2s;
  }

  ${Selectable}

  &::before {
    left: -5%;
  }
`;

export const LinkWrapper = styled.div`
  max-height: ${({ extended }) => {
    if (!extended) return "0;";
    else return "110px;";
  }}
  border-bottom: ${({ extended }) => {
    if (!extended) return "none;";
    else return "2px solid white;";
  }}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: max-height 0.5s;

  a {
    position: relative;
    padding: 0.3em 0 0.3em 0.9em;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    font-size: 2rem;
    text-transform: uppercase;

    ${Selectable}

    &::before {
      left: 5%;
    }
  }

  button{
    padding: 0 0.6em 0.1em;
    border: none;
    background-color: transparent;
    text-align: left;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.2s;

    &:hover{
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;
