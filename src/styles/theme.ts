import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    default: {
      white: "#FFFFFF",
      black: "#000000"
    },
    navbar: {
      background: "#023047",
      modalBg: "rgba(255,255,255,0.5)",
      openNavHover: "#aac0aa80"
    },
    button: {
      background: "#0096c7",
      bgHover: "#023e8a"
    },
    main: {
      form: "#023047",
      formShadow: "#003049",
      inputBorder: "#003049",
      inputText: "#808080",
      stripes: "#edf6f9"
    }
  },
  font: {
    family: {},
    sizes: {
      xxSmall: "0.25rem", // 4px,
      xSmall: "0.5rem", // 8px,
      small: "0.75rem", // 12px,
      base: "1rem", // 16px,
      medium: "1.25rem", // 20px,
      large: "1.5rem", // 24px,
      xLarge: "1.88rem", // 30px,
      xxLarge: "2.13rem" // 34px,
    }
  },
  sizes: {
    fullPercentage: "100%",
    halfPercentage: "50%",
    fullVW: "100vw",
    fullVH: "100vh",
    navbar: {
      height: "10vh"
    }
  }
};
