import React from "react";
import { Wrapper, StyledInput, SubmitButton } from "./Form.styles";
import { useForm } from "react-hook-form";
import SectionHeader from "../../components/atoms/SectionHeader/SectionHeader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);

  return (
    <Wrapper>
      <SectionHeader title="Finish your order" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput {...register("name")} type="text" placeholder="Name" />
        {errors.name && <span>{errors.name.message}</span>}
        <StyledInput
          {...register("surname")}
          type="text"
          placeholder="Surname"
        />
        <StyledInput {...register("email")} type="text" placeholder="E-mail" />
        <StyledInput
          {...register("phoneNumber")}
          type="text"
          placeholder="Phone number"
        />
        <StyledInput
          {...register("zipCode")}
          type="text"
          placeholder="Zip code"
        />
        <StyledInput {...register("city")} type="text" placeholder="City" />
        <StyledInput {...register("street")} type="text" placeholder="Street" />
        <StyledInput
          {...register("houseNumber")}
          type="text"
          placeholder="House number"
        />
        <StyledInput
          {...register("apartmentNumber")}
          type="text"
          placeholder="Apartment"
        />
        <SubmitButton type="submit" value="Order" />
      </form>
    </Wrapper>
  );
};

export default Form;
