import React from "react";
import { StyledLink } from "./SiteTitle.styles";
import { useNav } from "../../../providers/NavContext";

const SiteTitle = () => {
  const { scrollTop } = useNav();

  return (
    <StyledLink to="/sneaker-store/" onClick={scrollTop}>
      sneakers
    </StyledLink>
  );
};

export default SiteTitle;
