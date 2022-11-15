import React from "react";
import { Wrapper, ProfileButton } from "./NavBtns.styles";
import CartImg from "../../atoms/CartImg/CartImg";
import UserPhoto from "../../../assets/images/image-avatar.png";

const NavBtns = ({ state, onClick }) => {
  return (
    <Wrapper>
      <CartImg />
      <ProfileButton src={UserPhoto} />
    </Wrapper>
  );
};

export default NavBtns;
