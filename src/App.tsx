import React from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface MyForm {
  name: string;
  age: number;
}

const App: React.FC = () => {
  const { register, handleSubmit } = useForm<MyForm>({
    defaultValues: {},
  });

  const submit: SubmitHandler<MyForm> = (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<MyForm> = (data) => {
    console.log(data);
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <form onSubmit={handleSubmit(submit, error)}>
        <input type="text" {...register('name', { required: true})}/>
        <input type="number" {...register('age')}/>
        <button>Отправить</button>
      </form>
    </div>
  );
};

export { App };
