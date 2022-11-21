import React from "react";
import "../../assets/styles/fonts.css";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/styles/theme";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import MobileNavigation from "../../components/organisms/MobileNavigation/MobileNavigation";
import Main from "../Main/Main";
import About from "../About/About";
import ExtendedNav from "../../components/molecules/ExtendedNav/ExtendedNav";
import ContextProviders from "../../providers/ContextProviders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSection from "../ProductSection/ProductSection";
import Cart from "../../components/molecules/Cart/Cart";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ContextProviders>
          <GlobalStyle />
          <MobileNavigation />
          <ExtendedNav />
          <Cart />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/collection/:id" element={<Main />} />
            <Route path="/product/:id" element={<ProductSection />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ContextProviders>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
