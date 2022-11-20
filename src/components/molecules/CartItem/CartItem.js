import React from "react";
import { Wrapper, ItemImg, ItemText } from "./CartItem.styles";
import DeleteIcon from "../../atoms/DeleteIcon/DeleteIcon";

const CartItem = ({ name }) => {
  return (
    <Wrapper>
      <ItemImg img="" />
      <ItemText>
        <p>{name}</p>
        <p>
          $125.00 x 3 <span>$375.00</span>
        </p>
      </ItemText>
      <button>
        <DeleteIcon />
      </button>
    </Wrapper>
  );
};

export default CartItem;
