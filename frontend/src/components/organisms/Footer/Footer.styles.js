import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.shadow};

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FooterBlock = styled.div`
  padding: 3em 2em;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;

  p {
    padding: 0.3em 0;
  }
`;
