import React from "react";
import { Wrapper, TitleSection } from "./MobileNavigation.styles";
import NavBars from "../../atoms/NavBars/NavBars";
import SiteTitle from "../../atoms/SiteTitle/SiteTitle";
import NavBtns from "../../molecules/NavBtns/NavBtns";

const MobileNavigation = () => {
  return (
    <Wrapper>
      <TitleSection>
        <NavBars />
        <SiteTitle />
      </TitleSection>
      <NavBtns />
    </Wrapper>
  );
};

export default MobileNavigation;
