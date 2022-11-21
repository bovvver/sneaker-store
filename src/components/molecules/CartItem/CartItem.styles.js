import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0.7em 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    padding: 1em;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const ItemImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};

  p {
    font-size: 1.4rem;

    span {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
