import styled from "styled-components";
import mq from "../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};

  h2 {
    font-size: 2.5rem;

    ${mq[1]} {
      font-size: 4.5rem;
    }
  }

  p {
    margin-bottom: 5em;
    font-size: 1.7rem;

    ${mq[1]} {
      font-size: 2rem;
    }
  }
`;
