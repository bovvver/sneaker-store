import React from "react";
import "../../assets/styles/fonts.css";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/styles/theme";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import MobileNavigation from "../../components/organisms/MobileNavigation/MobileNavigation";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MobileNavigation />
    </ThemeProvider>
  );
};

export default Root;
