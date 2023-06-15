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
      <ModalContext>
        <AuthContext>
          <NavContext>
            <DataContext>
              <CartConext>{children}</CartConext>
            </DataContext>
          </NavContext>
        </AuthContext>
      </ModalContext>
    </ScreenSizeContext>
  );
};

export default ContextProviders;
