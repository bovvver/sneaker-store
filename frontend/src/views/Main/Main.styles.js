import styled from "styled-components";
import { Link } from "react-router-dom";
import mq from "../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  margin: 5em auto auto;
  padding: 1.5em 3em;
  max-width: 1300px;

  ${mq[3]} {
    margin: auto;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  ${mq[0]} {
    width: 48%;
  }

  ${mq[3]} {
    width: 30%;
  }
`;

export const ProductsWrapper = styled.div`
  ${mq[0]} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
`;

export const SortingWrapper = styled.div`
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
  }

  svg {
    color: ${({ theme }) => theme.colors.black};
  }
`;
