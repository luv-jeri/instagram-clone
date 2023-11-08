import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthWrapper } from "./context/AuthContext.jsx";
import axios from "axios";
import "./index.css";

axios.defaults.baseURL = "http://localhost:3001";

axios.defaults.withCredentials = true;

axios.defaults.headers.common["Authorization"] = `Bearer ${
  localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).token
    : null
}`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthWrapper>
        <App />
      </AuthWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
