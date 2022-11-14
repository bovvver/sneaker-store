import React from "react";
import SectionHeader from "../../components/atoms/SectionHeader/SectionHeader";
import { Wrapper } from "./Main.styles";
import Product from "../../components/molecules/Product/Product";
import data from "../../data/data";

const Main = () => {
  return (
    <Wrapper>
      <SectionHeader title="Our offer" />
      {data.sneakers.map((el) => (
        <Product
          key={el.id}
          image={el.photos[0]}
          producer={el.producer}
          name={el.name}
          description={el.description}
          price={el.price}
        />
      ))}
    </Wrapper>
  );
};

export default Main;
