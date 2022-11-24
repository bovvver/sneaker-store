import React from "react";
import SectionHeader from "../../components/atoms/SectionHeader/SectionHeader";
import { Wrapper } from "./Main.styles";
import Product from "../../components/molecules/Product/Product";
import data from "../../data/data";
import { useParams } from "react-router-dom";
import { CustomLink, ProductsWrapper } from "./Main.styles";
import SvgWaves from "../../components/atoms/SvgWaves/SvgWaves";

const Main = () => {
  let title;
  let details = [];
  const { id } = useParams();

  if (id) {
    title = id.charAt(0).toUpperCase() + id.slice(1);
    details = data.sneakers.filter(
      (el) => el.gender === id || el.gender === "unisex"
    );
  } else {
    title = "Our Offer";
    details = data.sneakers;
  }

  return (
    <>
      <Wrapper>
        <SectionHeader title={title} />
        <ProductsWrapper>
          {details.map((el) => (
            <CustomLink
              key={el.id}
              to={`/product/${el.producer}-${el.id.split("-")[0]}`}
            >
              <Product
                image={el.photos[0]}
                producer={el.producer}
                name={el.name}
                description={el.description}
                price={el.price}
              />
            </CustomLink>
          ))}
        </ProductsWrapper>
      </Wrapper>
      <SvgWaves />
    </>
  );
};

export default Main;
