import styled from "styled-components";
import { Link } from "react-router-dom";
import mq from "../../assets/styles/responsiveDesign";

export const Wrapper = styled.div`
  margin: auto;
  padding: 1.5em 3em;
  max-width: 1300px;
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
