import React, { useContext } from "react";
import { Bars } from "./NavBars.styles";
import { NavContext } from "../../../providers/ContextProviders";

const NavBars = () => {
  const { state, handleNavClick } = useContext(NavContext);
  return (
    <Bars
      width="16"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        handleNavClick(state);
      }}
    >
      <path
        d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
        fill="#69707D"
        fillRule="evenodd"
      />
    </Bars>
  );
};

export default NavBars;
