import styled from "styled-components";
import mq from "../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  padding: 1.5em 3em;
  margin: auto;
  max-width: 800px;
`;

export const SubmitButton = styled.input`
  width: 60%;
  margin: 1.2em auto;
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
`;

export const InputBlock = styled.div`
  width: 100%;
  margin: 0 0 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  input[type="text"] {
    width: 60%;
    padding: 0.3em 0.6em;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.orange};
    }
  }

  span {
    height: 10px;
    color: ${({ theme }) => theme.colors.lightRed};
  }

  ${mq[1]} {
    margin: 1em 0 1em;

    span {
      font-size: 1.5rem;
    }
  }
`;
