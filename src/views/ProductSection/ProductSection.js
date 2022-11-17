import React from "react";
import { Wrapper } from "./ProductSection.styles";
import { BigImage, ButtonsWrapper } from "./ProductSection.styles";
import Producer from "../../components/atoms/Producer/Producer";
import Name from "../../components/atoms/Name/Name";
import Description from "../../components/atoms/Description/Description";
import Price from "../../components/atoms/Price/Price";

const ProductSection = () => {
  return (
    <Wrapper>
      <BigImage src="" alt="" />
      <Producer content="sneaker company" />
      <Name content="sneaker name" />
      <Description content="sneaker description" />
      <Price content="$0.00" />
      <ButtonsWrapper>
        <button></button>
        <p>0</p>
        <button></button>
      </ButtonsWrapper>
      <button></button>
    </Wrapper>
  );
};

export default ProductSection;
