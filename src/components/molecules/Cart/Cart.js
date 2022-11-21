import React, { useContext } from "react";
import Button from "../../atoms/Button/Button";
import {
  Wrapper,
  CartHeader,
  CartProducts,
  ItemsWrapper,
  EmptyCart,
} from "./Cart.styles";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../../providers/ContextProviders";

const Cart = () => {
  const { state, cart } = useContext(CartContext);

  let cartStyles = {};

  cartStyles = !state
    ? { opacity: "0", pointerEvents: "none" }
    : { opacity: "1" };

  return (
    <Wrapper style={cartStyles}>
      <CartHeader>Cart</CartHeader>
      <CartProducts>
        <ItemsWrapper>
          {cart.length === 0 ? (
            <EmptyCart>Cart is empty.</EmptyCart>
          ) : (
            cart.map((el, index) => (
              <CartItem
                key={index}
                id={el.item.id}
                img={el.item.photos[0]}
                name={el.item.name}
                price={el.item.price}
                pieces={el.pieces}
                fullPrice={el.pieces * +el.item.price}
              />
            ))
          )}
        </ItemsWrapper>
        <Button content="Checkout" />
      </CartProducts>
    </Wrapper>
  );
};

export default Cart;
