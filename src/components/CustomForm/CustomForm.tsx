import "./CustomForm.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface MyForm {
  email: string;
}

export const CustomForm: React.FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<MyForm>({
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const asyncPostCall = async (data: MyForm) => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      });
      navigate("/success", { state: data })
  
    } catch (error) {
      navigate('/error')
      console.log(error);
    }
  };

  const submit: SubmitHandler<MyForm> = (data) => {
    // fetch("https://jsonplaceholder.typicodeee.com/users", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))
    //   .then(() => navigate("/success", { state: data }))
    //   .catch((err) => navigate('/error'));
    asyncPostCall(data);
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
