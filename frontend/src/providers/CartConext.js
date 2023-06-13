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

        console.log(response);

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
    const response = await axios.post(
      `http://localhost:8080/users/cart/${item.id}/${pieces}`,
      null,
      { withCredentials: true }
    );

    console.log(response);
  };

  const deleteItem = (id) => {
    const cartCopy = cart.filter((el) => el.item.id !== id);
    setCart(cartCopy);
  };

  const clearCart = () => setCart([]);

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
