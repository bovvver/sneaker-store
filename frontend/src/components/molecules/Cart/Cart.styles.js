import styled from "styled-components";
import mq from "../../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  margin: 7em 1em 1em 1em;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  z-index: 50;

  ${mq[1]} {
    left: 20%;
    right: 20%;
  }

  ${mq[2]} {
    left: 30%;
    right: 30%;
  }
`;

export const CartHeader = styled.p`
  padding: 1.2em;
  font-size: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayishBlue};
  font-weight: bold;
`;

export const CartProducts = styled.div`
  padding: 1.2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ItemsWrapper = styled.div`
  width: 100%;
`;

export const EmptyCart = styled.p`
  padding: 2em 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
  text-align: center;
`;

export const ShadowBlock = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.shadowAlpha};
  z-index: 20;
  transition: opacity 0.2s;
`;
