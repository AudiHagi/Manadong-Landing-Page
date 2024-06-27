import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import OrderNow from "./Pages/OrderNow.jsx";
import GrabFoodOutlet from "./Pages/GrabFoodOutlet.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import MenuDetail from "./Pages/MenuDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "OrderNow",
    element: <OrderNow />,
  },
  {
    path: "AboutUs",
    element: <AboutUs />,
  },
  {
    path: "GrabFoodOutlet",
    element: <GrabFoodOutlet />,
  },
  {
    path: "OrderNow/GrabFoodOutlet",
    element: <GrabFoodOutlet />,
  },
  {
    path: "/detail/:id",
    element: <MenuDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
