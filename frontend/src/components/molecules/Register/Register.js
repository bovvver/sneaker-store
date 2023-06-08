import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useModal } from "../../../providers/ModalContext";
import { useAuth } from "../../../providers/AuthContext";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const schema = yup
  .object({
    username: yup
      .string()
      .max(20, "Too many characters.")
      .required("This field is required."),
    email: yup
      .string()
      .email("E-mail is not valid.")
      .max(60)
      .required("This field is required."),
    password: yup
      .string()
      .matches(passwordRules, { message: "Password is too weak" })
      .required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  })
  .required();

const Register = ({ loginState }) => {
  const { handleRegister } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const { confirmPassword, ...newData } = data;
    handleRegister(newData);
    loginState();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Create account</h2>
        <input {...register("username")} placeholder="Username" type="text" />
        {errors.username ? (
          <span>{errors.username.message}</span>
        ) : (
          <span></span>
        )}
        <input {...register("email")} placeholder="E-mail" type="text" />
        {errors.email ? <span>{errors.email.message}</span> : <span></span>}
        <input
          {...register("password")}
          placeholder="Password"
          type="password"
        />
        {errors.password ? (
          <span>{errors.password.message}</span>
        ) : (
          <span></span>
        )}
        <input
          {...register("confirmPassword")}
          placeholder="Confirm password"
          type="password"
        />
        {errors.confirmPassword ? (
          <span>{errors.confirmPassword.message}</span>
        ) : (
          <span></span>
        )}
        <input type="submit" value="Create account" />
      </form>
      <p onClick={loginState}>Log In</p>
    </>
  );
};

export default Register;
