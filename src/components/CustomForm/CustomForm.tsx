import React, { useState } from "react";
import "./CustomForm.css";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { To, useNavigate } from "react-router-dom";
import { State } from "react-alice-carousel";

interface MyForm {
  email: string;
}

// interface NavigateProps {
//   to: To;
//   replace?: boolean;
//   state?: State;
// }

declare function Navigate(props: MyForm): null;

export const CustomForm: React.FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    getValues,
  } = useForm<MyForm>({
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const submit: SubmitHandler<MyForm> = (data) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    navigate("/success", { state: data });
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="form">
      <label className="inputHead">
        <span>Email address</span>
        <span className="error">
          {errors?.email && <>{errors.email.message || "Error!"}</>}
        </span>
      </label>
      <input
        className="input"
        placeholder="email@company.com"
        {...register("email", {
          required: "Valid email required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Valid email required",
          },
          validate: {
            emailValidate: async (fieldValue) => {
              const response = await fetch(
                `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
              );
              const data = await response.json();
              return data.length === 0 || "Email already exists";
            },
          },
        })}
      />
      {!isValid ? (
        <button className="subButton">Subscribe to monthly newsletter</button>
      ) : (
        <button className="subActiveButton">
          Subscribe to monthly newsletter
        </button>
      )}
    </form>
  );
};
