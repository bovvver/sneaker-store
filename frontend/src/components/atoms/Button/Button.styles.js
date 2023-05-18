import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 1em 0;
  width: 100%;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 7px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 10px 2px rgba(255, 145, 24, 1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.01);
  }
`;
