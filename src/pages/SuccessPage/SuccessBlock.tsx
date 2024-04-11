import style from "./SuccessBlock.module.css";
import iconSuccess from "../../assets/images/icon-success.svg";
import { useLocation, useNavigate } from "react-router-dom";

export const SuccessBlock = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className={style.container}>
      <div className={style.block}>
        <div className={style.content}>
          <img src={iconSuccess} alt="+" style={{ width: "64px" }} />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to{" "}
            <span className={style.email}>{state.email}</span>. Please
            open it and click the button inside to confirm
          </p>
          <button className={style.dismissBtn} onClick={() => navigate("/")}>
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
};
