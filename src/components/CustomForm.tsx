import React from "react";
import "./style.css";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface MyForm {
  email: string;
}

export const CustomForm: React.FC = () => {
  const { register, handleSubmit } = useForm<MyForm>({
    defaultValues: {},
  });

  const submit: SubmitHandler<MyForm> = (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<MyForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="wrap">
      <form onSubmit={handleSubmit(submit, error)}>
        <label>Email address</label>
        <input {...register("email", { required: true })} />
        <button>Subscribe on monthly newsletter</button>
      </form>
    </div>
  );
};
