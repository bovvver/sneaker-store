import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5em 3em;
`;

export const ImageWrapper = styled.div`
  position: relative;

  button:first-of-type {
    left: 0.5em;
  }

  button:last-of-type {
    right: 0.5em;
  }
`;

export const NextImgBtn = styled.button`
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 5px 1px ${({ theme }) => theme.colors.black};
  transform: translate(0, -50%);
  transition: transform 0.1s;

  &:hover {
    transform: translate(0, -50%) scale(1.04);
  }
`;

export const BigImage = styled.img`
  position: relative;
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
