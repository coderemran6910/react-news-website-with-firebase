import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import AuthProvider from "./Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsCategoryProvider from "./Provider/NewsCategoryProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <NewsCategoryProvider>
        <RouterProvider router={router}></RouterProvider>
      </NewsCategoryProvider>
    </AuthProvider>
    <ToastContainer> </ToastContainer>
  </React.StrictMode>
);
