import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Image,
  InformationWrapper,
  ProducerWrapper,
  PriceWrapper,
} from "./Product.styles";

import Producer from "../../atoms/Producer/Producer";
import Name from "../../atoms/Name/Name";
import Description from "../../atoms/Description/Description";
import Price from "../../atoms/Price/Price";
import { ProductButton } from "./Product.styles";

const Product = ({ image, producer, name, description, price }) => {
  if (description.length > 160) {
    description = description.slice(0, 160);
    description += "...";
  }

  return (
    <Wrapper>
      <Image src={image} alt={`${producer} ${name}`} />
      <InformationWrapper>
        <ProducerWrapper>
          <Producer content={producer} />
          <Name content={name} />
          <Description content={description} />
        </ProducerWrapper>
        <PriceWrapper>
          <Price content={price} />
        </PriceWrapper>
      </InformationWrapper>
      <ProductButton>Add to cart</ProductButton>
    </Wrapper>
  );
};

Product.propTypes = {
  url: PropTypes.string,
  producer: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};

export default Product;
