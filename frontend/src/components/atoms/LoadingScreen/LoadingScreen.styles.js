import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    from{
        transform: scale(1) rotate(-90deg);
    } to {
        transform: scale(1.5) rotate(-130deg);
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};

  p {
    margin-bottom: 1.5em;
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  svg {
    font-size: 4rem;
    animation: 1s infinite alternate ${pulse};
  }
`;
