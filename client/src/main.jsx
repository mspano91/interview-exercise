import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReduxProvider from "./redux/reduxProvider.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <NextUIProvider>
      <React.StrictMode>
        <ReduxProvider>
          <App />
        </ReduxProvider>
      </React.StrictMode>
    </NextUIProvider>
  </LocalizationProvider>
);
