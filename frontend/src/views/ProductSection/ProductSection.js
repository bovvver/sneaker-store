import React, { useState } from "react";
import { Wrapper, SectionWrapper } from "./ProductSection.styles";
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
import { useNavigate, useParams } from "react-router-dom";
import data from "../../data/data";
import NextBtn from "../../components/atoms/NextBtn/NextBtn";
import PrevBtn from "../../components/atoms/PrevBtn/PrevBtn";
import Button from "../../components/atoms/Button/Button";
import { useCart } from "../../providers/CartConext";
import { useAuth } from "../../providers/AuthContext";
import { useModal } from "../../providers/ModalContext";

const ProductSection = () => {
  const [pieces, setPieces] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { handleButtonClick } = useCart();
  const { handleModalState } = useModal();
  const { isAuthenticated } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

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

  const addPiece = () => {
    setPieces(pieces + 1);
  };

  const removePiece = () => {
    if (pieces !== 0) setPieces(pieces - 1);
  };

  const handleClick = () => {
    if (pieces !== 0) {
      handleButtonClick(pieces, product);
      handleModalState("Added to cart");
    }
  };

  const filteredArray = data.sneakers.filter(checkProduct);
  const [product] = filteredArray;

  return (
    <SectionWrapper>
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
          <AddSymbol onClick={addPiece} />
          <p>{pieces}</p>
          <RemoveSymbol onClick={removePiece} />
        </ButtonsWrapper>
        <Button
          onClick={
            isAuthenticated
              ? handleClick
              : () => {
                  navigate("/sneaker-store/login");
                }
          }
          content="Add to cart"
        />
      </Wrapper>
    </SectionWrapper>
  );
};

export default ProductSection;
