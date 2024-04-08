import React from "react";
import "./style.css";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface MyForm {
  email: string;
}

export const CustomForm: React.FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<MyForm>({
    mode: "onBlur",
  });

  const submit: SubmitHandler<MyForm> = (data) => {
    // console.log(data);
    alert(JSON.stringify(data));
    reset();
  };

  const error: SubmitErrorHandler<MyForm> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submit, error)} className="form">
      <label className="inputHead">
        <span>Email address</span>

        <span className="error">
          {errors?.email && <>{errors.email.message || "Error!"}</>}
        </span>
      </label>
      <input
        placeholder="email@company.com"
        {...register("email", {
          required: "Valid email required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Valid email required",
          },
        })}
        className="input"
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
