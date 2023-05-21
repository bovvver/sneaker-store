import React from "react";
import { Wrapper } from "./NavBtns.styles";
import CartImg from "../../atoms/CartImg/CartImg";
import { useCart } from "../../../providers/CartConext";
import { useAuth } from "../../../providers/AuthContext";

const NavBtns = () => {
  const { handleCartClick } = useCart();
  const { isAuthenticated } = useAuth();

  return (
    <Wrapper>
      {isAuthenticated ? <CartImg onClick={handleCartClick} /> : null}
    </Wrapper>
  );
};

export default NavBtns;
