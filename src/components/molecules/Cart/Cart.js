import React, { useContext } from "react";
import Button from "../../atoms/Button/Button";
import { Wrapper, CartHeader, CartProducts, ItemsWrapper } from "./Cart.styles";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../../providers/ContextProviders";

const Cart = () => {
  const { state } = useContext(CartContext);
  let cartStyles = {};

  cartStyles = !state
    ? { opacity: "0", pointerEvents: "none" }
    : { opacity: "1" };

  return (
    <Wrapper style={cartStyles}>
      <CartHeader>Cart</CartHeader>
      <CartProducts>
        <ItemsWrapper>
          <CartItem />
          <CartItem />
        </ItemsWrapper>
        <Button content="Checkout" />
      </CartProducts>
    </Wrapper>
  );
};

export default Cart;
