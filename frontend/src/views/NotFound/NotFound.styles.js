import styled from "styled-components";
import mq from "../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.p`
  font-size: 2.5rem;
  text-align: center;

  ${mq[0]} {
    font-size: 4rem;
  }
`;
