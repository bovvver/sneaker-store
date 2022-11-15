import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.black};
  transform: translate(0, -2px);
  font-weight: bold;
  text-decoration: none;
`;
