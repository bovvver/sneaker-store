import React from "react";
import { Wrapper } from "./ProductSection.styles";
import { BigImage, ButtonsWrapper } from "./ProductSection.styles";
import Producer from "../../components/atoms/Producer/Producer";
import Name from "../../components/atoms/Name/Name";
import Description from "../../components/atoms/Description/Description";
import Price from "../../components/atoms/Price/Price";
import AddSymbol from "../../components/atoms/AddSymbol/AddSymbol";
import RemoveSymbol from "../../components/atoms/RemoveSymbol/RemoveSymbol";
import { AddButton } from "./ProductSection.styles";
import { useParams } from "react-router-dom";
import data from "../../data/data";

const ProductSection = () => {
  const { id } = useParams();

  const checkProduct = (element) => {
    const checkFormula = `${element.producer}-${element.id.split("-")[0]}`;
    if (id === checkFormula) return element;
  };

  const filteredArray = data.sneakers.filter(checkProduct);
  const [product] = filteredArray;

  return (
    <>
      <BigImage src={product.photos[0]} alt="" />
      <Wrapper>
        <Producer content={product.producer} />
        <Name content={product.name} />
        <Description content={product.description} />
        <Price content={product.price} />
        <ButtonsWrapper>
          <AddSymbol />
          <p>0</p>
          <RemoveSymbol />
        </ButtonsWrapper>
        <AddButton>Add to cart</AddButton>
      </Wrapper>
    </>
  );
};

export default ProductSection;
