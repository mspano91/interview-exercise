import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReduxProvider from "./redux/reduxProvider.jsx";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <React.StrictMode>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </React.StrictMode>
  </NextUIProvider>
);
