import React, { useState, useEffect } from "react";
import SectionHeader from "../../components/atoms/SectionHeader/SectionHeader";
import { Wrapper, SortingWrapper } from "./Main.styles";
import LoadingScreen from "../../components/atoms/LoadingScreen/LoadingScreen";
import Product from "../../components/molecules/Product/Product";
import { useNavigate, useParams } from "react-router-dom";
import { CustomLink, ProductsWrapper } from "./Main.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownAZ,
  faArrowDownZA,
  faArrowDown91,
  faArrowDown19,
} from "@fortawesome/free-solid-svg-icons";
import { useSize } from "../../providers/ScreenSizeContext";
import { useModal } from "../../providers/ModalContext";
import { useLoading } from "../../providers/LoadingContext";
import { useData } from "../../providers/DataContext";
import axios from "axios";

const Main = () => {
  const [details, setDetails] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const { gender } = useParams();
  const { screenWidth } = useSize();
  const { loading, setLoading } = useLoading();
  const { handleModalState } = useModal();
  const { dataRef, handleRefChange } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/sneakers");
        handleRefChange(response.data);
        setDetails(response.data);
        setIsDataFetched(true);
        setLoading(false);
      } catch (error) {
        navigate("/sneaker-store/error");
      }
    };

    if (!isDataFetched) {
      fetchSneakers();
    }
  }, [handleModalState, handleRefChange, isDataFetched, navigate, setLoading]);

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
          {loading ? (
            <LoadingScreen />
          ) : (
            details.map((el) => (
              <CustomLink
                key={el.id}
                to={`/sneaker-store/product/${el.producer}-${el.name.replaceAll(" ","-")}`}
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
    </>
  );
};

export default Main;
