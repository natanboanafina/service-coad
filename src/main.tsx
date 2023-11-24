import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/index.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import { GlobalStyle } from "./styles/GlobalStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
