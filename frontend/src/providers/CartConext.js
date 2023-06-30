import React, { useState, useEffect, createContext, useContext } from "react";
import { useAuth } from "../providers/AuthContext";
import { useModal } from "../providers/ModalContext";
import {
  executeCartFetch,
  executeItemAddition,
  executeItemDeletion,
  executeOrderFinish,
} from "../api/CartApiService";
import {
  executeHistoryCleaning,
  executeHistoryFetch,
  executeHistoryItemDeletion,
} from "../api/HistoryApiService";

export const CartCtx = createContext({
  opacity: false,
  handleCartClick: () => {},
  cart: [],
  handleButtonClick: () => {},
  deleteItem: () => {},
  finishOrder: () => {},
  history: [],
  deleteFromHistory: () => {},
  deleteHistoryItem: () => {},
});

export const useCart = () => useContext(CartCtx);

const CartConext = ({ children }) => {
  const [opacity, setOpacity] = useState(false);
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  const { isAuthenticated, userId, token } = useAuth();
  const { handleModalState } = useModal();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartResponse = await executeCartFetch();
        const historyResponse = await executeHistoryFetch();

        setCart(cartResponse);
        setHistory(historyResponse);
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
      const response = await executeItemAddition(pieces, item);

      setCart(response);
    } catch (error) {
      handleModalState("Error during updating cart");
    }
  };

  const deleteItem = async (sneakerId) => {
    try {
      const response = await executeItemDeletion(sneakerId);

      setCart(response);
    } catch (error) {
      handleModalState("Error during deleting an item");
    }
  };

  const finishOrder = async () => {
    try {
      const cartResponse = await executeOrderFinish();
      const historyResponse = await executeHistoryFetch();


      setCart(cartResponse);
      setHistory(historyResponse);
    } catch (error) {
      handleModalState("Error during order completion");
    }
  };

  const clearHistory = async () => {
    try {
      const response = await executeHistoryCleaning();

      setHistory(response);
    } catch (error) {
      handleModalState("Error during clearing history");
    }
  };

  const deleteHistoryItem = async (sneakerId) => {
    try {
      const response = await executeHistoryItemDeletion(sneakerId);

      setHistory(response);
    } catch (error) {
      handleModalState("Error during deleting an item");
    }
  };

  return (
    <CartCtx.Provider
      value={{
        opacity,
        handleCartClick,
        cart,
        handleButtonClick,
        deleteItem,
        finishOrder,
        history,
        clearHistory,
        deleteHistoryItem,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};

export default CartConext;
