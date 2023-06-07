import React from "react";
import CartConext from "./CartConext";
import ModalContext from "./ModalContext";
import NavContext from "./NavContext";
import ScreenSizeContext from "./ScreenSizeContext";
import AuthContext from "./AuthContext";
import LoadingContext from "./LoadingContext";
import DataContext from "./DataContext";

const ContextProviders = ({ children }) => {
  return (
    <ScreenSizeContext>
      <LoadingContext>
        <NavContext>
          <DataContext>
            <CartConext>
              <ModalContext>
                <AuthContext>{children}</AuthContext>
              </ModalContext>
            </CartConext>
          </DataContext>
        </NavContext>
      </LoadingContext>
    </ScreenSizeContext>
  );
};

export default ContextProviders;
