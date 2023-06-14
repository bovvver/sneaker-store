import React from "react";
import { Wrapper, TotalPrice } from "./Summary.styles";
import SectionHeader from "../../components/atoms/SectionHeader/SectionHeader";
import { useCart } from "../../providers/CartConext";
import CartItem from "../../components/molecules/CartItem/CartItem";
import Button from "../../components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import SvgWaves from "../../components/atoms/SvgWaves/SvgWaves";

const Summary = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  let countPrice = 0;

  const handleClick = () => {
    navigate("/sneaker-store/finish-page");
  };

  cart.map((el) => (countPrice += el.sneaker.price * el.quantity));

  return (
    <>
      <Wrapper>
        <SectionHeader title="Your summary" />
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