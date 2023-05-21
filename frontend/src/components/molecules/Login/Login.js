import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../providers/AuthContext";
import { useModal } from "../../../providers/ModalContext";

const Login = ({ loginState }) => {
  const { setUsername, handleLogin } = useAuth();
  const { handleModalState } = useModal();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.username === "dev" && data.password === "dev") {
      handleLogin();
      setUsername(data.username);
    } else {
      handleModalState("Invalid credentials");
      reset();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Log In</h2>
        <input
          {...register("username", { required: true })}
          placeholder="Username"
          type="text"
        />
        {errors.username ? <span>Required</span> : <span></span>}
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
