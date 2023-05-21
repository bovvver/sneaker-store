import React, { useState } from "react";
import { Wrapper } from "./SignUpForm.styles";
import SiteTitle from "../../components/atoms/SiteTitle/SiteTitle";
import Login from "../../components/molecules/Login/Login";
import Register from "../../components/molecules/Register/Register";

const SignUpForm = () => {
  const [login, setLogin] = useState(true);

  const handleLoginState = () => {
    setLogin((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <SiteTitle />
      {login ? (
        <Login loginState={handleLoginState} />
      ) : (
        <Register loginState={handleLoginState} />
      )}
    </Wrapper>
  );
};

export default SignUpForm;
