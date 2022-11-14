import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 2em 0;
  box-shadow: 8px 8px 24px 0px ${({ theme }) => theme.colors.shadow};
  border-radius: 30px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.orange}; ;
`;

export const InformationWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid grey;
`;

export const ProducerWrapper = styled.div`
  padding: 1.2em;
  width: 65%;
`;

export const Producer = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1.6rem;
`;

export const Name = styled.h3`
  font-size: 2.3rem;
`;

export const Description = styled.p`
  font-size: 1.3rem;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  font-size: 2.8rem;
  font-weight: bold;
`;
