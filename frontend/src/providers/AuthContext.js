import React, { createContext, useContext, useState } from "react";
import { useModal } from "./ModalContext";
import { useNavigate } from "react-router-dom";

export const Auth = createContext({
  isAuthenticated: false,
  handleLogin: () => {},
  username: "",
  setUsername: () => {},
});

export const useAuth = () => useContext(Auth);

const AuthContext = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const { handleModalState } = useModal();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/sneaker-store/");

    if (isAuthenticated) {
      handleModalState("Logged Out");
      setIsAuthenticated(false);
    } else {
      handleModalState("Logged In");
      setIsAuthenticated(true);
    }
  };

  return (
    <Auth.Provider
      value={{
        isAuthenticated,
        handleLogin,
        username,
        setUsername,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;
