import React from "react";
import "./App.css";
import { CustomForm } from "./components/CustomForm";
import logoDesktop from "./assets/illustration-sign-up-desktop.svg";
import logoMobile from "./assets/illustration-sign-up-mobile.svg";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="left-side">
          <CustomForm />
        </div>
        <div className="right-side">
          <picture>
            <source srcSet={logoMobile} media="(max-width: 575px)"/>
            <img src={logoDesktop} alt="logo" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export { App };
