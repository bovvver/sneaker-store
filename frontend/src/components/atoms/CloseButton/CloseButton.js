import React from "react";
import { useNav } from "../../../providers/NavContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const CloseButton = () => {
  const { state, handleNavClick } = useNav();

  return (
    <button>
      <FontAwesomeIcon
        icon={faRightFromBracket}
        onClick={() => {
          handleNavClick(state);
        }}
      />
    </button>
  );
};

export default CloseButton;
