import React, { useEffect } from "react";
import "../../assets/styles/fonts.css";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/styles/theme";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import MobileNavigation from "../../components/organisms/MobileNavigation/MobileNavigation";
import Main from "../Main/Main";
import ExtendedNav from "../../components/molecules/ExtendedNav/ExtendedNav";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductSection from "../ProductSection/ProductSection";
import Cart from "../../components/molecules/Cart/Cart";
import Summary from "../Summary/Summary";
import Form from "../Form/Form";
import Modal from "../../components/atoms/Modal/Modal";
import { useSize } from "../../providers/ScreenSizeContext";
import DesktopNavigation from "../../components/organisms/DesktopNavigation/DesktopNavigation";
import NotFound from "../NotFound/NotFound";
import SignUpForm from "../SignUpForm/SignUpForm";
import { useAuth } from "../../providers/AuthContext";
import ErrorPage from "../ErrorPage/ErrorPage";
import Cookies from "universal-cookie";
import { useData } from "../../providers/DataContext";
import { Wrapper, MainWrapper } from "./Root.styles";

const Root = () => {
  const { screenWidth } = useSize();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const { error } = useData();

  useEffect(() => {
    const cookies = new Cookies();

    if (cookies.get("jwt-present")) {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {error ? (
        <ErrorPage />
      ) : (
        <>
          <Wrapper>
            {screenWidth <= 1280 ? null : <DesktopNavigation />}
            <MainWrapper>
              {screenWidth >= 1280 ? null : (
                <>
                  <MobileNavigation />
                  <ExtendedNav />
                </>
              )}
              <Cart />
              <Modal />
              <Routes>
                <Route path="/" element={<Navigate to="/sneaker-store/" />} />
                <Route path="/sneaker-store/" element={<Main />} />
                <Route
                  path="/sneaker-store/collection/:gender"
                  element={<Main />}
                />
                <Route
                  path="/sneaker-store/product/:id"
                  element={<ProductSection />}
                />
                {isAuthenticated ? (
                  <>
                    <Route
                      path="/sneaker-store/summary"
                      element={<Summary />}
                    />
                    <Route
                      path="/sneaker-store/finish-page"
                      element={<Form />}
                    />
                  </>
                ) : (
                  <Route path="/sneaker-store/login" element={<SignUpForm />} />
                )}
                <Route path="/sneaker-store/*" element={<NotFound />} />
              </Routes>
            </MainWrapper>
          </Wrapper>
        </>
      )}
    </ThemeProvider>
  );
};

export default Root;
