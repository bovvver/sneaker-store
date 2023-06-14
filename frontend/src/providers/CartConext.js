import axios from "axios";
import React, { useState, useEffect, createContext, useContext } from "react";
import { useAuth } from "../providers/AuthContext";
import { useModal } from "../providers/ModalContext";

export const CartCtx = createContext({
  opacity: false,
  handleCartClick: () => {},
  cart: [],
  handleButtonClick: () => {},
  deleteItem: () => {},
  clearCart: () => {},
});

export const useCart = () => useContext(CartCtx);

const CartConext = ({ children }) => {
  const [opacity, setOpacity] = useState(false);
  const [cart, setCart] = useState([]);
  const { isAuthenticated, userId, token } = useAuth();
  const { handleModalState } = useModal();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios
          .get(`http://localhost:8080/users/cart`, {
            withCredentials: true,
          })
          .then((res) => res.data);

        setCart(response);
      } catch (error) {
        handleModalState(error.message);
      }
    };

    if (isAuthenticated) {
      fetchCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, isAuthenticated, token]);

  const handleCartClick = () => {
    setOpacity(!opacity);
  };

  const handleButtonClick = async (pieces, item) => {
    try {
      const response = await axios
        .post(`http://localhost:8080/users/cart/${item.id}/${pieces}`, null, {
          withCredentials: true,
        })
        .then((res) => res.data);

      setCart(response);
    } catch (error) {
      handleModalState("Error during updating cart");
    }
  };

  const deleteItem = async (sneakerId) => {
    try {
      const response = await axios
        .post(`http://localhost:8080/users/cart/delete/${sneakerId}`, null, {
          withCredentials: true,
        })
        .then((res) => res.data);

      setCart(response);
    } catch (error) {
      handleModalState("Error during deleting an item");
    }
  };

  const clearCart = async () => {
    try {
      const response = await axios
        .post(`http://localhost:8080/users/clear-cart`, null, {
          withCredentials: true,
        })
        .then((res) => res.data);

      setCart(response);
    } catch (error) {
      handleModalState("Error during clearing cart");
    }
  };

  return (
    <CartCtx.Provider
      value={{
        state: opacity,
        handleCartClick,
        cart,
        handleButtonClick,
        deleteItem,
        clearCart,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};

export default CartConext;
