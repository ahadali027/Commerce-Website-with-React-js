import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { IconContext } from "react-icons";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IconContext.Provider value={{ className: " transition-colors", size: 20 }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>
);