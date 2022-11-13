import React from "react";
import "../../assets/styles/fonts.css";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/styles/theme";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Root;
