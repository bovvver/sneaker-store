import React from "react";
import { Wrapper, ItemImg, ItemText } from "./CartItem.styles";
import DeleteIcon from "../../atoms/DeleteIcon/DeleteIcon";
import { useCart } from "../../../providers/CartConext";

const CartItem = ({ id, img, name, price, pieces, fullPrice, deletable }) => {
  const { deleteItem, deleteHistoryItem } = useCart();

  return (
    <Wrapper>
      <ItemImg src={img} alt={`${name}`} />
      <ItemText>
        <p>{name}</p>
        <p>
          ${price} x {pieces} <span>${fullPrice}</span>
        </p>
      </ItemText>
      <button
        onClick={() => {
          if(deletable)
            deleteItem(id);
          else deleteHistoryItem(id);
        }}
      >
        <DeleteIcon />
      </button>
    </Wrapper>
  );
};

export default CartItem;
