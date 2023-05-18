import styled from "styled-components";
import mq from "../../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  margin: 2em 0;
  box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  ${mq[0]} {
    height: 500px;
  }

  ${mq[2]} {
    height: 470px;
  }

  ${mq[3]} {
    height: 500px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.orange};

  ${mq[0]} {
    height: 270px;
  }

  ${mq[2]} {
    height: 320px;
  }
`;

export const InformationWrapper = styled.div`
  display: flex;
  border-top: 1px solid grey;
`;

export const ProducerWrapper = styled.div`
  padding: 1.2em;
  width: 65%;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
`;
