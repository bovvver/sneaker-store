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
} from "./Product.styles";

const Product = ({ image, producer, name, description, price }) => {
  if (description.length > 160) {
    description = description.slice(0, 160);
    description += "...";
  }

  return (
    <Wrapper>
      <Image src={image} />
      <InformationWrapper>
        <ProducerWrapper>
          <Producer>{producer}</Producer>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </ProducerWrapper>
        <PriceWrapper>
          <p>{price}</p>
        </PriceWrapper>
      </InformationWrapper>
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
