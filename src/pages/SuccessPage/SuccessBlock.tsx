import style from "./SuccessBlock.module.css";
import iconSuccess from "../../assets/images/icon-success.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { registrationService } from "../../service/request.service";

export const SuccessBlock = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await registrationService.deleteUser(state.id);
      navigate("/");
    } catch {
      navigate("/error");
    }

    // try {
    //   await fetch(
    //     `https://jsonplaceholder.typicode.com/users/${state.id - 1}`,
    //     {
    //       method: "DELETE",
    //     }
    //   );
    //   navigate("/");
    // } catch (error) {
    //   navigate("/error");
    // }
  };

  return (
    <div className={style.container}>
      <div className={style.block}>
        <div className={style.content}>
          <img src={iconSuccess} alt="+" style={{ width: "64px" }} />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to{" "}
            <span className={style.email}>{state.email}</span>. Please open it
            and click the button inside to confirm
          </p>
          <button className={style.dismissBtn} onClick={() => handleSubmit()}>
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
};
