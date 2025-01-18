import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider as CustomThemeProvider } from "./Theme/ThemeProvider";
import Theme1 from "./Theme/Theme";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <MuiThemeProvider theme={Theme1}>
        <App />
      </MuiThemeProvider>
    </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

