import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5em 3em;
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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  div:nth-of-type(3),
  div:nth-of-type(4),
  div:nth-of-type(7) {
    width: 100%;

    input[type="text"] {
      width: 100%;
    }
  }
`;

export const InputBlock = styled.div`
  width: 50%;
  margin: 0.3em 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  input[type="text"] {
    width: 100%;
    padding: 0.2em 0.5em;
    font-size: 1.6rem;
    border: 2px solid ${({ theme }) => theme.colors.darkGrayishBlue};
  }

  span {
    color: ${({ theme }) => theme.colors.lightRed};
  }
`;
