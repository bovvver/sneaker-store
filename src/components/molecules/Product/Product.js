import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Image,
  InformationWrapper,
  ProducerWrapper,
  PriceWrapper,
  Producer,
  Name,
  Description,
  Price,
} from "./Product.styles";

const Product = () => {
  return (
    <Wrapper>
      <Image />
      <InformationWrapper>
        <ProducerWrapper>
          <Producer>producent</Producer>
          <Name>name</Name>
          <Description>description</Description>
        </ProducerWrapper>
        <PriceWrapper>
          <p>$10</p>
        </PriceWrapper>
      </InformationWrapper>
    </Wrapper>
  );
};

Product.propTypes = {};

export default Product;
