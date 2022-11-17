import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5em 3em;
`;

export const BigImage = styled.img`
  width: 100%;
  max-height: 30vh;
  object-fit: cover;
  background-color: orange;
`;

export const ButtonsWrapper = styled.div`
  margin: 1.4em 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
  border-radius: 15px;
  overflow: hidden;

  p {
    font-size: 1.6rem;
    text-align: center;
    font-weight: bold;
  }

  button,
  p {
    width: 33%;
  }

  button {
    padding: 0.6em;
    background-color: transparent;
    border: none;
    transition: background-color 0.3s;
    cursor: pointer;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.grayishBlue};
  }
`;

export const AddButton = styled.button`
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
`;
