import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ExtendButton = styled.p`
  position: relative;
  padding: 0 1em;
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const LinkWrapper = styled.div`
  width: 150%;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 185%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.darkGrayishBlue};
  text-align: center;
  transform: translate(-50%, 0);

  a {
    padding: 0.5em;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
    text-transform: uppercase;
  }
`;
