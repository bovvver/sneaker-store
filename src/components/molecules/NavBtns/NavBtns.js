import React, { useContext } from "react";
import { Wrapper, ProfileButton } from "./NavBtns.styles";
import CartImg from "../../atoms/CartImg/CartImg";
import UserPhoto from "../../../assets/images/image-avatar.png";
import { CartContext } from "../../../providers/ContextProviders";

const NavBtns = () => {
  const { handleCartClick } = useContext(CartContext);

  return (
    <Wrapper>
      <CartImg onClick={handleCartClick} />
      <ProfileButton src={UserPhoto} />
    </Wrapper>
  );
};

export default NavBtns;
