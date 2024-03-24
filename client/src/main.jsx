import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import ReduxProvider from "./redux/reduxProvider.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <NextUIProvider>
      <React.StrictMode>
        <BrowserRouter>
          <ReduxProvider>
            <App />
          </ReduxProvider>
        </BrowserRouter>
      </React.StrictMode>
    </NextUIProvider>
  </LocalizationProvider>
);
