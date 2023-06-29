import React, { useState, useEffect } from "react";
import { Wrapper, SortingWrapper } from "./Main.styles";
import LoadingScreen from "../../components/atoms/LoadingScreen/LoadingScreen";
import Product from "../../components/molecules/Product/Product";
import { useParams } from "react-router-dom";
import { CustomLink, ProductsWrapper } from "./Main.styles";
import { useData } from "../../providers/DataContext";
import Footer from "../../components/organisms/Footer/Footer";
import ExtendingLink from "../../components/atoms/ExtendingLink/ExtendingLink";

const Main = () => {
  const [details, setDetails] = useState([]);
  const { gender } = useParams();
  const [loading, setLoading] = useState(true);
  const { dataRef, isDataFetched } = useData();

  useEffect(() => {
    if (isDataFetched) {
      setDetails(dataRef.current);
      setLoading(false);
    }
  }, [dataRef, isDataFetched, setLoading]);

  useEffect(() => {
    if (gender !== undefined && isDataFetched) {
      const sneakers = dataRef.current.filter(
        (el) => el.gender === gender || el.gender === "unisex"
      );

      setDetails(sneakers);
    } else {
      setDetails(dataRef.current);
    }
  }, [dataRef, gender, isDataFetched]);

  const setAscDetails = () => {
    setDetails((prevDetails) =>
      [...prevDetails].sort((obj1, obj2) => obj2.price - obj1.price)
    );
  };

  const setDescDetails = () => {
    setDetails((prevDetails) =>
      [...prevDetails].sort((obj1, obj2) => obj1.price - obj2.price)
    );
  };

  const setAlpabeticalDetails = () => {
    const alphabeticalDetails = [...details].sort((obj1, obj2) =>
      obj1.name > obj2.name ? 1 : -1
    );

    setDetails(alphabeticalDetails);
  };

  const setReverseDetails = () => {
    const reverseOrder = [...details].sort((obj1, obj2) =>
      obj1.name > obj2.name ? -1 : 1
    );

    setDetails(reverseOrder);
  };

  return (
    <>
      <Wrapper>
        <SortingWrapper>
          <ExtendingLink
            content="sort by "
            links={[
              {
                name: "Alphabet (A-Z)",
                fn: setAlpabeticalDetails,
              },
              {
                name: "Alphabet (Z-A)",
                fn: setReverseDetails,
              },
              {
                name: "Price asc.",
                fn: setAscDetails,
              },
              {
                name: "Price desc.",
                fn: setDescDetails,
              },
            ]}
            isNavigation={false}
          />
        </SortingWrapper>

        <ProductsWrapper>
          {loading ? (
            <LoadingScreen />
          ) : (
            details.map((el) => (
              <CustomLink
                key={el.id}
                to={`/sneaker-store/product/${el.producer}-${el.name.replaceAll(
                  " ",
                  "-"
                )}`}
              >
                <Product
                  image={el.photos[0].path}
                  producer={el.producer}
                  name={el.name}
                  description={el.description}
                  price={el.price}
                />
              </CustomLink>
            ))
          )}
        </ProductsWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Main;
