import React from "react";
import "../../assets/styles/fonts.css";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/styles/theme";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import MobileNavigation from "../../components/organisms/MobileNavigation/MobileNavigation";
import Main from "../Main/Main";
import ExtendedNav from "../../components/molecules/ExtendedNav/ExtendedNav";
import ContextProviders from "../../providers/ContextProviders";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContextProviders>
        <GlobalStyle />
        <MobileNavigation />
        <ExtendedNav />
        <Main />
      </ContextProviders>
    </ThemeProvider>
  );
};

export default Root;
