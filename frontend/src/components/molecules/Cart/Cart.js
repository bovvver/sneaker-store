import React from "react";
import Button from "../../atoms/Button/Button";
import {
  Wrapper,
  CartHeader,
  CartProducts,
  ItemsWrapper,
  EmptyCart,
} from "./Cart.styles";
import CartItem from "../CartItem/CartItem";
import { useCart } from "../../../providers/CartConext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../providers/AuthContext";

const Cart = () => {
  const { state, cart, handleCartClick } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sneaker-store/summary");
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
        {!isAuthenticated ? null : cart.length === 0 ? (
          <EmptyCart>Cart is empty.</EmptyCart>
        ) : (
          <ItemsWrapper>
            {cart.map((el) => (
              <CartItem
                key={el.id}
                id={el.sneaker.id}
                img={el.sneaker.photos[0].path}
                name={el.sneaker.name}
                price={el.sneaker.price}
                pieces={el.quantity}
                fullPrice={el.quantity * +el.sneaker.price}
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
