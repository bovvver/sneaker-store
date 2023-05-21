import styled from "styled-components";
import mq from "../../../assets/styles/responsiveDesign";

export const Header = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1em;
  text-transform: uppercase;

  ${mq[2]} {
    margin-bottom: 0.5em;
    font-size: 3.5rem;
    text-align: center;
  }
`;
