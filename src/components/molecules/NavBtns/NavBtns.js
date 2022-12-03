import React, { useContext } from "react";
import { Wrapper } from "./NavBtns.styles";
import CartImg from "../../atoms/CartImg/CartImg";
import { CartContext } from "../../../providers/ContextProviders";

const NavBtns = () => {
  const { handleCartClick } = useContext(CartContext);

  return (
    <Wrapper>
      <CartImg onClick={handleCartClick} />
    </Wrapper>
  );
};

export default NavBtns;
