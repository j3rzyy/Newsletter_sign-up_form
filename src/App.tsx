import React from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { SuccessBlock } from "./pages/SuccessPage/SuccessBlock";
import { MyForm } from "./pages/MyFormPage/MyForm";
import { ErrorBlock } from "./pages/ErrorPage/ErrorBlock";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MyForm />} />
      <Route path="/success" element={<SuccessBlock />} />
      <Route path="/error" element={<ErrorBlock />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export { App };
