import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  li,
  a {
    color: ${theme.colors.default.white};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  p,
  span,
  label {
    color: ${theme.colors.main.form};
  }
`}`;
