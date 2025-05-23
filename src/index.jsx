import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./AppRoutes";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <App>
    <RouterProvider router={router} />
  </App>
);
