import * as ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme/Theme";
import { GlobalStyle } from "./Global/GlobalStyle";

import App from "./App/app";
import React from "react";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme} />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
