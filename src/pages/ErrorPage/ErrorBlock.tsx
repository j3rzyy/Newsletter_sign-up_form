import style from "./ErrorBlock.module.css";
import iconSuccess from "../../assets/images/icon-success.svg";
import { useLocation, useNavigate } from "react-router-dom";

export const ErrorBlock = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className={style.container}>
      <div className={style.block}>
        <div className={style.content}>
          <h1>Error: Invalid request</h1>
          <button className={style.dismissBtn} onClick={() => navigate("/")}>
            Come back
          </button>
        </div>
      </div>
    </div>
  );
};
