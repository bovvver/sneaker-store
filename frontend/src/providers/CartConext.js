import React, { useState, createContext, useContext } from "react";

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

  const handleCartClick = () => {
    setOpacity(!opacity);
  };

  const handleButtonClick = (pieces, item) => {
    const [checkItem] = cart.filter((el) => el.item.id === item.id);

    if (pieces !== 0) {
      if (checkItem) {
        const cartCopy = [...cart];
        cartCopy.forEach((el) => {
          if (el.item.id === checkItem.item.id) {
            el.pieces += pieces;
          }
          setCart(cartCopy);
        });
      } else {
        setCart((oldCart) => [...oldCart, { pieces, item }]);
      }
    }
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
