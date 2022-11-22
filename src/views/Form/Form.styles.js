import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5em 3em;

  input:nth-of-type(3),
  input:nth-of-type(4),
  input:nth-of-type(7) {
    width: 95%;
    margin: 0.3em 2.5%;
  }
`;

export const StyledInput = styled.input`
  padding: 0.2em 0.5em;
  margin: 0.3em 2.5%;
  width: 45%;
  font-size: 1.6rem;
  border: 2px solid ${({ theme }) => theme.colors.darkGrayishBlue};
`;

export const SubmitButton = styled.input`
  width: 95%;
  margin: 1.2em 2.5%;
  padding: 0.7em 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 7px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 10px 2px rgba(255, 145, 24, 1);
`;
