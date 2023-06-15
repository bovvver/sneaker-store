import styled from "styled-components";
import mq from "../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  position: relative;
  padding: 1.5em 3em;
  margin: auto;
  max-width: 1000px;
  min-height: 90vh;

  p:last-of-type {
    margin-top: 2em;
  }

  ${mq[1]} {
    p {
      font-size: 1.8rem;
    }

    h2 {
      text-align: center;
    }
  }
`;

export const AboutContent = styled.p`
  font-size: 1.5rem;
`;

export const DecorationBlock = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  width: 50em;
  height: 50em;
  background-color: ${({ theme }) => theme.colors.paleOrange};
  border: 1px solid ${({ theme }) => theme.colors.grayishBlue};
  transform: translate(-50%, -50%);
`;

export const DecorationImage = styled.img`
  position: absolute;
  top: 60%;
  left: 60%;
  width: 50em;
  height: 50em;
  border: 1px solid ${({ theme }) => theme.colors.grayishBlue};
  object-fit: cover;
  transform: translate(-50%, -50%);
`;

export const AboutWrapper = styled.div`
  padding: 2em;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grayishBlue};

  ${mq[1]} {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50em;
    height: 50em;
    transform: translate(-50%, -50%);
  }
`;
