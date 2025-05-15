import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./src/pages/Dashboard";
import Home from "./src/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
]);
