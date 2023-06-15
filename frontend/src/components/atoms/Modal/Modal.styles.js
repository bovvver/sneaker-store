import styled from "styled-components";

export const ModalBody = styled.div`
  position: absolute;
  left: 50%;
  top: -10%;
  padding: 1.4em;
  width: 17em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
  border: 2px solid ${({ theme }) => theme.colors.darkGrayishBlue};
  border-radius: 15px;
  transform: translate(-50%, 0);
  transition: top 0.3s;
  z-index: 100;
`;
