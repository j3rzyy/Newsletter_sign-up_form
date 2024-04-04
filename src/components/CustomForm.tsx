import React from "react";
import "./style.css";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface MyForm {
  email: string;
}

export const CustomForm: React.FC = () => {
  const {
    register,
    formState: { errors },
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
    <div className="wrap">
      <form onSubmit={handleSubmit(submit, error)} className="form">
        <label className="inputHead">Email address</label>
        <input
          {...register("email", {
            required: "Valid email required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          // value="email@company.com"
          className="input"
        />
        <div>{errors?.email && <p>{errors.email.message || "Error!"}</p>}</div>
        <button className="subButton">Subscribe on monthly newsletter</button>
      </form>
    </div>
  );
};
