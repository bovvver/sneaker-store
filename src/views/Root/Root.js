import React, { useContext } from "react";
import "../../assets/styles/fonts.css";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/styles/theme";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import MobileNavigation from "../../components/organisms/MobileNavigation/MobileNavigation";
import Main from "../Main/Main";
import About from "../About/About";
import ExtendedNav from "../../components/molecules/ExtendedNav/ExtendedNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSection from "../ProductSection/ProductSection";
import Cart from "../../components/molecules/Cart/Cart";
import Summary from "../Summary/Summary";
import Form from "../Form/Form";
import Modal from "../../components/atoms/Modal/Modal";
import { ScreenSize } from "../../providers/ScreenSizeContext";
import DesktopNavigation from "../../components/organisms/DesktopNavigation/DesktopNavigation";
import NotFound from "../NotFound/NotFound";

const Root = () => {
  const { screenWidth } = useContext(ScreenSize);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {screenWidth >= 768 ? <DesktopNavigation /> : <MobileNavigation />}
        {screenWidth <= 768 ? <ExtendedNav /> : null}
        <Cart />
        <Modal />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/collection/:id" element={<Main />} />
          <Route path="/product/:id" element={<ProductSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/finish-page" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
