import React, { useContext } from "react";
import {
  Wrapper,
  AboutContent,
  DecorationBlock,
  DecorationImage,
  AboutWrapper,
} from "./About.styles";
import SectionHeader from "../../components/atoms/SectionHeader/SectionHeader";
import SvgWaves from "../../components/atoms/SvgWaves/SvgWaves";
import data from "../../data/data";
import { ScreenSizeContext } from "../../providers/ContextProviders";

const About = () => {
  const { screenWidth } = useContext(ScreenSizeContext);

  const photoSrc = data.sneakers[2].largePhotos[0];

  return (
    <>
      <Wrapper>
        <SectionHeader title="About Us" />
        {screenWidth >= 768 ? (
          <>
            <DecorationBlock></DecorationBlock>
            <DecorationImage src={photoSrc}></DecorationImage>
          </>
        ) : null}
        <AboutWrapper>
          <AboutContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            cumque eveniet dolore voluptates facilis odio dolorum ea ratione
            magni! Consectetur ex laborum, deleniti sint vel ipsam, labore fugit
            expedita harum minus laudantium voluptates nemo eaque modi,
            doloribus obcaecati quo? Fuga sit molestias magnam molestiae
            mollitia cupiditate nihil praesentium, nesciunt doloribus, illum,
            minus at autem deleniti.
          </AboutContent>
          <AboutContent>
            Ipsam autem vitae reprehenderit numquam inventore illum iusto
            similique, dignissimos eligendi dolor corrupti tempora ea dolorem
            sit dolorum, blanditiis molestias harum libero laborum ducimus dicta
            amet perferendis? Delectus autem culpa repudiandae molestias quis
            nemo quo, consectetur non ex adipisci architecto ad id repellendus
            aliquam saepe fugiat.
          </AboutContent>
        </AboutWrapper>
      </Wrapper>
      <SvgWaves />
    </>
  );
};

export default About;
