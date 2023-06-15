import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5em 1em;
  margin-bottom: 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid
    ${({ theme, scroll }) => {
      if (scroll === 0) return "transparent";
      else return theme.colors.shadow;
    }};
  transition: transform 0.3s, border-bottom 0.1s;
  z-index: 5;
`;

export const TitleSection = styled.div`
  margin-left: 2em;
  display: flex;
  align-items: center;
  width: 60%;
`;
