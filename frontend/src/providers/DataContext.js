import React, { createContext, useContext, useRef } from "react";

export const Data = createContext({
  dataRef: null,
  handleRefChange: () => {},
});

export const useData = () => useContext(Data);

const DataContext = ({ children }) => {
  const dataRef = useRef();

  const handleRefChange = (value) => {
    dataRef.current = value;
  };

  return (
    <Data.Provider
      value={{
        dataRef,
        handleRefChange,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default DataContext;
