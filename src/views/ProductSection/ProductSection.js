import React, { useState } from "react";
import { Wrapper } from "./ProductSection.styles";
import {
  ImageWrapper,
  BigImage,
  ButtonsWrapper,
  NextImgBtn,
} from "./ProductSection.styles";
import Producer from "../../components/atoms/Producer/Producer";
import Name from "../../components/atoms/Name/Name";
import Description from "../../components/atoms/Description/Description";
import Price from "../../components/atoms/Price/Price";
import AddSymbol from "../../components/atoms/AddSymbol/AddSymbol";
import RemoveSymbol from "../../components/atoms/RemoveSymbol/RemoveSymbol";
import { AddButton } from "./ProductSection.styles";
import { useParams } from "react-router-dom";
import data from "../../data/data";
import NextBtn from "../../components/atoms/NextBtn/NextBtn";
import PrevBtn from "../../components/atoms/PrevBtn/PrevBtn";

const ProductSection = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const { id } = useParams();

  const checkProduct = (element) => {
    const checkFormula = `${element.producer}-${element.id.split("-")[0]}`;
    if (id === checkFormula) return element;
  };

  const nextPhoto = () => {
    if (photoIndex === product.photos.length - 1) setPhotoIndex(0);
    else setPhotoIndex(photoIndex + 1);
  };

  const previousPhoto = () => {
    if (photoIndex === 0) setPhotoIndex(product.photos.length - 1);
    else setPhotoIndex(photoIndex - 1);
  };

  const filteredArray = data.sneakers.filter(checkProduct);
  const [product] = filteredArray;

  return (
    <>
      <ImageWrapper>
        <BigImage
          src={product.photos[photoIndex]}
          alt={`${product.producer} ${product.name} photo.`}
        />
        <NextImgBtn onClick={() => previousPhoto(photoIndex)}>
          <PrevBtn />
        </NextImgBtn>
        <NextImgBtn onClick={nextPhoto}>
          <NextBtn />
        </NextImgBtn>
      </ImageWrapper>
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
