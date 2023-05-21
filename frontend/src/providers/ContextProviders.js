import React from "react";
import CartConext from "./CartConext";
import ModalContext from "./ModalContext";
import NavContext from "./NavContext";
import ScreenSizeContext from "./ScreenSizeContext";
import AuthContext from "./AuthContext";

const ContextProviders = ({ children }) => {
  return (
    <ScreenSizeContext>
      <NavContext>
        <CartConext>
          <ModalContext>
            <AuthContext>{children}</AuthContext>
          </ModalContext>
        </CartConext>
      </NavContext>
    </ScreenSizeContext>
  );
};

export default ContextProviders;
