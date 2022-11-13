import React from "react";
import SectionHeader from "../../components/atoms/SectionHeader/SectionHeader";
import { Wrapper } from "./Main.styles";
import Product from "../../components/molecules/Product/Product";

const Main = () => {
  return (
    <Wrapper>
      <SectionHeader title="Our offer" />
      <Product />
      <Product />
    </Wrapper>
  );
};

export default Main;
