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
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { state, cart, handleCartClick } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/summary");
    handleCartClick();
  };

  return (
    <Wrapper
      style={
        !state ? { opacity: "0", pointerEvents: "none" } : { opacity: "1" }
      }
    >
      <CartHeader>Cart</CartHeader>
      <CartProducts>
        {cart.length === 0 ? (
          <EmptyCart>Cart is empty.</EmptyCart>
        ) : (
          <ItemsWrapper>
            {cart.map((el, index) => (
              <CartItem
                key={index}
                id={el.item.id}
                img={el.item.photos[0]}
                name={el.item.name}
                price={el.item.price}
                pieces={el.pieces}
                fullPrice={el.pieces * +el.item.price}
              />
            ))}
            <Button onClick={handleClick} content="Checkout" />
          </ItemsWrapper>
        )}
      </CartProducts>
    </Wrapper>
  );
};

export default Cart;
