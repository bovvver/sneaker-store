import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 1.5em 3em;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;
