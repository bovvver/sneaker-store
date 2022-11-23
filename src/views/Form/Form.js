import React, { useContext } from "react";
import { Wrapper, SubmitButton, InputBlock, StyledForm } from "./Form.styles";
import { useForm } from "react-hook-form";
import SectionHeader from "../../components/atoms/SectionHeader/SectionHeader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ModalContext, CartContext } from "../../providers/ContextProviders";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    name: yup
      .string()
      .max(20, "Too many characters.")
      .required("This field is required."),
    surname: yup
      .string()
      .max(30, "Too many characters.")
      .required("This field is required."),
    email: yup
      .string()
      .email("E-mail is not valid.")
      .max(60)
      .required("This field is required."),
    phoneNumber: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid."
      )
      .required("This field is required."),
    zipCode: yup
      .string()
      .matches(/^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/, "Zip code is not valid.")
      .required("This field is required."),
    city: yup
      .string()
      .max(50, "Too many characters.")
      .required("This field is required."),
    street: yup
      .string()
      .max(50, "Too many characters.")
      .required("This field is required."),
    houseNumber: yup
      .string()
      .max(5, "Too many characters.")
      .required("This field is required."),
    apartmentNumber: yup.string().max(5, "Too many characters."),
  })
  .required();

const Form = () => {
  const { handleModalState } = useContext(ModalContext);
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = () => {
    navigate("/");
    clearCart();
    handleModalState("Order successful!");
  };

  return (
    <Wrapper>
      <SectionHeader title="Finish your order" />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputBlock>
          <input {...register("name")} type="text" placeholder="Name" />
          {errors.name ? <span>{errors.name.message}</span> : null}
        </InputBlock>
        <InputBlock>
          <input {...register("surname")} type="text" placeholder="Surname" />
          {errors.surname ? <span>{errors.surname.message}</span> : null}
        </InputBlock>
        <InputBlock>
          <input {...register("email")} type="text" placeholder="E-mail" />
          {errors.email ? <span>{errors.email.message}</span> : null}
        </InputBlock>
        <InputBlock>
          <input
            {...register("phoneNumber")}
            type="text"
            placeholder="Phone number"
          />
          {errors.phoneNumber ? (
            <span>{errors.phoneNumber.message}</span>
          ) : null}
        </InputBlock>
        <InputBlock>
          <input {...register("zipCode")} type="text" placeholder="Zip code" />
          {errors.zipCode ? <span>{errors.zipCode.message}</span> : null}
        </InputBlock>
        <InputBlock>
          <input {...register("city")} type="text" placeholder="City" />
          {errors.city ? <span>{errors.city.message}</span> : null}
        </InputBlock>
        <InputBlock>
          <input {...register("street")} type="text" placeholder="Street" />
          {errors.street ? <span>{errors.street.message}</span> : null}
        </InputBlock>
        <InputBlock>
          <input
            {...register("houseNumber")}
            type="text"
            placeholder="House number"
          />
          {errors.houseNumber ? (
            <span>{errors.houseNumber.message}</span>
          ) : null}
        </InputBlock>
        <InputBlock>
          <input
            {...register("apartmentNumber")}
            type="text"
            placeholder="Apartment"
          />
          {errors.apartmentNumber ? (
            <span>{errors.apartmentNumber.message}</span>
          ) : null}
        </InputBlock>
        <SubmitButton type="submit" value="Order" />
      </StyledForm>
    </Wrapper>
  );
};

export default Form;
