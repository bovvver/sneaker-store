import React, { useContext } from "react";
import { Wrapper, ItemImg, ItemText } from "./CartItem.styles";
import DeleteIcon from "../../atoms/DeleteIcon/DeleteIcon";
import { CartCtx } from "../../../providers/CartConext";

const CartItem = ({ id, img, name, price, pieces, fullPrice }) => {
  const { deleteItem } = useContext(CartCtx);

  return (
    <Wrapper>
      <ItemImg src={img} alt={`${name}`} />
      <ItemText>
        <p>{name}</p>
        <p>
          {price} x {pieces} <span>${fullPrice}</span>
        </p>
      </ItemText>
      <button onClick={() => deleteItem(id)}>
        <DeleteIcon />
      </button>
    </Wrapper>
  );
};

export default CartItem;
