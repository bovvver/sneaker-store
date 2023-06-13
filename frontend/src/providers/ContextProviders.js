import React from "react";
import CartConext from "./CartConext";
import ModalContext from "./ModalContext";
import NavContext from "./NavContext";
import ScreenSizeContext from "./ScreenSizeContext";
import AuthContext from "./AuthContext";
import DataContext from "./DataContext";

const ContextProviders = ({ children }) => {
  return (
    <ScreenSizeContext>
      <AuthContext>
        <ModalContext>
          <NavContext>
            <DataContext>
              <CartConext>{children}</CartConext>
            </DataContext>
          </NavContext>
        </ModalContext>
      </AuthContext>
    </ScreenSizeContext>
  );
};

export default ContextProviders;
