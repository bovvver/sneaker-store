import React, { useContext } from "react";
import { Wrapper, TotalPrice } from "./Summary.styles";
import SectionHeader from "../../components/atoms/SectionHeader/SectionHeader";
import { CartContext } from "../../providers/ContextProviders";
import CartItem from "../../components/molecules/CartItem/CartItem";
import Button from "../../components/atoms/Button/Button";
import { Link } from "react-router-dom";

const Summary = () => {
  const { cart } = useContext(CartContext);
  let countPrice = 0;

  cart.map((el) => (countPrice += +el.item.price * el.pieces));

  return (
    <Wrapper>
      <SectionHeader title="Your summary" />
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
      <TotalPrice>
        Total price: <span>${countPrice}</span>
      </TotalPrice>
      <Link to="/finish-page">
        <Button content="Make order" />
      </Link>
    </Wrapper>
  );
};

export default Summary;
