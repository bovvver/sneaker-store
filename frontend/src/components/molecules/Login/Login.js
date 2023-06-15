import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../providers/AuthContext";

const Login = ({ loginState }) => {
  const { handleLogin } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleLogin(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Log In</h2>
        <input
          {...register("email", { required: true })}
          placeholder="E-mail"
          type="text"
        />
        {errors.email ? <span>Required</span> : <span></span>}
        <input
          {...register("password", { required: true })}
          placeholder="Password"
          type="password"
        />
        {errors.password ? <span>Required</span> : <span></span>}
        <input type="submit" value="Log In" />
        <input type="submit" value="Log In with Google" />
      </form>
      <p onClick={loginState}>Create an account</p>
    </>
  );
};

export default Login;
