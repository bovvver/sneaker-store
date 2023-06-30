import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { executeFetchSneakers } from "../api/DataApiService";

export const Data = createContext({
  dataRef: null,
  isDataFetched: false,
  error: false,
});

export const useData = () => useContext(Data);

const DataContext = ({ children }) => {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [error, setError] = useState(false);
  const dataRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await executeFetchSneakers();
        dataRef.current = response.data;
        setIsDataFetched(true);
      } catch (error) {
        setError(true);
      }
    };

    if (!isDataFetched) {
      fetchSneakers();
    }
  }, [isDataFetched, navigate]);

  return (
    <Data.Provider
      value={{
        dataRef,
        isDataFetched,
        error
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default DataContext;
