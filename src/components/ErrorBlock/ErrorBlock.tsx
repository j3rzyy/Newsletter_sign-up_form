import style from "./ErrorBlock.module.css";
import { useNavigate } from "react-router-dom";

export const ErrorBlock = () => {
  const navigate = useNavigate();

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
