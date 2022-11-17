import React from "react";
import { Wrapper, AboutContent } from "./About.styles";
import SectionHeader from "../../components/atoms/SectionHeader/SectionHeader";
import SvgWaves from "../../components/atoms/SvgWaves/SvgWaves";

const About = () => {
  return (
    <>
      <Wrapper>
        <SectionHeader title="About Us" />
        <AboutContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          cumque eveniet dolore voluptates facilis odio dolorum ea ratione
          magni! Consectetur ex laborum, deleniti sint vel ipsam, labore fugit
          expedita harum minus laudantium voluptates nemo eaque modi, doloribus
          obcaecati quo? Fuga sit molestias magnam molestiae mollitia cupiditate
          nihil praesentium, nesciunt doloribus, illum, minus at autem deleniti.
        </AboutContent>
        <AboutContent>
          Ipsam autem vitae reprehenderit numquam inventore illum iusto
          similique, dignissimos eligendi dolor corrupti tempora ea dolorem sit
          dolorum, blanditiis molestias harum libero laborum ducimus dicta amet
          perferendis? Delectus autem culpa repudiandae molestias quis nemo quo,
          consectetur non ex adipisci architecto ad id repellendus aliquam saepe
          fugiat.
        </AboutContent>
      </Wrapper>
      <SvgWaves />
    </>
  );
};

export default About;
