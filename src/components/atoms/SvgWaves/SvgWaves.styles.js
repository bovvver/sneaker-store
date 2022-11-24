import styled from "styled-components";
import Background from "../../../assets/images/layered-waves-haikei.svg";

export const Waves = styled.div`
  position: absolute;
  bottom: 0;
  background-image: url(${Background});
  aspect-ratio: 540/960;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -5;
`;
