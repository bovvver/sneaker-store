import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { Wrapper, Links } from "./ExtendedNav.styles";
import CloseButton from "../../atoms/CloseButton/CloseButton";
import { NavContext } from "../../../providers/ContextProviders";

const ExtendedNav = () => {
  const { state } = useContext(NavContext);
  let navStyles = {};

  navStyles = !state ? { right: "100%" } : {};

  return createPortal(
    <Wrapper style={navStyles}>
      <CloseButton />
      <Links>
        <a href="#">Main page</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Collections</a>
        <a href="#">About Us</a>
      </Links>
    </Wrapper>,
    document.getElementById("navigation")
  );
};

export default ExtendedNav;
