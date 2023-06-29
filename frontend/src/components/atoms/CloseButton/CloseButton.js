import React from "react";
import { useNav } from "../../../providers/NavContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const CloseButton = () => {
  const { state, handleNavClick } = useNav();

  return (
    <FontAwesomeIcon
      icon={faRightFromBracket}
      onClick={() => {
        handleNavClick(state);
      }}
    />
  );
};

export default CloseButton;
