import React, { createContext, useContext, useState } from "react";
import { useModal } from "./ModalContext";
import { useNavigate } from "react-router-dom";
import {
  executeAuthentication,
  executeLogout,
  executeRegistration,
} from "../api/AuthenticationApiService";

export const Auth = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  handleLogin: () => {},
  handleRegister: () => {},
});

export const useAuth = () => useContext(Auth);

const AuthContext = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { handleModalState } = useModal();
  const navigate = useNavigate();

  const handleContextStates = (newAuthentication) => {
    setIsAuthenticated(newAuthentication);
    navigate("/sneaker-store/");
    handleModalState(newAuthentication ? "Login successful" : "Logged Out");
  };

  const handleLogin = async (data) => {
    if (!isAuthenticated) {
      try {
        await executeAuthentication(data);

        handleContextStates(true);
      } catch (error) {
        handleModalState("Invalid credentials");
      }
    } else {
      try {
        await executeLogout();

        handleContextStates(false);
      } catch (error) {
        handleModalState("Error during logout.");
      }
    }
  };

  const handleRegister = async (data) => {
    try {
      await executeRegistration(data);

      handleModalState("Account created");
    } catch (error) {
      handleModalState("Account already exists");
    }
  };

  return (
    <Auth.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        handleLogin,
        handleRegister,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;
