import React, { useEffect, useState } from "react";
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
import NextBtn from "../../components/atoms/NextBtn/NextBtn";
import PrevBtn from "../../components/atoms/PrevBtn/PrevBtn";
import Button from "../../components/atoms/Button/Button";
import LoadingScreen from "../../components/atoms/LoadingScreen/LoadingScreen";
import { useCart } from "../../providers/CartConext";
import { useAuth } from "../../providers/AuthContext";
import { useModal } from "../../providers/ModalContext";
import { useData } from "../../providers/DataContext";

const ProductSection = () => {
  const [pieces, setPieces] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { handleButtonClick } = useCart();
  const { handleModalState } = useModal();
  const { isAuthenticated } = useAuth();
  const { dataRef, isDataFetched } = useData();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isDataFetched) {
      const [filteredProduct] = dataRef.current.filter(
        (el) => id === `${el.producer}-${el.name.replaceAll(" ", "-")}`
      );
      setProduct(filteredProduct);
      setLoading(false);
    }
  }, [dataRef, id, isDataFetched, setLoading]);

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

  return (
    <SectionWrapper>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <ImageWrapper>
            <BigImage
              src={product.photos[photoIndex].path}
              alt={`${product.producer} ${product.name} photo.`}
            />
            <NextImgBtn onClick={previousPhoto}>
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
        </>
      )}
    </SectionWrapper>
  );
};

export default ProductSection;
