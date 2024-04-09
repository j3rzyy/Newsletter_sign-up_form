import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import style from "./SuccessBlock.module.css";
import iconSuccess from "../../assets/icon-success.svg";
import { useNavigate } from "react-router-dom";

export const SuccessBlock = () => {
  const navigate = useNavigate()

  return (
    <div className={style.container}>
      <div className={style.block}>
        <div className={style.content}>
          <img src={iconSuccess} alt="+" style={{width: '64px'}} />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to{" "}
            <span className={style.email}>ash@loremcompany.com</span>. Please
            open it and click the button inside to confirm
          </p>
          <button className={style.dismissBtn} onClick={() => navigate('/')}>Dismiss message</button>
        </div>
      </div>
    </div>
  );
};
