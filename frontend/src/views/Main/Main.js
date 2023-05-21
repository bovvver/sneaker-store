import React, { useState, useEffect } from "react";
import SectionHeader from "../../components/atoms/SectionHeader/SectionHeader";
import { Wrapper, SortingWrapper } from "./Main.styles";
import Product from "../../components/molecules/Product/Product";
import data from "../../data/data";
import { useParams } from "react-router-dom";
import { CustomLink, ProductsWrapper } from "./Main.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownAZ,
  faArrowDownZA,
  faArrowDown91,
  faArrowDown19,
} from "@fortawesome/free-solid-svg-icons";
import { useSize } from "../../providers/ScreenSizeContext";

const Main = () => {
  const [details, setDetails] = useState(data.sneakers);
  const { gender } = useParams();
  const { screenWidth } = useSize();

  useEffect(() => {
    if (gender !== undefined) {
      const sneakers = data.sneakers.filter(
        (el) => el.gender === gender || el.gender === "unisex"
      );

      setDetails(sneakers);
    } else {
      setDetails(data.sneakers);
    }
  }, [gender]);

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
        <SectionHeader title={gender === undefined ? "Our offer" : gender} />
        <SortingWrapper>
          {screenWidth > 768 ? <p>sorting</p> : null}
          <FontAwesomeIcon
            onClick={setAlpabeticalDetails}
            icon={faArrowDownAZ}
          />
          <FontAwesomeIcon onClick={setReverseDetails} icon={faArrowDownZA} />
          <FontAwesomeIcon onClick={setDescDetails} icon={faArrowDown19} />
          <FontAwesomeIcon onClick={setAscDetails} icon={faArrowDown91} />
        </SortingWrapper>
        <ProductsWrapper>
          {details.map((el) => (
            <CustomLink
              key={el.id}
              to={`/sneaker-store/product/${el.producer}-${
                el.id.split("-")[0]
              }`}
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
    </>
  );
};

export default Main;
