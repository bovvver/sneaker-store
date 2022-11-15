import styled from "styled-components";

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

  a {
    margin: 0.5em 0;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }
`;
