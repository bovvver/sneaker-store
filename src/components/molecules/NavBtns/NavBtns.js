import React, { useContext } from "react";
import { Wrapper } from "./NavBtns.styles";
import CartImg from "../../atoms/CartImg/CartImg";
import { CartCtx } from "../../../providers/CartConext";

const NavBtns = () => {
  const { handleCartClick } = useContext(CartCtx);

  return (
    <Wrapper>
      <CartImg onClick={handleCartClick} />
    </Wrapper>
  );
};

export default NavBtns;
