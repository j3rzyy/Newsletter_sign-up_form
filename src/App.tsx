import React from "react";
import "./App.css";
import { CustomForm } from "./components/CustomForm";
import logoDesktop from "./assets/illustration-sign-up-desktop.svg";
import logoMobile from "./assets/illustration-sign-up-mobile.svg";
import marker from "./assets/icon-list.svg";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-side">
          <div className="left-wrap">
            <h1 className="textHeader">Stay updated!</h1>

            <div className="text">
              Join 60,000+ product managers receiving monthly updates on:
            </div>

            <ul>
              <li>
                <img src={marker} alt="-" />
                <span>Product discovery and building what matters</span>
              </li>
              <li>
                <img src={marker} alt="-" />
                <span>Measuring to ensure updates are a success</span>
              </li>
              <li>
                <img src={marker} alt="-" />
                <span>And much more!</span>
              </li>
            </ul>

            <div className="form">
              <CustomForm />
            </div>
          </div>
        </div>

        <div className="right-side">
          <picture>
            <source srcSet={logoMobile} media="(max-width: 1000px)" />
            <img src={logoDesktop} alt="logo" />
          </picture>
        </div>
      </div>
    </div>
  );
}

export { App };
