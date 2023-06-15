import React from "react";
import Logo from "../../atoms/SiteTitle/SiteTitle";
import { Wrapper, FooterBlock } from "./Footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <FooterBlock>
        <p>sneakers &copy; {new Date().getFullYear()}</p>
        <p>123-131 Bradford St</p>
        <p>Birmingham B12 0NS</p>
        <p>United Kingdom</p>
      </FooterBlock>
      <FooterBlock>
        <Logo />
      </FooterBlock>
    </Wrapper>
  );
};

export default Footer;
