import { createTheme, createVar } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  colors: {
    primary: "blue",
    text: "white",
  },
});

export const otherThemeClass = createTheme(vars, {
  colors: {
    primary: "red",
    text: "white",
  },
});
