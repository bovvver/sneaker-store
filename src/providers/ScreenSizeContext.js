import React, { useState, createContext } from "react";

export const ScreenSize = createContext({
  screenWidth: 0,
  handleWidthChange: () => {},
});

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
