import React from "react";
import "./App.css";
import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { SuccessBlock } from "./components/SuccessBlock/SuccessBlock";
import { MyForm } from "./components/MyForm/MyForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route  path="/" element={<MyForm />} />
      <Route path="/success" element={<SuccessBlock />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export { App };
