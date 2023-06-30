import React from "react";
import { ExtendButton, LinkWrapper } from "./ExtendingLink.styles";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ExtendingLink = ({ content, links, onClick, isNavigation }) => {
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
      <ExtendButton onClick={extendList} extend={extend}>
        <p>{content}</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </ExtendButton>
      <LinkWrapper extended={extend}>
        {isNavigation
          ? links.map((el) => (
              <NavLink
                key={el.name}
                to={el.destination}
                onClick={handleNavClick}
              >
                {el.name}
              </NavLink>
            ))
          : links.map((el) => (
              <button key={el.name} onClick={() => el.fn()}>
                {el.name}
              </button>
            ))}
      </LinkWrapper>
    </>
  );
};

export default ExtendingLink;
