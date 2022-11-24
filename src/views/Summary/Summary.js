import React, { useContext } from "react";
import { Wrapper, TotalPrice } from "./Summary.styles";
import SectionHeader from "../../components/atoms/SectionHeader/SectionHeader";
import { CartContext } from "../../providers/ContextProviders";
import CartItem from "../../components/molecules/CartItem/CartItem";
import Button from "../../components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import SvgWaves from "../../components/atoms/SvgWaves/SvgWaves";

const Summary = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  let countPrice = 0;

  const handleClick = () => {
    navigate("/finish-page");
  };

  cart.map((el) => (countPrice += +el.item.price * el.pieces));

  return (
    <>
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
        <Button onClick={handleClick} content="Make order" />
      </Wrapper>
      <SvgWaves />
    </>
  );
};

export default Summary;
