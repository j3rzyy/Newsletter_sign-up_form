import React from "react";
import "./App.css";
import { CustomForm } from "./components/CustomForm";
import imgDesktop from './assets/illustration-sign-up-desktop.svg'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="left-side">
          <CustomForm />
        </div>
        <div className="right-side">
          <picture>
            <source srcSet="" />
          </picture>
          <img src="./assets/illustration-sign-up-desktop.svg" />
        </div>
      </div>
    </div>
  );
};

export { App };
