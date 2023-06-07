import React, { useState, createContext, useContext } from "react";

export const Loading = createContext({
  loading: true,
  setLoading: () => {},
});

export const useLoading = () => useContext(Loading);

const LoadingContext = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Loading.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </Loading.Provider>
  );
};

export default LoadingContext;
