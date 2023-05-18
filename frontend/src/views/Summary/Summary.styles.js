import styled from "styled-components";
import mq from "../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  padding: 1.5em 3em;
  margin: auto;
  max-width: 1200px;

  ${mq[2]} {
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export const TotalPrice = styled.p`
  padding: 1em 0;
  font-size: 3rem;

  span {
    font-weight: bold;
  }
`;
