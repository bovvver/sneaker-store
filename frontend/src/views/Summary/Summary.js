import React from "react";
import {
  Wrapper,
  TotalPrice,
  NoProductsText,
  NoProductsWrapper,
} from "./Summary.styles";
import SectionHeader from "../../components/atoms/SectionHeader/SectionHeader";
import { useCart } from "../../providers/CartConext";
import CartItem from "../../components/molecules/CartItem/CartItem";
import Button from "../../components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import SiteTitle from "../../components/atoms/SiteTitle/SiteTitle";

const Summary = ({ isHistory }) => {
  const { cart, history, clearHistory } = useCart();
  const navigate = useNavigate();
  let countPrice = 0;

  const handleClick = () => {
    navigate("/sneaker-store/finish-page");
  };

  cart.map((el) => (countPrice += el.sneaker.price * el.quantity));

  return (
    <>
      <Wrapper>
        <SectionHeader title={isHistory ? "history" : "summary"} />
        {isHistory && history.length === 0 ? (
          <NoProductsWrapper>
            <NoProductsText>
              Looks like you haven't bought anything from us yet. 👀
            </NoProductsText>
            <SiteTitle />
          </NoProductsWrapper>
        ) : null}
        {isHistory && history.length !== 0
          ? history.map((el) => (
              <CartItem
                key={el.id}
                id={el.sneaker.id}
                img={el.sneaker.photos[0].path}
                name={el.sneaker.name}
                price={el.sneaker.price}
                pieces={el.quantity}
                fullPrice={el.quantity * +el.sneaker.price}
                deletable={false}
              />
            ))
          : null}
        {!isHistory
          ? cart.map((el) => (
              <CartItem
                key={el.id}
                id={el.sneaker.id}
                img={el.sneaker.photos[0].path}
                name={el.sneaker.name}
                price={el.sneaker.price}
                pieces={el.quantity}
                fullPrice={el.quantity * +el.sneaker.price}
                deletable={true}
              />
            ))
          : null}
        {isHistory && history.length !== 0 ? (
          <Button onClick={clearHistory} content="Clear history" />
        ) : null}
        {!isHistory ? (
          <>
            <TotalPrice>
              Total price: <span>${countPrice}</span>
            </TotalPrice>
            <Button onClick={handleClick} content="Make order" />
          </>
        ) : null}
      </Wrapper>
    </>
  );
};

export default Summary;
