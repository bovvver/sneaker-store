import React, { useState, createContext, useContext } from "react";

export const ScreenSize = createContext({
  screenWidth: 0,
  handleWidthChange: () => {},
});

export const useSize = () => useContext(ScreenSize);

const ScreenSizeContext = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleWidthChange = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleWidthChange);

  return (
    <ScreenSize.Provider value={{ screenWidth, handleWidthChange }}>
      {children}
    </ScreenSize.Provider>
  );
};

export default ScreenSizeContext;
