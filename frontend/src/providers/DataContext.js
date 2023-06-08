import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Data = createContext({
  dataRef: null,
  isDataFetched: false,
});

export const useData = () => useContext(Data);

const DataContext = ({ children }) => {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const dataRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/sneakers");
        dataRef.current = response.data;
        setIsDataFetched(true);
      } catch (error) {
        navigate("/sneaker-store/error");
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
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default DataContext;
