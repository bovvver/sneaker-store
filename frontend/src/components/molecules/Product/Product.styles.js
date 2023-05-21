import styled from "styled-components";
import mq from "../../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  position: relative;
  margin: 2em 0;
  height: 530px;
  box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.shadow};
  overflow: hidden;
  transition: transform 0.3s;

  ${mq[0]} {
    height: 550px;
  }

  ${mq[2]} {
    height: 530px;
  }

  ${mq[3]} {
    height: 550px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 270px;
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

export const ProductButton = styled.button`
  position: absolute;
  bottom: 0;
  padding: 1em;
  width: 100%;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightOrange};
  }
`;
