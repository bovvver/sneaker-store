import React, { createContext, useContext, useState } from "react";
import { useModal } from "./ModalContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Auth = createContext({
  isAuthenticated: false,
  handleLogin: () => {},
  handleRegister: () => {},
  username: "",
  setUsername: () => {},
  token: null,
});

export const useAuth = () => useContext(Auth);

const AuthContext = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const { handleModalState } = useModal();
  const navigate = useNavigate();

  const handleLoginStates = (newToken, newUsername, newAuthentication) => {
    setToken(newToken);
    setUsername(newUsername);
    setIsAuthenticated(newAuthentication);
    navigate("/sneaker-store/");
    handleModalState(newAuthentication ? "Login successful" : "Logged out");
  };

  const handleLogin = async (data) => {
    if (!isAuthenticated) {
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/authenticate",
          data
        );
        handleLoginStates(response.data.accessToken, data.username, true);
      } catch (error) {
        setToken(null);
        handleModalState("Invalid credentials");
      }
    } else {
      handleLoginStates(null, "", false);
    }
  };

  const handleRegister = async (data) => {
    try {
      await axios.post("http://localhost:8080/auth/register", data);
      handleModalState("Account created");
    } catch (error) {
      handleModalState("Registration error");
    }
  };

  return (
    <Auth.Provider
      value={{
        isAuthenticated,
        handleLogin,
        handleRegister,
        username,
        setUsername,
        token,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;
