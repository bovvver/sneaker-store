import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ content, onClick }) => {
  return <StyledButton onClick={onClick}>{content}</StyledButton>;
};

export default Button;
