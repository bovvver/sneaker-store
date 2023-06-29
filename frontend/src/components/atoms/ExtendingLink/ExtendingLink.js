import React from "react";
import { ExtendButton, LinkWrapper } from "./ExtendingLink.styles";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const ExtendingLink = ({ content, links, onClick }) => {
  const [extend, setExtend] = useState(false);

  const extendList = () => {
    setExtend((prevState) => !prevState);
  };

  const handleNavClick = () => {
    onClick();
    setExtend(false);
  };

  return (
    <>
      <ExtendButton onClick={extendList}>{content}</ExtendButton>
      <LinkWrapper extended={extend}>
        {links.map((el) => (
          <NavLink key={el.name} to={el.destination} onClick={handleNavClick}>
            {el.name}
          </NavLink>
        ))}
      </LinkWrapper>
    </>
  );
};

export default ExtendingLink;
