import React from "react";
import CartConext from "./CartConext";
import ModalContext from "./ModalContext";
import NavContext from "./NavContext";
import ScreenSizeContext from "./ScreenSizeContext";

const ContextProviders = ({ children }) => {
  return (
    <ScreenSizeContext>
      <NavContext>
        <CartConext>
          <ModalContext>{children}</ModalContext>
        </CartConext>
      </NavContext>
    </ScreenSizeContext>
  );
};

export default ContextProviders;
